import { validateIfEntityExistsById } from "../../../util/validateIfEntityExistsById";
import { IDeveloperRepository } from "../../../repository/IDeveloperRepository";
import { Skill } from "@prisma/client";

class UpdateDeveloperSkillsCase{
    constructor(
        private developerRepository : IDeveloperRepository,
    ){}

    async execute(listSkills: Skill[], developerId: string){
        await validateIfEntityExistsById(this.developerRepository,"developer",developerId)

        const updateDveloper = await this.developerRepository.updateSkills({developerId,listSkills})


        return updateDveloper
    }
}

export {UpdateDeveloperSkillsCase}