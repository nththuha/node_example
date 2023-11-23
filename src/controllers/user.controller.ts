import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

export const findAll = async (_req: Request, res: Response) => {
  const allUsers = await prisma.user.findMany();
  res.status(200).json({
    users: allUsers,
  });
};
