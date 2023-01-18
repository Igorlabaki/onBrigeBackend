import { IDeveloperRepository } from "../../../repository/IDeveloperRepository";
import { validateIfListHasElements } from "../../../util/validateIfListHasElements";

class ListDeveloperAccountsCase{
    constructor(private developerRepository: IDeveloperRepository){}

    async execute(){
        const listDeveloperAccounts = await this.developerRepository.list()

        listDeveloperAccounts && validateIfListHasElements(listDeveloperAccounts, "developers") 

        return listDeveloperAccounts
    }
}
export {ListDeveloperAccountsCase}