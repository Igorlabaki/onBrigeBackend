import { client } from "../../../prisma/client"
import { UpdateDeveloperInfoCase } from "./updateDeveloperInfoCase"
import { UpdateDeveloperInfoController } from "./updateDeveloperInfoController"
import { PrismaCityRepository } from "../../../repository/in-prisma/PrismaCityRepository"
import { PrismaAreaRepository } from "../../../repository/in-prisma/PrismaAreaRepository"
import { PrismaLevelRepository } from "../../../repository/in-prisma/PrismaLevelRepository"
import { PrismaCountryRepository } from "../../../repository/in-prisma/PrismaCountryRepository"
import { PrismaDeveloperRepository } from "../../../repository/in-prisma/PrismaDeveloperRepository"

export const updateDeveloperInfoFactory = () => {
    const prismaCityRepository           = new PrismaCityRepository(client)
    const prismaCountryRepository        = new PrismaCountryRepository(client)
    const prismaLevelRepository          = new PrismaLevelRepository(client)
    const prismaAreaRepository           = new PrismaAreaRepository(client)
    const prismaDeveloperRepository      = new PrismaDeveloperRepository(client)
    const updateDeveloperInfoCase        = new UpdateDeveloperInfoCase(prismaCityRepository,prismaAreaRepository,prismaLevelRepository,prismaCountryRepository,prismaDeveloperRepository)
    const updateDeveloperInfoController  = new UpdateDeveloperInfoController(updateDeveloperInfoCase)

    return updateDeveloperInfoController
}