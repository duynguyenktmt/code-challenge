import { Request, Response } from 'express';
import * as resourceService from '../services/resource.service';

export const createResource = async (req: Request, res: Response) => {
  const { title, content } = req.body;
  const resource = await resourceService.createResource(title, content);
  res.status(201).json(resource);
};

export const getResources = async (req: Request, res: Response) => {
  const title = req.query.title as string | undefined;
  const resources = await resourceService.getResources(title);
  res.json(resources);
};

export const getResourceById = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const resource = await resourceService.getResourceById(id);
  if (!resource) return res.status(404).json({ message: 'Not found' });
  res.json(resource);
};

export const updateResource = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const { title, content } = req.body;
  const updated = await resourceService.updateResource(id, title, content);
  res.json(updated);
};

export const deleteResource = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  await resourceService.deleteResource(id);
  res.status(204).send();
};
