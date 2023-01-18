import { client } from "../../../prisma/client"
import { ListCountryCase } from "./listCountryCase"
import { ListCountryController } from "./listCountryController"
import { PrismaCountryRepository } from "../../../repository/in-prisma/PrismaCountryRepository"

export const listCountryFactory = () => {
    const prismaCountryRepository   = new PrismaCountryRepository(client)
    const listCountryCase           = new ListCountryCase(prismaCountryRepository)
    const listCountryController     = new ListCountryController(listCountryCase)

    return listCountryController
}
