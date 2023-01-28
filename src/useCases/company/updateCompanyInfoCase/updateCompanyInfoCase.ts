import { ICityRepository } from "../../../repository/ICityRepository";
import { ICountryRepository } from "../../../repository/ICountryRepository";
import { validateIfEntityExistsById } from "../../../util/validateIfEntityExistsById";
import { validateIfElementExistsAtBd } from "../../../util/validateifElementExistsAtBd";
import { ICompanyRepository, IUpdateInfoCompanyRequest } from "../../../repository/ICompanyRepository";

class UpdateCompanyInfoCase{
    constructor(
        private cityRepository      : ICityRepository,
        private countryRepository    : ICountryRepository,
        private companyRepository : ICompanyRepository,
    ){}

    async execute({email,name,companyId,cityName,countryName,about}:IUpdateInfoCompanyRequest){
        
        await validateIfEntityExistsById(this.companyRepository,"Company",companyId)

        await validateIfElementExistsAtBd(this.cityRepository,cityName)
        await validateIfElementExistsAtBd(this.countryRepository,countryName)
 
        const updateDveloper = await this.companyRepository.updateInfos({email,name,companyId,cityName,countryName,about})

        return updateDveloper
    }
}

export {UpdateCompanyInfoCase}