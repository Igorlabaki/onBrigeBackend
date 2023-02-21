import { client } from "../../../prisma/client"
import { PrismaDeveloperRepository } from "../../../repository/in-prisma/PrismaDeveloperRepository"

import { PrismaJobRepository } from "../../../repository/in-prisma/PrismaJobRepository"
import { DeveloeprAppliedController } from "./developerAppliedController"
import { DeveloperApplyCase } from "./developerApplyCase"

export const developerAppliedFactory = () => {
    const prismaJobRepository   = new PrismaJobRepository(client)
    const prismaDeveloperRepository   = new PrismaDeveloperRepository(client)
    const developerAppliedCase        = new DeveloperApplyCase(prismaJobRepository, prismaDeveloperRepository)
    const developerAppliedController  = new DeveloeprAppliedController(developerAppliedCase)

    return developerAppliedController
}