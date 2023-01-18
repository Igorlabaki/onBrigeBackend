import { IAreaRepository } from "../../../repository/IAreaRepository";
import { validateIfListHasElements } from "../../../util/validateIfListHasElements";

class ListAreaCase{
    constructor(private areaRepository: IAreaRepository){}

    async execute(){
        const areaList = await this.areaRepository.list()

       areaList && validateIfListHasElements(areaList, "area")

        return areaList
    }
}

export {ListAreaCase}