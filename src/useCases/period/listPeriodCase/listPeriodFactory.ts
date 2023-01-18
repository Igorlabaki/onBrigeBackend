import { client } from "../../../prisma/client"
import { ListPeriodCase } from "./listPeriodCase"
import { ListPeriodController } from "./listPeriodController"
import { PrismaPeriodRepository } from "../../../repository/in-prisma/PrismaPeriodRepository"

export const listPeriodFactory = () => {
    const prismaPeriodRepository   = new PrismaPeriodRepository(client)
    const listPeriodCase           = new ListPeriodCase(prismaPeriodRepository)
    const listPeriodController     = new ListPeriodController(listPeriodCase)

    return listPeriodController
}
