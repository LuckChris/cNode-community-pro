import Types from './mutation-types'
export default {
  [Types.LOGIN_FLAG] ({commit}) {
    commit(Types.LOGIN_FLAG)
  },
  [Types.EXIT_FLAG] ({commit}) {
    commit(Types.EXIT_FLAG)
  }
}
