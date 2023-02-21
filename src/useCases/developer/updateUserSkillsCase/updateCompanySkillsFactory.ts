import { client } from "../../../prisma/client"
import { PrismaDeveloperRepository } from "../../../repository/in-prisma/PrismaDeveloperRepository"
import { UpdateDeveloperSkillsCase } from "./updateDeveloperSkillsCase"
import { UpdateDeveloperSkillsController } from "./updateDeveloperSkillsController"

export const updateDeveloperSkillsFactory = () => {
    const prismaDeveloperRepository         = new PrismaDeveloperRepository(client)
    const updateDeveloperSkillsCase        = new UpdateDeveloperSkillsCase(prismaDeveloperRepository)
    const updateDeveloperSkillsController  = new UpdateDeveloperSkillsController(updateDeveloperSkillsCase)

    return updateDeveloperSkillsController
}