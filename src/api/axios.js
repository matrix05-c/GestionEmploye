import  Axios  from "axios";

const api = Axios.create({
    
    baseURL: "http://localhost:8080",
    withCredentials: true,
    headers: {
        "Content-Type": "application/json"
        //  application/x-www-form-urlencoded
    }
})

export default api;