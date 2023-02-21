import { IDeveloperRepository } from "../../../repository/IDeveloperRepository";
import { validateIfEntityExistsById } from "../../../util/validateIfEntityExistsById";

class GetDeveloperByIdCase {
  constructor(private developerRepository: IDeveloperRepository) {}

  async execute(developerId: string){
    const developer = await validateIfEntityExistsById(this.developerRepository,"Developer",developerId)
    
    return {developer}
  }
}

export { GetDeveloperByIdCase };
