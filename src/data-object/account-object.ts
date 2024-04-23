import { jsonProperty, Serializable } from "ts-serializable";

export class User extends Serializable{
    @jsonProperty(String)
    public username: string='';
}