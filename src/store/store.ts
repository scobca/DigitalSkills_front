import { createStore } from 'vuex'
import {UserModelDto} from "@/api/dto/user-model.dto";

export interface State {
    userModel: UserModelDto | null
}

export const store = createStore<State>({
  state: {
      userModel: {
          credits: null,
          email: null,
          password: null
      }
  },
  getters: {
      userModel(state) {
          const userModel = state.userModel
          if (userModel == null)
              return null

          userModel.credits = localStorage.getItem('name')
          userModel.credits = localStorage.getItem('email')
          userModel.credits = localStorage.getItem('password')
      }
  },
  mutations: {
      addUser(state, credits) {
          localStorage.setItem('name', credits.name)
          localStorage.setItem('email', credits.email)
          localStorage.setItem('password', credits.password)
          console.log(localStorage)
      }
  },
  actions: {
  },
  modules: {
  }
})
