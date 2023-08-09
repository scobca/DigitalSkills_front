import ApiResolver from "@/api/ApiResolver";

export class LoginModel extends ApiResolver {
    constructor() {
        super('auth');
    }

    async signIn(body: {email: string, password: string}) {
        return await this.request('login', 'POST', body)
    }
}
