import { prisma } from "../prisma/client";

export const createResource = async (title: string, content: string) => {
  return await prisma.resource.create({
    data: { title, content }
  });
};

export const getResources = async (filterTitle?: string) => {
  return await prisma.resource.findMany({
    where: filterTitle ? { title: { contains: filterTitle } } : undefined,
    orderBy: { createdAt: 'desc' }
  });
};

export const getResourceById = async (id: number) => {
  return await prisma.resource.findUnique({ where: { id } });
};  

export const updateResource = async (id: number, title: string, content: string) => {
  return await prisma.resource.update({
    where: { id },
    data: { title, content }
  });
};

export const deleteResource = async (id: number) => {
  return await prisma.resource.delete({ where: { id } });
};
