import { client } from "../../../prisma/client"
import { RecoveryAccountDataCase } from "./recoveryAccountDataCase"
import { RecoveryAccountDataController } from "./recoveryAccountDataController"
import { PrismaCompanyRepository } from "../../../repository/in-prisma/PrismaCompanyRepository"
import { PrismaDeveloperRepository } from "../../../repository/in-prisma/PrismaDeveloperRepository"

export const recoveryAccountDataFactory = () => {
    const prismaCompanyRepository       = new PrismaCompanyRepository(client)
    const prismaDeveloperRepository     = new PrismaDeveloperRepository(client)
    const recoveryAccountDataCase       = new RecoveryAccountDataCase(prismaDeveloperRepository,prismaCompanyRepository)
    const recoveryAccountDataController = new RecoveryAccountDataController(recoveryAccountDataCase)

    return recoveryAccountDataController
} 