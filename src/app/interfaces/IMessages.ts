export interface IMessage{
    id?:number,
    content: string
    receiver: string|string[],
    receiver_id?: number,
    time?: string,
    user_id?: string,
    user_name?:string
}