import { Country } from "@prisma/client"

interface ICountryRepository {
    list     :()  => Promise<Country[] | null>
    create   :(reference: string)  => Promise<Country | null>
    delete  :(reference: string)  => Promise<Country | null>
    update  :(reference: string)  => Promise<Country | null>
    getByName    :(reference: string)  => Promise<Country | null>
}

export {ICountryRepository}
