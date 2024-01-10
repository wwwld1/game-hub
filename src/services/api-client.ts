import axios from 'axios'

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '5583706d28c64caf8fc725565e96709f',
  },
})
