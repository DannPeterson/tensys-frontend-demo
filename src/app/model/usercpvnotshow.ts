import { Cpv } from "./cpv";

export class UserCpvNotShow {
    public id: number;
    public cpv: Cpv;
    public username: string;

    constructor() {
        this.id = 0;
        this.cpv = null;
        this.username = '';
    }
}