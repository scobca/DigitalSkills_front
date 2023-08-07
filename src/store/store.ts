import { createStore } from 'vuex'
import {UserModelDto} from "@/api/dto/user-model.dto";

export interface State {
    userModel: UserModelDto | null,
    showMenu: boolean | null,
}

export const store = createStore<State>({
  state: {
      userModel: {
          credits: null,
          email: null,
          password: null
      },
      showMenu: null
  },
  getters: {
      userModel(state) {
          const userModel = state.userModel
          if (userModel == null)
              return null

          userModel.credits = localStorage.getItem('name')
          userModel.credits = localStorage.getItem('email')
          userModel.credits = localStorage.getItem('password')
      },
      showMenu(state) {
          return state.showMenu
      }
  },
  mutations: {
      addUser(state, credits) {
          localStorage.setItem('name', credits.name)
          localStorage.setItem('email', credits.email)
          localStorage.setItem('password', credits.password)
          console.log(localStorage)
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
  actions: {
  },
  modules: {
  }
})
