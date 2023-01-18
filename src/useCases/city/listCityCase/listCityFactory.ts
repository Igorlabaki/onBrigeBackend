import { ListCityCase } from "./listCityCase"
import { client } from "../../../prisma/client"
import { ListCityController } from "./listCityController"
import { PrismaCityRepository } from "../../../repository/in-prisma/PrismaCityRepository"

export const listCityFactory = () => {
    const prismaCityRepository   = new PrismaCityRepository(client)
    const listCityCase           = new ListCityCase(prismaCityRepository)
    const listCityController     = new ListCityController(listCityCase)

    return listCityController
}
