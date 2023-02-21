import { IJobRepository } from "../../../repository/IJobRepository";
import { validateIfEntityExistsById } from "../../../util/validateIfEntityExistsById";

class DeleteJobByIdCase {
  constructor(private jobRepository: IJobRepository) {}

  async execute(jobId: string){
    const job = await validateIfEntityExistsById(this.jobRepository,"Job",jobId)
    
    const deletedJob = await this.jobRepository.delete(jobId)

    return {deletedJob}
  }
}

export { DeleteJobByIdCase };
