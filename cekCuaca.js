const request = require('postman-request')
const urlCuaca =
'https://api.weatherstack.com/current?access_key=05385f7b06972410159fee340a92ad1a&query=-0.8928600800420747,%20100.34954559586484=m'
request({ url: urlCuaca, json: true }, (error, response) => {
console.log('Saat ini suhu diluar mencapai ' +
response.body.current.temperature +
' derajat celcius. Kemungkinan terjadinya hujan adalah' + response.body.current.precip
+ '%')
})