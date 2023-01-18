import { ListJobCase } from "./listJobsCase"
import { client } from "../../../prisma/client"

import { PrismaJobRepository } from "../../../repository/in-prisma/PrismaJobRepository"
import { ListJobController } from "./listJobController"

export const listJobFactory = () => {
    const prismaJobRepository       = new PrismaJobRepository(client)
    const listJobCase               = new ListJobCase(prismaJobRepository)
    const listJobController         = new ListJobController(listJobCase)

    return listJobController
}