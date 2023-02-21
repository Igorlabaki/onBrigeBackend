import { client } from "../../../prisma/client"
import { UpdateDeveloperAvatarCase } from "./updateDeveloperAvatarCase"
import { UpdateDeveloperAvatarController } from "./updateDeveloperAvatarController"
import { PrismaDeveloperRepository } from "../../../repository/in-prisma/PrismaDeveloperRepository"

export const updateDeveloperAvatarFactory = () => {
    const prismaDeveloperRepository      = new PrismaDeveloperRepository(client)
    const updateDeveloperAvatarCase        = new UpdateDeveloperAvatarCase(prismaDeveloperRepository)
    const updateDeveloperAvatarController  = new UpdateDeveloperAvatarController(updateDeveloperAvatarCase)

    return updateDeveloperAvatarController
}