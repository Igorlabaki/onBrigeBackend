
import { IPeriodRepository } from "../../../repository/IPeriodRepository";
import { validateIfListHasElements } from "../../../util/validateIfListHasElements";

class ListPeriodCase{
    constructor(private periodRepository: IPeriodRepository){}

    async execute(){
        const periodList = await this.periodRepository.list()

       periodList && validateIfListHasElements(periodList, "period")

        return periodList
    }
}

export {ListPeriodCase}