import { ICountryRepository } from "../../../repository/ICountryRepository";
import { validateIfListHasElements } from "../../../util/validateIfListHasElements";

class ListCountryCase{
    constructor(private countryRepository: ICountryRepository){}

    async execute(){
        const countryList = await this.countryRepository.list()

        countryList && validateIfListHasElements(countryList, "country") 

        return countryList
    }
}

export {ListCountryCase}