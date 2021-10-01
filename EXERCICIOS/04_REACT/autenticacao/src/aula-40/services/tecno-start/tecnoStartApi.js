import axios from "axios"

const tecnoStartAPI = axios.create({
    baseURL: "https://tecno-start-api.herokuapp.com/v1/api"
})

export {
    tecnoStartAPI,
}
