import { prisma } from "../../lib/prisma";

export const VendorsService = {
  async create(data: any) {
    return prisma.vendor.create({
      data
    });
  },

  async update(id: string, data: any) {
    return prisma.vendor.update({
      where: { id },
      data
    });
  },

  async list(location?: string) {
    return prisma.vendor.findMany({
      where: {
        isApproved: true,
        ...(location ? { location: { contains: location, mode: "insensitive" } } : {})
      },
      orderBy: { createdAt: "desc" },
      include: {
        manager: {
          select: {
            id: true,
            name: true,
            phone: true
          }
        }
      }
    });
  },

  async get(id: string) {
    return prisma.vendor.findUnique({
      where: { id },
      include: {
        manager: {
          select: {
            id: true,
            name: true,
            phone: true
          }
        },
        meals: true,
        orders: true
      }
    });
  },

  async getMyVendor(managerId: string) {
    return prisma.vendor.findUnique({
      where: { managerId },
      include: {
        meals: true,
      },
    });
  },

  async getMyVendorAgents(managerId: string) {
    const vendor = await prisma.vendor.findUnique({
      where: { managerId },
      include: {
        agents: {
          include: {
            user: { select: { id: true, name: true, phone: true } },
          },
        },
      },
    });

    if (!vendor) {
      throw new Error("Vendor profile not found");
    }

    return vendor.agents;
  },

  async getVendorStats(vendorId: string) {
    const vendor = await prisma.vendor.findUnique({
      where: { id: vendorId },
      include: {
        _count: {
          select: {
            meals: true,
            orders: true,
            agents: true
          }
        }
      }
    });

    if (!vendor) {
      throw new Error("Vendor not found");
    }

    return {
      totalMeals: vendor._count.meals,
      totalOrders: vendor._count.orders,
      totalAgents: vendor._count.agents
    };
  },

  async delete(id: string) {
    return prisma.vendor.delete({
      where: { id }
    });
  }
};
