import { client } from "../../../prisma/client"
import { UpdateCompanyInfoCase } from "./updateCompanyInfoCase"
import { UpdateCompanyInfoController } from "./updateCompanyInfoController"
import { PrismaCityRepository } from "../../../repository/in-prisma/PrismaCityRepository"
import { PrismaCountryRepository } from "../../../repository/in-prisma/PrismaCountryRepository"
import { PrismaCompanyRepository } from "../../../repository/in-prisma/PrismaCompanyRepository"

export const updateCompanyInfoFactory = () => {
    const prismaCityRepository           = new PrismaCityRepository(client)
    const prismaCountryRepository        = new PrismaCountryRepository(client)
    const prismaCompanyRepository      = new PrismaCompanyRepository(client)
    const updateCompanyInfoCase        = new UpdateCompanyInfoCase(prismaCityRepository,prismaCountryRepository,prismaCompanyRepository)
    const updateCompanyInfoController  = new UpdateCompanyInfoController(updateCompanyInfoCase)

    return updateCompanyInfoController
}