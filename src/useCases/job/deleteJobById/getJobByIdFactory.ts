import { client } from "../../../prisma/client"
import { DeleteJobByIdCase } from "./deleteJobByIdCase"
import { DeleteJobByIdController } from "./deleteJobByIdController"
import { PrismaJobRepository } from "../../../repository/in-prisma/PrismaJobRepository"

export const deleteJobByIdFactory = () => {
    const prismaJobRepository      = new PrismaJobRepository(client)
    const deleteJobByIdCase        = new DeleteJobByIdCase(prismaJobRepository)
    const deleteJobByIdController  = new DeleteJobByIdController(deleteJobByIdCase)

    return deleteJobByIdController
}