// import Types from './mutation-types'
// export default {
//   [Types.LOGIN_FLAG] ({commit}) {
//     commit(Types.LOGIN_FLAG)
//   },
//   [Types.EXIT_FLAG] ({commit}) {
//     commit(Types.EXIT_FLAG)
//   }
// }
// 此两种方法均可 action 通过dispatch 来触发
export default{
  hasLogin ({commit}) {
    commit('hasLogin')
  },
  exitLogin ({commit}) {
    commit('exitLogin')
  }

}
