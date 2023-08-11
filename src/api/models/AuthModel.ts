import ApiResolver from "@/api/ApiResolver";

export class AuthModel extends ApiResolver {
    constructor() {
        super('api');
    }

    registerUser(data: FormData) {
        return this.request('register', 'POST', data)
    }

    loginUser(data: FormData) {
        return this.request('login', 'POST', data)
    }

    registerAdmin(data: FormData) {
        return this.request('admin', 'POST', data)
    }

    loginAdmin(data: FormData) {
        return this.request('login/admin', 'POST', data)
    }
}
