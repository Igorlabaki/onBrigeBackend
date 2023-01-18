import dayjs from "dayjs"
import { sign } from "jsonwebtoken"
import { Company, User } from "@prisma/client"

class GenerateTokenProvider{
    async execute(user: User | Company | null){
        const token = sign({
            email: user?.email,
            id: user?.id,
            userType: user?.userType
        }, 'b3aa4f1a-d1fe-427e-9daf-fcce5167b27e', {
            subject: user?.id,
            expiresIn: dayjs().add(10,'day').unix()
        })
        return token
    }
}

export {GenerateTokenProvider}

