const TOKEN = 'token'

const isLogged = () => !!localStorage.getItem(TOKEN)
const login = tokenValue => {
    localStorage.setItem(TOKEN, tokenValue)
}
const logout = () => {
    localStorage.removeItem(TOKEN)
}

export {
    isLogged,
    login,
    logout
}