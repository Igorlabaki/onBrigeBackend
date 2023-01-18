import { IPeriodRepository } from "../../../repository/IPeriodRepository";
import { validateIfEntityExistsByName } from "../../../util/validateIfEntityExistsByName";

class GetPeriodByNameCase{
    constructor(private periodRepository: IPeriodRepository){}

    async execute(PeriodName: string){
       const period = await validateIfEntityExistsByName(this.periodRepository,"Period", PeriodName)

       return period
    }
}

export {GetPeriodByNameCase}