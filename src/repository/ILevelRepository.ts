import { level } from "@prisma/client"

interface ILevelRepository {
    list        :()  => Promise<level[] | null>
    create      :(reference: string)  => Promise<level | null>
    delete      :(reference: string)  => Promise<level | null>
    update      :(reference: string)  => Promise<level | null>
    getByName   :(reference: string)  => Promise<level | null>
}

export {ILevelRepository}
