import { v4 as uuid } from "uuid";
import { Company } from "@prisma/client";
import { ICompanyRepository, ICreateNewCompanyAccount, IUpdateCompanyPasswordRequest, IUpdateCompanyRequest } from "../ICompanyRepository";


class CompanyRepositoryInMemory implements ICompanyRepository {
  private companies: Company[] = [];

  async create ({email,password,name,userType}: ICreateNewCompanyAccount): Promise<Company> {
    const company = {
      id: uuid(),
      name: name,
      email: email,
      password: password,
      userType: userType,
      about: null,
      avatar:null,
      cityId: null,
      countryId: null,
      emailVerified: null,
      created_at: new Date(),
    }
    this.companies.push(company);
    return company;
  }

 async getById( reference:string): Promise<Company | null> {
    const company = this.companies.find((company) => company.id === reference);
    if(company){
      return company
    }else{
      return null
    }
  }

 async getByEmail( reference:string): Promise<Company | null> {
    const company = this.companies.find((company) => company.email === reference);
    if(company){
      return company
    }else{
      return null
    }
  }

  async delete(reference: string): Promise<Company | null> {
   const company = this.companies.filter((company) => reference != company.id)[0]
   if(company){
    return company
  }else{
    return null
  }
  }

  async list() : Promise<Company[]>{
    return this.companies
  }

  async update({ email, about, name,id }: IUpdateCompanyRequest):  Promise<Company | null> {
    const company = this.companies.find((company) => company.email === id);
    if(company){
      company.about = about
      company.email = email
      company.name = name
    }
    if(company){
      return company
    }else{
      return null
    }
  }

  async updatePassword({id,password}: IUpdateCompanyPasswordRequest):Promise<Company | null>{
    const company = this.companies.find((company) => company.id === id);
    if(company){
      company.password = password
    }
    if(company){
      return company
    }else{
      return null
    }
  }
} 

export { CompanyRepositoryInMemory };
