"use client";

import { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

interface ProjectMapProps {
  lat: number;
  lng: number;
  title: string;
  className?: string;
}

export default function ProjectMap({
  lat,
  lng,
  title,
  className = "",
}: ProjectMapProps) {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const markerRef = useRef<mapboxgl.Marker | null>(null);
  const [mapLoaded, setMapLoaded] = useState(false);

  useEffect(() => {
    if (!mapContainer.current || map.current) return;

    const token = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;
    if (!token) {
      console.warn(
        "Mapbox token not found. Please set NEXT_PUBLIC_MAPBOX_TOKEN in your .env file"
      );
      return;
    }

    // Small delay to ensure container is fully rendered
    const initMap = () => {
      if (!mapContainer.current || map.current) return;

      // Initialize map
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: "mapbox://styles/mapbox/light-v11",
        center: [lng, lat],
        zoom: 14,
        accessToken: token,
      });

      map.current.on("load", () => {
        // Resize map to ensure it renders properly
        map.current?.resize();
        setMapLoaded(true);
      });

      // Add navigation controls
      map.current.addControl(new mapboxgl.NavigationControl(), "top-right");
    };

    // Use requestAnimationFrame to ensure DOM is ready
    const timeoutId = setTimeout(() => {
      requestAnimationFrame(initMap);
    }, 0);

    // Cleanup
    return () => {
      clearTimeout(timeoutId);
      if (map.current) {
        map.current.remove();
        map.current = null;
      }
    };
  }, [lat, lng]);

  useEffect(() => {
    if (!map.current || !mapLoaded) return;

    // Remove existing marker
    if (markerRef.current) {
      markerRef.current.remove();
    }

    // Create wrapper container that stays fixed
    const wrapper = document.createElement("div");
    wrapper.style.position = "relative";
    wrapper.style.width = "32px";
    wrapper.style.height = "32px";
    wrapper.style.cursor = "pointer";
    
    // Create inner marker element that can scale
    const el = document.createElement("div");
    el.className = "custom-marker";
    el.style.width = "32px";
    el.style.height = "32px";
    el.style.borderRadius = "50%";
    el.style.backgroundColor = "#893002";
    el.style.border = "4px solid white";
    el.style.boxShadow = "0 2px 8px rgba(0,0,0,0.3)";
    el.style.transition = "transform 0.2s";
    el.style.transformOrigin = "center center";
    el.style.position = "absolute";
    el.style.top = "0";
    el.style.left = "0";

    wrapper.addEventListener("mouseenter", () => {
      el.style.transform = "scale(1.2)";
    });
    wrapper.addEventListener("mouseleave", () => {
      el.style.transform = "scale(1)";
    });

    wrapper.appendChild(el);

    // Create marker with anchor at center - the wrapper stays fixed
    markerRef.current = new mapboxgl.Marker({
      element: wrapper,
      anchor: "center",
    })
      .setLngLat([lng, lat])
      .setPopup(
        new mapboxgl.Popup({ offset: 25 }).setHTML(
          `<div class="p-2"><strong>${title}</strong></div>`
        )
      )
      .addTo(map.current);

    // Center and zoom to marker
    map.current.flyTo({
      center: [lng, lat],
      zoom: 14,
      duration: 1000,
    });

    // Cleanup
    return () => {
      if (markerRef.current) {
        markerRef.current.remove();
      }
    };
  }, [lat, lng, title, mapLoaded]);

  return (
    <div
      ref={mapContainer}
      className={`w-full h-full min-h-[400px] rounded-lg overflow-hidden ${className}`}
    />
  );
}

