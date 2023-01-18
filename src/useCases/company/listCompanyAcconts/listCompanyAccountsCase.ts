import { ICompanyRepository } from "../../../repository/ICompanyRepository";
import { validateIfListHasElements } from "../../../util/validateIfListHasElements";

class ListCompanyAccountsCase{
    constructor(private companyRepository: ICompanyRepository){}

    async execute(){
        const listCompanyAccounts = await this.companyRepository.list()

        listCompanyAccounts && validateIfListHasElements(listCompanyAccounts, "company") 

        return listCompanyAccounts
    }
}
export {ListCompanyAccountsCase}