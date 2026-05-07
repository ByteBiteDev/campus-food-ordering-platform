import { prisma } from "../../lib/prisma";

export const UploadsService = {
  async create(data: any) {
    try {
      return prisma.upload.create({
        data
      });
    } catch (error) {
      throw new Error("Failed to create upload record");
    }
  },

  async list() {
    try {
      return prisma.upload.findMany({
        orderBy: { createdAt: "desc" }
      });
    } catch (error) {
      throw new Error("Failed to retrieve uploads");
    }
  },

  async get(id: string) {
    try {
      const upload = await prisma.upload.findUnique({
        where: { id }
      });
      if (!upload) {
        throw new Error("Upload not found");
      }
      return upload;
    } catch (error) {
      throw new Error("Failed to retrieve upload");
    }
  },

  async delete(id: string) {
    try {
      return prisma.upload.delete({
        where: { id }
      });
    } catch (error) {
      throw new Error("Failed to delete upload");
    }
  }
};
