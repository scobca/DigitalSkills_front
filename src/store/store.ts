import {createStore} from 'vuex'
import {UserModelDto} from "@/api/dto/user-model.dto";
import {AdminModelDto} from "@/api/dto/admin-model.dto";

export interface State {
    userModel: UserModelDto,
    adminModel: AdminModelDto,
    showMenu: boolean | null,
}

export const store = createStore<State>({
    state: {
        userModel: {
            id: -1,
            full_name: '',
            email: '',
        },
        adminModel: {
            id: -1,
            full_name: '',
            email: '',
            phone: '',
        },
        showMenu: null
    },
    getters: {
        userModel(state) {
            if (state.userModel == null)
                return null
            return state.userModel
        },
        adminModel(state) {
            if (state.adminModel == null)
                return null
            return state.adminModel
        },
        showMenu(state) {
            return state.showMenu
        }
    },
    mutations: {
        addUser(state, body: any) {
            state.userModel.full_name = body.full_name
            state.userModel.email = body.email
            state.userModel.id = body.id

            localStorage.setItem('name', body.full_name)
            localStorage.setItem('email', body.email)

            console.log(state.userModel, 'user model')
        },
        addAdmin(state, body) {
            state.adminModel.full_name = body.full_name
            state.adminModel.email = body.email
            state.adminModel.phone = body.phone
            state.adminModel.id = body.id

            localStorage.setItem('admin_name', body.full_name)
            localStorage.setItem('admin_email', body.email)
            localStorage.setItem('admin_phone', body.phone)

            console.log(state.adminModel, 'admin model')
        },
        showMenuOn(state) {
            state.showMenu = true
            console.log(state.showMenu)
        },
        showMenuOff(state) {
            state.showMenu = false
            console.log(state.showMenu)
        }
    },
    actions: {},
    modules: {}
})
