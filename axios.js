import axios from "axios";

const instance = axios.create(
    {
        baseURL: 'https://tinder-clone121.herokuapp.com'
    }
)
;
export default instance;

