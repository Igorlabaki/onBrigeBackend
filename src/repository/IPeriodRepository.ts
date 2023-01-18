import { Period } from "@prisma/client"

interface IPeriodRepository {
    list        :()  => Promise<Period[] | null>
    create      :(reference: string)  => Promise<Period | null>
    delete      :(reference: string)  => Promise<Period | null>
    update      :(reference: string)  => Promise<Period | null>
    getByName   :(reference: string)  => Promise<Period | null>
}

export {IPeriodRepository}
