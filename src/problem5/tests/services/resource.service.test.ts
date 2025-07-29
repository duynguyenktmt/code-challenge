import * as ResourceService from '../../src/services/resource.service';
import { prisma } from '../../src/prisma/client';

jest.mock('../../src/prisma/client', () => ({
  prisma: {
    resource: {
      create: jest.fn(),
      findMany: jest.fn(),
      findUnique: jest.fn(),
      update: jest.fn(),
      delete: jest.fn(),
    },
  },
}));

describe('Resource Service', () => {
  const mockResource = {
    id: 1,
    title: 'Test Title',
    content: 'Test Content',
    createdAt: new Date(),
  };

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('createResource', () => {
    it('should create a new resource', async () => {
      (prisma.resource.create as jest.Mock).mockResolvedValue(mockResource);

      const result = await ResourceService.createResource('Test Title', 'Test Content');

      expect(result).toEqual(mockResource);
      expect(prisma.resource.create).toHaveBeenCalledWith({
        data: { title: 'Test Title', content: 'Test Content' },
      });
    });

    it('should throw error when creating with invalid data', async () => {
      const error = new Error('Invalid data');
      (prisma.resource.create as jest.Mock).mockRejectedValue(error);

      await expect(ResourceService.createResource('', '')).rejects.toThrow('Invalid data');
    });
  });

  describe('getResources', () => {
    it('should return list of resources without filter', async () => {
      (prisma.resource.findMany as jest.Mock).mockResolvedValue([mockResource]);

      const result = await ResourceService.getResources();

      expect(result).toEqual([mockResource]);
      expect(prisma.resource.findMany).toHaveBeenCalledWith({
        where: undefined,
        orderBy: { createdAt: 'desc' },
      });
    });

    it('should return filtered resources by title', async () => {
      (prisma.resource.findMany as jest.Mock).mockResolvedValue([mockResource]);

      const result = await ResourceService.getResources('Test');

      expect(result).toEqual([mockResource]);
      expect(prisma.resource.findMany).toHaveBeenCalledWith({
        where: { title: { contains: 'Test' } },
        orderBy: { createdAt: 'desc' },
      });
    });

    it('should handle database error', async () => {
      (prisma.resource.findMany as jest.Mock).mockRejectedValue(new Error('DB down'));

      await expect(ResourceService.getResources()).rejects.toThrow('DB down');
    });
  });

  describe('getResourceById', () => {
    it('should return resource by ID', async () => {
      (prisma.resource.findUnique as jest.Mock).mockResolvedValue(mockResource);

      const result = await ResourceService.getResourceById(1);

      expect(result).toEqual(mockResource);
      expect(prisma.resource.findUnique).toHaveBeenCalledWith({ where: { id: 1 } });
    });

    it('should return null if not found', async () => {
      (prisma.resource.findUnique as jest.Mock).mockResolvedValue(null);

      const result = await ResourceService.getResourceById(999);

      expect(result).toBeNull();
    });
  });

  describe('updateResource', () => {
    it('should update resource by ID', async () => {
      const updated = { ...mockResource, title: 'Updated', content: 'Updated Content' };
      (prisma.resource.update as jest.Mock).mockResolvedValue(updated);

      const result = await ResourceService.updateResource(1, 'Updated', 'Updated Content');

      expect(result).toEqual(updated);
      expect(prisma.resource.update).toHaveBeenCalledWith({
        where: { id: 1 },
        data: { title: 'Updated', content: 'Updated Content' },
      });
    });

    it('should throw error if resource not found', async () => {
      (prisma.resource.update as jest.Mock).mockRejectedValue(new Error('Not found'));

      await expect(ResourceService.updateResource(999, 'x', 'y')).rejects.toThrow('Not found');
    });
  });

  describe('deleteResource', () => {
    it('should delete resource by ID', async () => {
      (prisma.resource.delete as jest.Mock).mockResolvedValue(mockResource);

      const result = await ResourceService.deleteResource(1);

      expect(result).toEqual(mockResource);
      expect(prisma.resource.delete).toHaveBeenCalledWith({ where: { id: 1 } });
    });

    it('should throw error if resource not found', async () => {
      (prisma.resource.delete as jest.Mock).mockRejectedValue(new Error('Not found'));

      await expect(ResourceService.deleteResource(999)).rejects.toThrow('Not found');
    });
  });
});
