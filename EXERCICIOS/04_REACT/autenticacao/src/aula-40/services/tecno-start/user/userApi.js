import { tecnoStartAPI } from '../tecnoStartApi'

const USERS = "/user"

function getAllUsers(callback) {

    tecnoStartAPI.get(USERS).then(resposta => callback(resposta.data.content[0]))
}

export {
    getAllUsers
}

