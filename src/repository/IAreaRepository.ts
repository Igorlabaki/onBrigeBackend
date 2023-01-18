import { Area } from "@prisma/client"

interface IAreaRepository {
    list        :()  => Promise<Area[] | null>
    create      :(reference: string)  => Promise<Area | null>
    delete      :(reference: string)  => Promise<Area | null>
    update      :(reference: string)  => Promise<Area | null>
    getByName   :(reference: string)  => Promise<Area | null>
}

export {IAreaRepository}
