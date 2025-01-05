const request = require('postman-request')
const url =
'https://api.weatherstack.com/current?access_key=05385f7b06972410159fee340a92ad1a&query=-0.8928600800420747,%20100.34954559586484'
request({ url: url }, (error, response) => {
console.log(response)
// const data = JSON.parse(response.body)
// console.log(data)
console.log(data.current)
// console.log(data.current.temperature)
})