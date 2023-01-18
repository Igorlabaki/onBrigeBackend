import { City } from "@prisma/client"

interface ICityRepository {
    list        :()  => Promise<City[] | null>
    create      :(reference: string)  => Promise<City | null>
    delete      :(reference: string)  => Promise<City | null>
    update      :(reference: string)  => Promise<City | null>
    getByName   :(reference: string)  => Promise<City | null>
}

export {ICityRepository}
