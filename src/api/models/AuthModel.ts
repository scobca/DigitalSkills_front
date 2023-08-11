import axios from "axios";

import ApiResolver from "@/api/ApiResolver";
import apiConf from "@/api/api.conf";
import {store} from "@/store/store";



export class AuthModel {
    async registerUser(formData: FormData) {
        return new Promise((resolve, reject) => {
            axios.post(`${apiConf.endpoint}/api/register`,
                formData,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                }
            ).then(async (res) => {
                console.log(res)
                resolve(true);
            }).catch(err => {
                reject(err);
            });
        });
    }

    async loginUser(formData: FormData) {
        return new Promise((resolve, reject) => {
            axios.post(`${apiConf.endpoint}/api/login`,
                formData,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                }
            ).then(async (res) => {
                console.log(res)
                resolve(true);
            }).catch(err => {
                reject(err);
            });
        });
    }

    async registerAdmin(formData: FormData) {
        return new Promise((resolve, reject) => {
            axios.post(`${apiConf.endpoint}/api/registerAdmin`,
                formData,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                }
            ).then(async (res) => {
                console.log(res)
                resolve(true);
            }).catch(err => {
                reject(err);
            });
        });
    }

    async loginAdmin(formData: FormData) {
        return new Promise((resolve, reject) => {
            axios.post(`${apiConf.endpoint}/api/loginAdmin`,
                formData,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                }
            ).then(async (res) => {
                console.log(res)
                resolve(true);
            }).catch(err => {
                reject(err);
            });
        });
    }
}

export class HeadAuth extends ApiResolver {
    constructor() {
        super('api');
    }

    registerUser(data: FormData) {
        return this.request('register', 'POST', data)
            .then(async (res: any) => {
                console.log(res)
            })
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