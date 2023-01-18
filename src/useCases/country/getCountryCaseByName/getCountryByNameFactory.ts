import { client } from "../../../prisma/client"
import { GetCountryByNameCase } from "./getCountryCaseByName"
import { GetCountryByNameController } from "./getCountryByNameController"
import { PrismaCountryRepository } from "../../../repository/in-prisma/PrismaCountryRepository"

export const getCountryByNameFactory =  () => {
    const prismaCountryRepository   = new PrismaCountryRepository(client)
    const getCountryByNameCase        = new GetCountryByNameCase(prismaCountryRepository)
    const getCountryByNameController  = new GetCountryByNameController(getCountryByNameCase)

    return getCountryByNameController
} 