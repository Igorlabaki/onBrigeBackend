import { ICityRepository } from "../../../repository/ICityRepository";
import { validateIfListHasElements } from "../../../util/validateIfListHasElements";

class ListCityCase{
    constructor(private cityRepository: ICityRepository){}

    async execute(){
        const cityList = await this.cityRepository.list()

       cityList && validateIfListHasElements(cityList, "city")

        return cityList
    }
}

export {ListCityCase}