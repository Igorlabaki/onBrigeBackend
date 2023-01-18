import { client } from "../../../prisma/client"
import { UpdateCompanyAvatarCase } from "./updateCompanyAvatarCase"
import { UpdateCompanyAvatarController } from "./updateCompanyAvatarController"
import { PrismaCompanyRepository } from "../../../repository/in-prisma/PrismaCompanyRepository"

export const updateCompanyAvatarFactory = () => {
    const prismaCompanyRepository      = new PrismaCompanyRepository(client)
    const updateCompanyAvatarCase        = new UpdateCompanyAvatarCase(prismaCompanyRepository)
    const updateCompanyAvatarController  = new UpdateCompanyAvatarController(updateCompanyAvatarCase)

    return updateCompanyAvatarController
}