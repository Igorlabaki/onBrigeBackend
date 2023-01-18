import { PrismaClient,  Country } from "@prisma/client";
import { ICountryRepository } from "../ICountryRepository";

export class PrismaCountryRepository implements ICountryRepository  {
  constructor (private readonly prisma: PrismaClient){}

  async create (reference: string): Promise<Country> {
    return await this.prisma.country.create({
     data:{
      name: reference
     }
    })
  }

  async list(): Promise<Country[] | null>{
    return await this.prisma.country.findMany({
      include:{
        user: true,
        Company: true,
        job: true
      }
    })
  }

  async getByName (reference: string): Promise<Country | null> {
    return await this.prisma.country.findFirst({
      where:{
       name: reference
      },
      include:{
        user: true,
        Company: true,
        job: true
      }
    })
  }

  async delete (reference: string): Promise<Country> {
    return await this.prisma.country.delete({
      where:{
        name: reference
      }
    })
  }

  async update (reference: string): Promise<Country | null>{
    return await this.prisma.country.delete({
     where:{
      name: reference
     },
     include:{
      user: true,
      Company: true,
      job: true
    }
    })
  }
}