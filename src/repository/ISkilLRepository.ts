import { Skill } from "@prisma/client"

interface ISkillRepository {
    list        :()  => Promise<Skill[] | null>
    create      :(reference: string)  => Promise<Skill | null>
    delete      :(reference: string)  => Promise<Skill | null>
    update      :(reference: string)  => Promise<Skill | null>
    getByName   :(reference: string)  => Promise<Skill | null>
}

export {ISkillRepository}
