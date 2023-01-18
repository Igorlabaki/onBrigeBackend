import { PrismaClient,  Skill } from "@prisma/client";
import { ISkillRepository } from "../ISkilLRepository";

export class PrismaSkillRepository implements ISkillRepository  {
  constructor (private readonly prisma: PrismaClient){}

  async create (reference: string): Promise<Skill> {
    return await this.prisma.skill.create({
     data:{
      name: reference
     }
    })
  }

  async getByName (reference: string): Promise<Skill | null> {
    return await this.prisma.skill.findFirst({
      where:{
       name: reference
      }
    })
  }

  async delete (reference: string): Promise<Skill> {
    return await this.prisma.skill.delete({
      where:{
        name: reference
      }
    })
  }

  async update (reference: string): Promise<Skill | null>{
    return await this.prisma.skill.delete({
     where:{
      name: reference
     }
    })
  }

  async list(): Promise<Skill[] | null>{
    return await this.prisma.skill.findMany({
      include:{
        Users: true
      }
    })
  }
}