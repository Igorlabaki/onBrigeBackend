import { validateIfEntityExistsById } from "../../../util/validateIfEntityExistsById";
import { IDeveloperRepository } from "../../../repository/IDeveloperRepository";

class UpdateDeveloperAvatarCase{
    constructor(
        private developerRepository : IDeveloperRepository,
    ){}

    async execute(avatarUrl: string, developerId: string){
        await validateIfEntityExistsById(this.developerRepository,"developer",developerId)

        const updateDveloper = await this.developerRepository.updateAvatar(avatarUrl,developerId)

        return updateDveloper
    }
}

export {UpdateDeveloperAvatarCase}