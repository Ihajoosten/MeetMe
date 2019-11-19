/* eslint-disable no-unused-vars */
import io from 'socket.io-client'

const SocketPlugin = {
    install(Vue, options) {

        Vue.prototype.$socket = io(options.connection)
    }
}

export default SocketPlugin