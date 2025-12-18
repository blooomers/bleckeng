import { projects, Project } from "@/app/projects/data";

export function getProjectsForService(serviceId: string): Project[] {
  const projectsWithImages = projects.filter((p) => p.image);

  switch (serviceId) {
    case "civil-engineering":
      return projectsWithImages.filter(
        (p) =>
          p.categories.some((cat) =>
            [
              "Municipal",
              "Stormwater",
              "Restoration",
              "Master Planning",
              "Healthcare",
              "Transportation",
              "Highway",
            ].includes(cat)
          ) ||
          p.scope.some(
            (s) =>
              s.toLowerCase().includes("civil engineering") ||
              s.toLowerCase().includes("drainage") ||
              s.toLowerCase().includes("stormwater") ||
              s.toLowerCase().includes("municipal")
          )
      );

    case "municipal-engineering":
      return projectsWithImages.filter(
        (p) =>
          p.categories.includes("Municipal") ||
          p.scope.some(
            (s) =>
              s.toLowerCase().includes("municipal") ||
              s.toLowerCase().includes("mft") ||
              s.toLowerCase().includes("cdbg") ||
              s.toLowerCase().includes("infrastructure")
          )
      );

    case "drainage-engineering":
      return projectsWithImages.filter(
        (p) =>
          p.categories.includes("Stormwater") ||
          p.scope.some(
            (s) =>
              s.toLowerCase().includes("drainage") ||
              s.toLowerCase().includes("stormwater") ||
              s.toLowerCase().includes("detention") ||
              s.toLowerCase().includes("flood") ||
              s.toLowerCase().includes("watershed") ||
              s.toLowerCase().includes("bmp")
          )
      );

    case "bluffs-ravines":
      return projectsWithImages.filter(
        (p) =>
          p.categories.some((cat) =>
            ["Restoration", "Surveying"].includes(cat)
          ) ||
          p.scope.some(
            (s) =>
              s.toLowerCase().includes("ravine") ||
              s.toLowerCase().includes("bluff") ||
              s.toLowerCase().includes("retaining wall") ||
              s.toLowerCase().includes("slope") ||
              s.toLowerCase().includes("stabilization")
          ) ||
          p.title.toLowerCase().includes("ravine") ||
          p.title.toLowerCase().includes("bluff")
      );

    case "land-surveying":
      return projectsWithImages.filter(
        (p) =>
          p.categories.includes("Surveying") ||
          p.scope.some(
            (s) =>
              s.toLowerCase().includes("survey") ||
              s.toLowerCase().includes("topographic") ||
              s.toLowerCase().includes("plat") ||
              s.toLowerCase().includes("mapping") ||
              s.toLowerCase().includes("gps") ||
              s.toLowerCase().includes("gis") ||
              s.toLowerCase().includes("staking") ||
              s.toLowerCase().includes("layout")
          )
      );

    case "construction-administration":
    case "construction-management":
      return projectsWithImages.filter((p) =>
        p.scope.some(
          (s) =>
            s.toLowerCase().includes("construction") ||
            s.toLowerCase().includes("administration") ||
            s.toLowerCase().includes("observation") ||
            s.toLowerCase().includes("inspection") ||
            s.toLowerCase().includes("shop drawing")
        )
      );

    case "design-build":
      return projectsWithImages.filter((p) =>
        p.scope.some(
          (s) =>
            s.toLowerCase().includes("design/build") ||
            s.toLowerCase().includes("design-build")
        )
      );

    default:
      return [];
  }
}
