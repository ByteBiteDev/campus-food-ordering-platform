import { prisma } from "../../lib/prisma";

export const UploadsService = {
  async create(data: any) {
    return prisma.upload.create({
      data
    });
  },

  async list() {
    return prisma.upload.findMany({
      orderBy: { createdAt: "desc" }
    });
  },

  async get(id: string) {
    return prisma.upload.findUnique({
      where: { id }
    });
  },

  async delete(id: string) {
    return prisma.upload.delete({
      where: { id }
    });
  }
};
