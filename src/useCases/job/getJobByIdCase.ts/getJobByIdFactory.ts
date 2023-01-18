import { client } from "../../../prisma/client"
import { GetJobByIdCase } from "./getJobByIdCase"
import { GetJobByIdController } from "./getJobByIdController"
import { PrismaJobRepository } from "../../../repository/in-prisma/PrismaJobRepository"

export const getJobByIdFactory = () => {
    const prismaJobRepository   = new PrismaJobRepository(client)
    const getJobByIdCase        = new GetJobByIdCase(prismaJobRepository)
    const getJobByIdController  = new GetJobByIdController(getJobByIdCase)

    return getJobByIdController
}