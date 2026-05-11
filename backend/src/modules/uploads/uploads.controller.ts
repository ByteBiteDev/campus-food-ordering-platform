import type { Request, Response } from "express";
import { UploadsService } from "./uploads.service";

export const UploadsController = {
  async upload(req: Request, res: Response) {
    try {
      const file = (req as any).file;
      if (!file) {
        return res.status(400).json({ error: "No file uploaded" });
      }

      // Validate file size (max 10MB)
      const maxSize = 10 * 1024 * 1024;
      if (file.size > maxSize) {
        return res.status(400).json({ error: "File size exceeds 10MB limit" });
      }

      // Validate file type
      const allowedTypes = ['image/jpeg', 'image/png', 'image/gif', 'application/pdf'];
      if (!allowedTypes.includes(file.mimetype)) {
        return res.status(400).json({ error: "Invalid file type. Only JPEG, PNG, GIF, and PDF are allowed" });
      }

      const uploadData = {
        filename: file.originalname,
        mimetype: file.mimetype,
        size: file.size,
        url: file.path
      };

      const upload = await UploadsService.create(uploadData);
      res.json(upload);
    } catch (e: any) {
      res.status(500).json({ error: e.message });
    }
  },

  async list(req: Request, res: Response) {
    try {
      const page = parseInt(req.query.page as string) || 1;
      const limit = parseInt(req.query.limit as string) || 10;
      const uploads = await UploadsService.list(page, limit);
      res.json(uploads);
    } catch (e: any) {
      res.status(500).json({ error: e.message });
    }
  },

  async get(req: Request, res: Response) {
    try {
      const upload = await UploadsService.get(req.params.id as string);
      if (!upload) {
        return res.status(404).json({ error: "Upload not found" });
      }
      res.json(upload);
    } catch (e: any) {
      res.status(500).json({ error: e.message });
    }
  },

  async delete(req: Request, res: Response) {
    try {
      await UploadsService.delete(req.params.id as string);
      res.json({ message: "Upload deleted successfully" });
    } catch (e: any) {
      res.status(500).json({ error: e.message });
    }
  }
};
