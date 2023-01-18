import { client } from "../../../prisma/client"
import { ListDeveloperAccountsCase } from "./listDeveloperAccountsCase"
import { ListDeveloperAccountsController } from "./listDeveloperAccountsController"
import { PrismaDeveloperRepository } from "../../../repository/in-prisma/PrismaDeveloperRepository"

export const listDeveloperAccountsFactory = () => {
    const prismaDeveloperRepository = new PrismaDeveloperRepository(client)
    const listDeveloperAccountsCase        = new ListDeveloperAccountsCase(prismaDeveloperRepository)
    const listDeveloperAccountsController  = new ListDeveloperAccountsController(listDeveloperAccountsCase)

    return listDeveloperAccountsController
}