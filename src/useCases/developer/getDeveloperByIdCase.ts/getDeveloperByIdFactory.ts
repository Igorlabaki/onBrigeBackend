import { client } from "../../../prisma/client"
import { GetDeveloperByIdCase } from "./getDeveloperByIdCase"
import { GetDeveloperByIdController } from "./getDeveloperByIdController"
import { PrismaDeveloperRepository } from "../../../repository/in-prisma/PrismaDeveloperRepository"

export const getDeveloperByIdFactory = () => {
    const prismaDeveloperRepository   = new PrismaDeveloperRepository(client)
    const getDeveloperByIdCase        = new GetDeveloperByIdCase(prismaDeveloperRepository)
    const getDeveloperByIdController  = new GetDeveloperByIdController(getDeveloperByIdCase)

    return getDeveloperByIdController
}