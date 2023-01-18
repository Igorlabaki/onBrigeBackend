import { client } from "../../../prisma/client"
import { GetCompanyByIdCase } from "./getCompanyByIdCase"
import { GetCompanyByIdController } from "./getCompanyByIdController"
import { PrismaCompanyRepository } from "../../../repository/in-prisma/PrismaCompanyRepository"

export const getCompanyByIdFactory = () => {
    const prismaCompanyRepository   = new PrismaCompanyRepository(client)
    const getCompanyByIdCase        = new GetCompanyByIdCase(prismaCompanyRepository)
    const getCompanyByIdController  = new GetCompanyByIdController(getCompanyByIdCase)

    return getCompanyByIdController
}