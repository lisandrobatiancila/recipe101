import axios from "axios";

axios.defaults.baseURL = "https://recipe-by-api-ninjas.p.rapidapi.com/v1";

export const axios_api = axios.create({
    headers: {
        'Content-Type': 'application/json',
        'X-RapidAPI-Key': '543e1373b6msha59b77b9ead5a36p10b216jsn9158ea6748e2',
        'X-RapidAPI-Host': 'recipe-by-api-ninjas.p.rapidapi.com'
    }
})