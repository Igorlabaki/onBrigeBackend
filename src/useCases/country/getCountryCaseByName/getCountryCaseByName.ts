import { ICountryRepository } from "../../../repository/ICountryRepository";
import { validateIfEntityExistsByName } from "../../../util/validateIfEntityExistsByName";

class GetCountryByNameCase{
    constructor(private countryRepository: ICountryRepository){}

    async execute(countryName: string){
       const country = await validateIfEntityExistsByName(this.countryRepository,"Country", countryName)

       return country
    }
}

export {GetCountryByNameCase}