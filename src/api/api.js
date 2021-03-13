import axios from 'axios'

const URL = "https://api.openweathermap.org/data/2.5/weather"
const API_Key = "df4939c93dd396049be3dfe02b7d9058"


export const getData = async (param) => {
    const {data} = await axios.get(URL, {
        params: {
            q: param,
            units: 'metric',
            APPID: API_Key,
            lang: 'it',
        }
    })
    return data
}