import { client } from "../../../prisma/client";
import { CreateNewDeveloperAccountCase } from "./createNewDeveloperAccountCase";
import { PrismaTokenRepository } from "../../../repository/in-prisma/PrismaTokenRepository";
import { CreateNewDeveloperAccountController } from "./createNewDeveloperAccountController";
import { PrismaDeveloperRepository } from "../../../repository/in-prisma/PrismaDeveloperRepository";
import { PrismaLevelRepository } from "../../../repository/in-prisma/PrismaLevelRepository";
import { PrismaAreaRepository } from "../../../repository/in-prisma/PrismaAreaRepository";

export const createNewDeveloperAccountFactory = () => {
  const prismaTokenRepository         = new PrismaTokenRepository(client);
  const prismaLevelRepository         = new PrismaLevelRepository(client);
  const prismaAreaRepository          = new PrismaAreaRepository(client);
  const prismaDeveloperRepository     = new PrismaDeveloperRepository(client);
  const registerDevelopersCase        = new CreateNewDeveloperAccountCase(prismaDeveloperRepository,prismaTokenRepository,prismaAreaRepository, prismaLevelRepository);
  const registerDeveloperController   = new CreateNewDeveloperAccountController(registerDevelopersCase);
  
  return registerDeveloperController;
};