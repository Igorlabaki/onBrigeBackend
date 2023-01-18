import {v4 as uuid} from "uuid"
import { User } from "@prisma/client";
import { describe,it, beforeEach, expect } from "vitest";
import { GenerateTokenProvider } from "./GenerateTokenProvider";

describe("Generate refresh token", async () => {
    let generateTokenProvider: GenerateTokenProvider;
  
    beforeEach(async () => {
        // called once before all tests run
            generateTokenProvider    = new GenerateTokenProvider();
        // clean up function, called once after all tests run
        return async () => {
            generateTokenProvider    = new GenerateTokenProvider();
        }
    })

    const userInputData: User  = {
        id: uuid(),
        email: "teste@gmail.com",
        password: "teste",
        username: "teste",
        userType: "teste",
        bio:null,
        area: null,
        avatar:null,
        level: null,
        cityId:null,
        countryId:null,
        emailVerified:null,
        created_at: new Date(),
        locationInterestingId:null,
    }

    it("should be able to generate refresh token", async () => {
        const data = await generateTokenProvider.execute(userInputData)
        expect(data).toBeTypeOf("string")
    });
})