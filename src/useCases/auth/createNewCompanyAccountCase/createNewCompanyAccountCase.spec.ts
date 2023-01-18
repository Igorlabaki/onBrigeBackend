import { beforeEach, describe, expect, it } from "vitest";
import { ITokenRepository } from "../../../repository/ITokenRepository";
import { CreateNewCompanyAccountCase } from "./createNewCompanyAccountCase";
import { TokenRepositoryInMemory } from "../../../repository/in-memory/TokenRepositoryInMemory";
import { CompanyRepositoryInMemory } from "../../../repository/in-memory/CompanyRepositoryInMemory";
import { ICompanyRepository, ICreateNewCompanyAccount } from "../../../repository/ICompanyRepository";

describe("Create a new company account", async () => {
    let tokenRepository     : ITokenRepository;
    let companyRepository   : ICompanyRepository;
    let createNewCompanyAccountCase: CreateNewCompanyAccountCase;

    beforeEach(async () => {
        // called once before all tests run
            tokenRepository      = new TokenRepositoryInMemory();
            companyRepository    = new CompanyRepositoryInMemory();
            createNewCompanyAccountCase = new CreateNewCompanyAccountCase(companyRepository,tokenRepository);
        
        //
        // clean up function, called once after all tests run
            return async () => {
                tokenRepository     = new TokenRepositoryInMemory();
                companyRepository   = new CompanyRepositoryInMemory();
                createNewCompanyAccountCase = new CreateNewCompanyAccountCase(companyRepository,tokenRepository);
            }
        //
    })
    
    const companyInputs : ICreateNewCompanyAccount = {
        password: "teste",
        name:   "teste",
        email   : "teste@gmail.com",
        userType: "developer"
    }

    it("should be able to create company account", async () => {
        const data = await createNewCompanyAccountCase.execute(
            companyInputs
        )
  
        expect(data).toHaveProperty("token")
    }); 
    
    it("should be able to cripto the password", async () => {
        const data = await createNewCompanyAccountCase.execute(companyInputs)

        if(data?.refreshToken?.id){
            const developerDb = await companyRepository.getById(data.refreshToken.id)
            expect(companyInputs.password === developerDb?.password).toBe(false);
        }
    });  

    it("should not be able to create a company because he already have a account", async () => {
        await createNewCompanyAccountCase.execute(companyInputs)

        await expect(createNewCompanyAccountCase.execute(companyInputs)).rejects.toEqual(
            new Error(`Company already exists.`)
        );
    });

   it("should not be able to create company if any field is empty", async () => {   
        const companyTest : ICreateNewCompanyAccount = {
            email: "",
            userType:"",
            password: "",
            name: ""
        }

        await expect(createNewCompanyAccountCase.execute(companyTest)).rejects.toEqual(
            new Error(`All inputs are required.`)
        ); 
    });

})