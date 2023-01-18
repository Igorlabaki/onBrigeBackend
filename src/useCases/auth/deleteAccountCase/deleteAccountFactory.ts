import { client } from "../../../prisma/client"
import { DeleteAccountCase } from "./deleteAccountCase"
import { DeleteAccountController } from "./deleteAccountController"
import { PrismaCompanyRepository } from "../../../repository/in-prisma/PrismaCompanyRepository"
import { PrismaDeveloperRepository } from "../../../repository/in-prisma/PrismaDeveloperRepository"

export const deletedAccountFactory = () => {
    const prismaCompanyRepository   = new PrismaCompanyRepository(client)
    const prismaDeveloperRepository = new PrismaDeveloperRepository(client)
    const deleteAccountCase         = new DeleteAccountCase(prismaDeveloperRepository,prismaCompanyRepository)
    const deleteAccountController   = new DeleteAccountController(deleteAccountCase)

    return deleteAccountController
}