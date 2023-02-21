import { IDeveloperRepository } from "../../../repository/IDeveloperRepository";
import { IJobRepository } from "../../../repository/IJobRepository";
import { validateIfEntityExistsById } from "../../../util/validateIfEntityExistsById";

class DeveloperDismissCase{
    constructor(
        private jobRepository : IJobRepository,
        private developerRepository: IDeveloperRepository
    ) {}
    
    async execute(jobId: string, developerId: string){
        const job = await validateIfEntityExistsById(this.jobRepository,"Job",jobId)
        const developer = await validateIfEntityExistsById(this.developerRepository,"Job",developerId)

        const jobApplied = await this.jobRepository.developerDismiss({jobId,developerId})

        return jobApplied
    }
}

export { DeveloperDismissCase };
