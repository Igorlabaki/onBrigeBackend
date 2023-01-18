
import { client } from "../../../prisma/client"
import { PrismaAreaRepository } from "../../../repository/in-prisma/PrismaAreaRepository"
import { ListAreaCase } from "./listAreaCase"
import { ListAreaController } from "./listAreaController"


export const listAreaFactory = () => {
    const prismaAreaRepository   = new PrismaAreaRepository(client)
    const listAreaCase           = new ListAreaCase(prismaAreaRepository)
    const listAreaController     = new ListAreaController(listAreaCase)

    return listAreaController
}
