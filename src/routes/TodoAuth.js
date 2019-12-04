export default (to, from, next) => {
    var pass=prompt()
    if (pass=='Rayban') next()
    else next('/')
}
