export class user{
    
    private _firstname: string = "";
    public get firstname(): string {
        return this._firstname;
    }
    public set firstname(value: string) {
        this._firstname = value;
    }

    private _lastname: string = "";
    public get lastname(): string {
        return this._lastname;
    }
    public set lastname(value: string) {
        this._lastname = value;
    }

    private _email: string = "";
    public get email(): string {
        return this._email;
    }
    public set email(value: string) {
        this._email = value;
    }

    private _password: string = "";
    public get password(): string {
        return this._password;
    }
    public set password(value: string) {
        this._password = value;
    }

    private _role: string = "";
    public get role(): string {
        return this._role;
    }
    public set role(value: string) {
        this._role = value;
    }

    constructor(){
        
    }

}