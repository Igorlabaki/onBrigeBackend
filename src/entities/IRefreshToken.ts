import uuid from 'uuid'

class IRefreshToken {
    public id: string
    public userId: string
    public expireIn: number

    constructor(expireIn:number, userId:string) {
       this.id          = uuid.v4();
       this.expireIn    = expireIn;
       this.userId      = userId;
    }
}

export {IRefreshToken}