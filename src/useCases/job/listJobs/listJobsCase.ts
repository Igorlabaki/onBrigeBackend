
import { IJobRepository } from "../../../repository/IJobRepository";
import { validateIfListHasElements } from "../../../util/validateIfListHasElements";

class ListJobCase{
    constructor(private jobRepository: IJobRepository){}

    async execute(){
        const listJob = await this.jobRepository.list()

        listJob && validateIfListHasElements(listJob, "job") 

        return listJob
    }
}
export {ListJobCase}