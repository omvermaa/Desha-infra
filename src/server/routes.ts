import type { Express } from "express";
import { type Server } from "http";
import { storage } from "./storage";
import { api } from "../shared/routes";

async function seedDatabase() {
  const existing = await storage.getProjects();
  if (existing.length === 0) {
    await storage.createProject({
      title: "The Zenith Tower",
      slug: "zenith-tower",
      description: "A pinnacle of modern architecture, offering unparalleled views of the city skyline and world-class amenities.",
      heroImage: "https://images.unsplash.com/photo-1541888081622-1ca7dc0cb83a?auto=format&fit=crop&q=80",
      location: "Downtown Metropolis",
      completionDate: "Q4 2025",
      stats: [
        { label: "Height", value: "350m" },
        { label: "Floors", value: "88" },
        { label: "Residences", value: "120" }
      ],
      content: "The Zenith Tower redefines urban living. Designed by award-winning architects, the building features a spiraling glass facade that catches the light at every angle. Residents enjoy exclusive access to a sky lounge, private helipad, and an infinity pool that seems to blend into the horizon.",
      gallery: [
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1506836467174-27f1042aa48c?auto=format&fit=crop&q=80"
      ]
    });
    await storage.createProject({
      title: "Lumina Estates",
      slug: "lumina-estates",
      description: "Exclusive, eco-friendly luxury villas nestled in the heart of nature, designed for the conscious elite.",
      heroImage: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80",
      location: "Silicon Valley Suburbs",
      completionDate: "Q2 2026",
      stats: [
        { label: "Villas", value: "45" },
        { label: "Acres", value: "120" },
        { label: "Energy", value: "100% Solar" }
      ],
      content: "Lumina Estates is a sanctuary of peace. Each villa is a masterpiece of sustainable design, utilizing smart home technology and locally sourced materials. The community features private hiking trails, organic gardens, and a state-of-the-art wellness center.",
      gallery: [
        "https://images.unsplash.com/photo-1600607687931-cebf0746e50e?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80"
      ]
    });
    await storage.createProject({
      title: "Oasis Commercial Park",
      slug: "oasis-commercial",
      description: "The future of workspace. A sprawling campus of interconnected glass buildings surrounded by lush greenery.",
      heroImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80",
      location: "Tech District",
      completionDate: "Ready to Move",
      stats: [
        { label: "Office Space", value: "500k sqft" },
        { label: "Retail", value: "50k sqft" },
        { label: "Parking", value: "1,200 cars" }
      ],
      content: "Oasis Commercial Park is designed to foster innovation and collaboration. The open-plan offices are flooded with natural light, and the central courtyard serves as a vibrant hub for networking and relaxation. It's more than a workplace; it's a community.",
      gallery: [
        "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80"
      ]
    });
  }
}
export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
    
  app.get(api.projects.list.path, async (req, res) => {
    const projects = await storage.getProjects();
    res.json(projects);
  });
   app.get(api.projects.getBySlug.path, async (req, res) => {
    const project = await storage.getProjectBySlug(req.params.slug);
    if (!project) {
      return res.status(404).json({ message: "Project not found" });
    }
    res.json(project);
  });
  // Run seed
  seedDatabase().catch(console.error);
  return httpServer;
}