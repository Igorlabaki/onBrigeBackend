import { beforeEach, describe, expect, it } from "vitest";
import { ITokenRepository } from "../../../repository/ITokenRepository";
import { CreateNewDeveloperAccountCase } from "./createNewDeveloperAccountCase";
import { TokenRepositoryInMemory } from "../../../repository/in-memory/TokenRepositoryInMemory";
import { DeveloperRepositoryInMemory } from "../../../repository/in-memory/DeveloperRepositoryInMemory";
import { ICreateNewDeveloperAccount, IDeveloperRepository } from "../../../repository/IDeveloperRepository";

describe("Create a new developer account", async () => {
    let tokenRepository     : ITokenRepository;
    let developerRepository : IDeveloperRepository;
    let createNewDeveloperAccountCase: CreateNewDeveloperAccountCase;

    beforeEach(async () => {
        // called once before all tests run
            tokenRepository      = new TokenRepositoryInMemory();
            developerRepository  = new DeveloperRepositoryInMemory();
            createNewDeveloperAccountCase = new CreateNewDeveloperAccountCase(developerRepository,tokenRepository);
        
        //
        // clean up function, called once after all tests run
            return async () => {
                tokenRepository     = new TokenRepositoryInMemory();
                developerRepository = new DeveloperRepositoryInMemory();
                createNewDeveloperAccountCase = new CreateNewDeveloperAccountCase(developerRepository,tokenRepository);
            }
        //
    })
    
    const userInputs : ICreateNewDeveloperAccount = {
        password: "teste",
        username: "teste",
        email   : "teste@gmail.com",
        userType: "developer"
    }

    it("should be able to create developer account", async () => {
        const data = await createNewDeveloperAccountCase.execute(
            userInputs
        )
  
        expect(data).toHaveProperty("token")
    }); 
    
    it("should be able to cripto the password", async () => {
        const data = await createNewDeveloperAccountCase.execute(userInputs)

        if(data?.refreshToken?.id){
            const developerDb = await developerRepository.getById(data.refreshToken.id)
            expect(userInputs.password === developerDb?.password).toBe(false);
        }
    });  

    it("should not be able to create a developer because he already have a account", async () => {
        await createNewDeveloperAccountCase.execute(userInputs)

        await expect(createNewDeveloperAccountCase.execute(userInputs)).rejects.toEqual(
            new Error(`Developer already exists.`)
        );
    });

   it("should not be able to create developer if any field is empty", async () => {   
        const userTest : ICreateNewDeveloperAccount = {
            email: "",
            userType:"",
            password: "",
            username: ""
        }

        await expect(createNewDeveloperAccountCase.execute(userTest)).rejects.toEqual(
            new Error(`All inputs are required.`)
        ); 
    });

})