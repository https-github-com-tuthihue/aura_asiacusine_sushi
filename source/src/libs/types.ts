export interface IFood{
    id ?: number;
    category?:string
    price?:number
    name?:string
    upgratedPrice?:number
    allergieCode?:string
    description?:string
    vegetarian?:boolean
    topping?:IFood
    toppings?:IFood[]
}