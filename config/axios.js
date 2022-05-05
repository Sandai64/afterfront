import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const instance = axios.create({
    baseURL: "http://127.0.0.1/api/"
});

instance.interceptors.request.use(async (config) => {

    let token = await AsyncStorage.get("token");

    if(token) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
});

export { instance };