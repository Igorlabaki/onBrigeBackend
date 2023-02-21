import { client } from "../../../prisma/client"
import { PrismaDeveloperRepository } from "../../../repository/in-prisma/PrismaDeveloperRepository"
import { PrismaJobRepository } from "../../../repository/in-prisma/PrismaJobRepository"
import { DeveloperDismissCase } from "./developerDismissCase"
import { DeveloperDismissController } from "./DeveloperDismissController"


export const developerDismissFactory = () => {
    const prismaJobRepository   = new PrismaJobRepository(client)
    const prismaDeveloperRepository   = new PrismaDeveloperRepository(client)
    const developerDismissCase        = new DeveloperDismissCase(prismaJobRepository, prismaDeveloperRepository)
    const developerDismissController  = new DeveloperDismissController(developerDismissCase)

    return developerDismissController
}