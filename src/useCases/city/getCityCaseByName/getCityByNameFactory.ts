import { client } from "../../../prisma/client"
import { GetCityByNameCase } from "./getCityCaseByName"
import { GetCityByNameController } from "./getCityByNameController"
import { PrismaCityRepository } from "../../../repository/in-prisma/PrismaCityRepository"

export const getCityByNameFactory =  () => {
    const prismaCityRepository     = new PrismaCityRepository(client)
    const getCityByNameCase        = new GetCityByNameCase(prismaCityRepository)
    const getCityByNameController  = new GetCityByNameController(getCityByNameCase)

    return getCityByNameController
} 