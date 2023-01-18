import { ICityRepository } from "../../../repository/ICityRepository";
import { ICountryRepository } from "../../../repository/ICountryRepository";
import { validateIfEntityExistsById } from "../../../util/validateIfEntityExistsById";
import { validateIfElementExistsAtBd } from "../../../util/validateifElementExistsAtBd";
import { ICompanyRepository, IUpdateInfoCompanyRequest } from "../../../repository/ICompanyRepository";

class UpdateCompanyAvatarCase{
    constructor(
        private companyRepository : ICompanyRepository,
    ){}

    async execute(avatarUrl: string, companyId: string){
        await validateIfEntityExistsById(this.companyRepository,"Company",companyId)

        const updateDveloper = await this.companyRepository.updateAvatar(avatarUrl,companyId)

        return updateDveloper
    }
}

export {UpdateCompanyAvatarCase}