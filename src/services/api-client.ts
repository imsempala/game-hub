import axios from "axios"

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '4bce4e28837a4fd38fbf6680894cba95'
    }
})