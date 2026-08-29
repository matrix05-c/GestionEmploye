import Axios from "axios";

const api = Axios.create({

    baseURL: "http://localhost:8080",
    headers: {
        "Content-Type": "application/json"
        //  application/x-www-form-urlencoded
    }
})

// Ajoute le token automatiquement à chaque requête
api.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

api.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response?.status === 401) {

            if (url && url.includes("/auth/login")) {
                return Promise.reject(error); 
            }

            // Token expiré ou invalide → renvoyer au login
            localStorage.removeItem("token");
            window.location.href = "/";
        }
        if (error.response?.status === 403) {
            // Pas les droits
            console.error("Accès refusé");
        }
        return Promise.reject(error);
    }
);

export default api;