import { IDeveloperRepository } from "../../../repository/IDeveloperRepository";
import { validateIfEntityExistsById } from "../../../util/validateIfEntityExistsById";

class GetDeveloperByIdCase {
  constructor(private develeoperRepository: IDeveloperRepository) {}

  async execute(developerId: string){
    const developer = await validateIfEntityExistsById(this.develeoperRepository,"Developer",developerId)

    return {developer}
  }
}

export { GetDeveloperByIdCase };
