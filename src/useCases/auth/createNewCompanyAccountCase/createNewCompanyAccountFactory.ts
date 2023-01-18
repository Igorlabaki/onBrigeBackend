import { client } from "../../../prisma/client";
import { CreateNewCompanyAccountCase } from "./createNewCompanyAccountCase";
import { CreateNewCompanyAccountController } from "./createNewCompanyAccountController";
import { PrismaTokenRepository } from "../../../repository/in-prisma/PrismaTokenRepository";
import { PrismaCompanyRepository } from "../../../repository/in-prisma/PrismaCompanyRepository";


export const createNewCompanyAccountFactory = () => {
  const prismaTokenRepository       = new PrismaTokenRepository(client);
  const prismaCompanyRepository     = new PrismaCompanyRepository(client);
  const registerCompanysCase        = new CreateNewCompanyAccountCase(prismaCompanyRepository,prismaTokenRepository);
  const registerCompanyController   = new CreateNewCompanyAccountController(registerCompanysCase);
  
  return registerCompanyController;
};