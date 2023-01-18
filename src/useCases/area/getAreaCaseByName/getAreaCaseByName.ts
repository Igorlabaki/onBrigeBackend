import { IAreaRepository } from "../../../repository/IAreaRepository";
import { validateIfEntityExistsByName } from "../../../util/validateIfEntityExistsByName";

class GetAreaByNameCase{
    constructor(private areaRepository: IAreaRepository){}

    async execute(areaName: string){
       const area = await validateIfEntityExistsByName(this.areaRepository,"area", areaName)

       return area
    }
}

export {GetAreaByNameCase}