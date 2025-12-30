"use client";

import { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";

interface Location {
  id: string;
  title: string;
  lat: number;
  lng: number;
  path: string;
}

interface TerrainMapProps {
  locations: Location[];
  className?: string;
}

export default function TerrainMap({ locations, className = "" }: TerrainMapProps) {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const markersRef = useRef<mapboxgl.Marker[]>([]);
  const [mapLoaded, setMapLoaded] = useState(false);

  useEffect(() => {
    if (!mapContainer.current || map.current) return;

    const token = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;
    if (!token) {
      console.warn("Mapbox token not found. Please set NEXT_PUBLIC_MAPBOX_TOKEN in your .env file");
      return;
    }

    // Initialize map with terrain style
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/outdoors-v12", // Terrain/outdoors style
      center: [-98.5, 39.5], // Center of US
      zoom: 4,
      accessToken: token,
    });

    map.current.on("load", () => {
      // Hide road, label, and other non-terrain layers but keep state boundaries
      const style = map.current!.getStyle();
      if (style.layers) {
        style.layers.forEach((layer: any) => {
          const layerId = layer.id?.toLowerCase() || "";
          // Keep state boundaries visible, hide everything else non-terrain
          const isStateBoundary = 
            layerId.includes("admin-1") || 
            layerId.includes("admin_state") ||
            (layerId.includes("boundary") && layerId.includes("admin"));
          
          // Hide all road, street, label, place, and POI layers (but not state boundaries)
          if (
            !isStateBoundary &&
            (layer.type === "symbol" ||
            layerId.includes("road") ||
            layerId.includes("street") ||
            layerId.includes("highway") ||
            layerId.includes("label") ||
            layerId.includes("place") ||
            layerId.includes("poi") ||
            (layerId.includes("admin") && !layerId.includes("admin-1") && !layerId.includes("admin_state")) ||
            (layerId.includes("boundary") && !layerId.includes("admin")) ||
            layerId.includes("country-label"))
          ) {
            try {
              map.current!.setLayoutProperty(layer.id, "visibility", "none");
            } catch (e) {
              // Some layers might not support visibility property
            }
          }
        });
      }
      setMapLoaded(true);
    });

    // Add navigation controls
    map.current.addControl(new mapboxgl.NavigationControl(), "top-right");

    // Cleanup
    return () => {
      map.current?.remove();
    };
  }, []);

  useEffect(() => {
    if (!map.current || !mapLoaded) return;

    // Remove existing markers
    markersRef.current.forEach((marker) => marker.remove());
    markersRef.current = [];

    // Calculate bounds to fit all locations
    const bounds = new mapboxgl.LngLatBounds();
    locations.forEach((location) => {
      bounds.extend([location.lng, location.lat]);
    });

    // Fit map to show all markers with some padding
    map.current.fitBounds(bounds, {
      padding: { top: 50, bottom: 50, left: 50, right: 50 },
      maxZoom: 5.5, // Don't zoom in too close
    });

    // Add markers for each location
    locations.forEach((location) => {
      // Create wrapper container
      const wrapper = document.createElement("div");
      wrapper.style.position = "relative";
      wrapper.style.width = "0";
      wrapper.style.height = "0";
      
      // Create hover tooltip
      const tooltip = document.createElement("div");
      tooltip.style.position = "absolute";
      tooltip.style.bottom = "100%";
      tooltip.style.left = "50%";
      tooltip.style.transform = "translateX(-50%)";
      tooltip.style.marginBottom = "8px";
      tooltip.style.padding = "6px 10px";
      tooltip.style.backgroundColor = "#893002";
      tooltip.style.color = "white";
      tooltip.style.borderRadius = "4px";
      tooltip.style.fontSize = "12px";
      tooltip.style.fontWeight = "500";
      tooltip.style.whiteSpace = "nowrap";
      tooltip.style.pointerEvents = "none";
      tooltip.style.opacity = "0";
      tooltip.style.transition = "opacity 0.2s";
      tooltip.style.zIndex = "1000";
      tooltip.style.boxShadow = "0 2px 8px rgba(0,0,0,0.2)";
      tooltip.textContent = location.title;
      
      // Add arrow to tooltip
      const arrow = document.createElement("div");
      arrow.style.position = "absolute";
      arrow.style.top = "100%";
      arrow.style.left = "50%";
      arrow.style.transform = "translateX(-50%)";
      arrow.style.width = "0";
      arrow.style.height = "0";
      arrow.style.borderLeft = "6px solid transparent";
      arrow.style.borderRight = "6px solid transparent";
      arrow.style.borderTop = "6px solid #893002";
      tooltip.appendChild(arrow);
      
      // Create the pin element - centered at 0,0
      const el = document.createElement("div");
      el.className = "custom-marker";
      el.style.width = "16px";
      el.style.height = "16px";
      el.style.borderRadius = "50%";
      el.style.backgroundColor = "#893002";
      el.style.border = "4px solid white";
      el.style.cursor = "pointer";
      el.style.boxShadow = "0 2px 4px rgba(0,0,0,0.2)";
      el.style.transition = "transform 0.2s";
      el.style.transformOrigin = "center center";
      el.style.position = "absolute";
      el.style.left = "-8px"; // Half of 16px width
      el.style.top = "-8px"; // Half of 16px height
      
      wrapper.appendChild(tooltip);
      wrapper.appendChild(el);

      // Add hover events to wrapper so tooltip works when hovering anywhere on marker
      wrapper.addEventListener("mouseenter", () => {
        el.style.transform = "scale(1.5)";
        tooltip.style.opacity = "1";
      });
      wrapper.addEventListener("mouseleave", () => {
        el.style.transform = "scale(1)";
        tooltip.style.opacity = "0";
      });

      wrapper.addEventListener("click", () => {
        window.location.href = location.path;
      });

      // Create marker with anchor at center (0,0) - the exact coordinate point
      const marker = new mapboxgl.Marker({
        element: wrapper,
        anchor: "center", // This anchors at the center of the element
      })
        .setLngLat([location.lng, location.lat])
        .setPopup(
          new mapboxgl.Popup({ offset: 25 }).setHTML(
            `<div class="p-2"><strong>${location.title}</strong></div>`
          )
        )
        .addTo(map.current!);

      markersRef.current.push(marker);
    });

    // Cleanup markers on unmount
    return () => {
      markersRef.current.forEach((marker) => marker.remove());
      markersRef.current = [];
    };
  }, [locations, mapLoaded]);

  return (
    <div ref={mapContainer} className={`w-full h-full ${className}`} />
  );
}

