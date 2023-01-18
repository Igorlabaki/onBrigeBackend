import { ICityRepository } from "../../../repository/ICityRepository";
import { validateIfEntityExistsByName } from "../../../util/validateIfEntityExistsByName";

class GetCityByNameCase{
    constructor(private cityRepository: ICityRepository){}

    async execute(cityName: string){
       const city = await validateIfEntityExistsByName(this.cityRepository,"City", cityName)

       return city
    }
}

export {GetCityByNameCase}