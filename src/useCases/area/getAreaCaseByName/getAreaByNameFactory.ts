import { client } from "../../../prisma/client"
import { GetAreaByNameCase } from "./getAreaCaseByName"
import { GetAreaByNameController } from "./getAreaByNameController"
import { PrismaAreaRepository } from "../../../repository/in-prisma/PrismaAreaRepository"

export const getAreaByNameFactory =  () => {
    const prismaAreaRepository     = new PrismaAreaRepository(client)
    const getAreaByNameCase        = new GetAreaByNameCase(prismaAreaRepository)
    const getAreaByNameController  = new GetAreaByNameController(getAreaByNameCase)

    return getAreaByNameController
} 