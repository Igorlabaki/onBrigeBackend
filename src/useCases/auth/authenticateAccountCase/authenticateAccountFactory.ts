import { client } from "../../../prisma/client"
import { AuthenticateAccountCase } from "./authenticateAccountCase"
import { PrismaTokenRepository } from "../../../repository/in-prisma/PrismaTokenRepository"
import { PrismaCompanyRepository } from "../../../repository/in-prisma/PrismaCompanyRepository"
import { PrismaDeveloperRepository } from "../../../repository/in-prisma/PrismaDeveloperRepository"
import { AuthenticateAccountController } from "./authenticateAccountControler"

export const authenticateAccountFactory = () => {
    const prismaTokenRepository         = new PrismaTokenRepository(client)
    const prismaCompanyRepository       = new PrismaCompanyRepository(client)
    const prismaDeveloperRepository     = new PrismaDeveloperRepository(client)
    const authenticateAccountCase       = new AuthenticateAccountCase(prismaDeveloperRepository,prismaCompanyRepository,prismaTokenRepository)
    const authenticateAccountController = new AuthenticateAccountController(authenticateAccountCase)

    return authenticateAccountController
}