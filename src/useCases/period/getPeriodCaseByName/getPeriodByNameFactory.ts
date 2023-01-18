import { client } from "../../../prisma/client"
import { GetPeriodByNameCase } from "./getPeriodCaseByName"
import { GetPeriodByNameController } from "./getPeriodByNameController"
import { PrismaPeriodRepository } from "../../../repository/in-prisma/PrismaPeriodRepository"

export const getPeriodByNameFactory =  () => {
    const prismaPeriodRepository     = new PrismaPeriodRepository(client)
    const getPeriodByNameCase        = new GetPeriodByNameCase(prismaPeriodRepository)
    const getPeriodByNameController  = new GetPeriodByNameController(getPeriodByNameCase)

    return getPeriodByNameController
} 