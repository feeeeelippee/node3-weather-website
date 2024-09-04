const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.weatherstack.com/forecast?access_key=64451f8d612858b53b11f272c7aa4710&query=' + latitude + ',' + longitude + '&units=f'

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to location services', undefined)
        } else if (body.error) {
            callback('Unable to find location. Try another search', undefined)
        } else {
            callback(undefined, body.current.weather_descriptions[0] + ' It is currently ' + body.current.temperature + ' degress out.' + ' The humidity is ' + body.current.humidity)
        }
    })
}

module.exports = forecast


