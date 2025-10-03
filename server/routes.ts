import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactInquirySchema } from "@shared/schema";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact inquiry endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      console.log("Contact form submission received:", req.body);
      
      // Validate the request body
      const validationResult = insertContactInquirySchema.safeParse(req.body);
      
      if (!validationResult.success) {
        const validationError = fromZodError(validationResult.error);
        console.log("Validation error:", validationError.message);
        return res.status(400).json({ 
          error: "Validation failed", 
          details: validationError.message 
        });
      }

      // Store the inquiry
      const inquiry = await storage.createContactInquiry(validationResult.data);
      console.log("Contact inquiry created:", inquiry.id);

      res.status(201).json({ 
        success: true, 
        message: "Contact inquiry submitted successfully",
        id: inquiry.id
      });
    } catch (error) {
      console.error("Error creating contact inquiry:", error);
      res.status(500).json({ 
        error: "Internal server error", 
        message: "Failed to submit inquiry" 
      });
    }
  });

  // Get all contact inquiries (for admin/debugging)
  app.get("/api/contact", async (req, res) => {
    try {
      const inquiries = await storage.getContactInquiries();
      res.json(inquiries);
    } catch (error) {
      console.error("Error fetching contact inquiries:", error);
      res.status(500).json({ 
        error: "Internal server error", 
        message: "Failed to fetch inquiries" 
      });
    }
  });

  // Get specific contact inquiry
  app.get("/api/contact/:id", async (req, res) => {
    try {
      const inquiry = await storage.getContactInquiry(req.params.id);
      if (!inquiry) {
        return res.status(404).json({ 
          error: "Not found", 
          message: "Contact inquiry not found" 
        });
      }
      res.json(inquiry);
    } catch (error) {
      console.error("Error fetching contact inquiry:", error);
      res.status(500).json({ 
        error: "Internal server error", 
        message: "Failed to fetch inquiry" 
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
