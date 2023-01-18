import { client } from "../../../prisma/client"
import { ListCompanyAccountsCase } from "./listCompanyAccountsCase"
import { ListCompanyAccountsController } from "./listCompanyAccountsController"
import { PrismaCompanyRepository } from "../../../repository/in-prisma/PrismaCompanyRepository"

export const listCopmpanyAccountsFactory = () => {
    const prismaCompanyRepository        = new PrismaCompanyRepository(client)
    const listCompanyAccountsCase        = new ListCompanyAccountsCase(prismaCompanyRepository)
    const listCompanyAccountsController  = new ListCompanyAccountsController(listCompanyAccountsCase)

    return listCompanyAccountsController
}