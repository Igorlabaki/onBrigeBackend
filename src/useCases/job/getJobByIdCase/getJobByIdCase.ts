import { IJobRepository } from "../../../repository/IJobRepository";
import { validateIfEntityExistsById } from "../../../util/validateIfEntityExistsById";

class GetJobByIdCase {
  constructor(private jobRepository: IJobRepository) {}

  async execute(jobId: string){
      const job = await validateIfEntityExistsById(this.jobRepository,"Job",jobId)

    return {job}
  }
}

export { GetJobByIdCase };
