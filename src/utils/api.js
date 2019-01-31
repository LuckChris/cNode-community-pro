import axios from 'axios'
const qs = require('qs')

const commonUrl = 'https://www.vue-js.com/api/v1/'

const api = {
  async get (url, data) {
    try {
      url = commonUrl + url
      let res = await axios.get(url, {params: data})
      return new Promise((resolve, reject) => {
        if (res.status === 200) {
          resolve(res)
        } else {
          reject(res)
        }
      })
    } catch (err) {
      console.log(err)
    }
  },
  async post (url, data) {
    try {
      url = commonUrl + url
      let res = await axios.post(url, qs.stringify(data))
      res = res.data
      return new Promise((resolve, reject) => {
        if (res.status === 200) {
          resolve(res)
        } else {
          reject(res)
        }
      })
    } catch (error) {
      console.log(error)
    }
  }
}
export {api}
