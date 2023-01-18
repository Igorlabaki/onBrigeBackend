import { ICompanyRepository } from "../../../repository/ICompanyRepository";
import { validateIfEntityExistsById } from "../../../util/validateIfEntityExistsById";

class GetCompanyByIdCase {
  constructor(private companyRepository: ICompanyRepository) {}

  async execute(companyId: string){
      const company = await validateIfEntityExistsById(this.companyRepository,"Company",companyId)

    return {company}
  }
}

export { GetCompanyByIdCase };
