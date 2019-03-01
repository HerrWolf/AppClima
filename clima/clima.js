const axios = require('axios');


const getClima = async(lat, lng) => {

    let apiKey = 'Aqui tu API Key'

    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&lang=es&appid=${apiKey}`);

    return resp.data.main.temp;

}

module.exports = {
    getClima
}