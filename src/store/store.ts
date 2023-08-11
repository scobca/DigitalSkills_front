import {createStore} from 'vuex'
import {UserModelDto} from "@/api/dto/user-model.dto";

export interface State {
    userModel: UserModelDto,
    showMenu: boolean | null,
}

export const store = createStore<State>({
    state: {
        userModel: {
            id: -1,
            full_name: '',
            email: '',
        },
        showMenu: null
    },
    getters: {
        userModel(state) {
            if (state.userModel == null)
                return null
            return state.userModel
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
