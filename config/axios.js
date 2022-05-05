import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const instance = axios.create({
    baseURL: "http://127.0.0.1:8000/api/"
});

instance.interceptors.request.use(async (config) => {

    let token = await AsyncStorage.getItem("token");

    if(token) {
        config.headers.Authorization = `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2NTE3MzkwMDYsImV4cCI6MTY1MTc0MjYwNiwicm9sZXMiOlsiUk9MRV9FTVBMT1lFRSJdLCJ1c2VybmFtZSI6ImpvaG4yLmRvZUBnbWFpbC5jb20iLCJwb3dlciI6MTAsInV1aWQiOiI4MjcyMTI0ZS00YzFmLTQzZGYtOTgwZi1iNzM2ZmJiMGJiM2IiLCJmaXJzdG5hbWUiOiJKb2huMiIsImxhc3RuYW1lIjoiRE9FIiwiYWRkcmVzcyI6IjggY2hlbWluIGRlcyBicm91ZXR0ZXMiLCJjaXR5IjoiQmVzYW7Dp29uIiwiemlwX2NvZGUiOiIyNTAwMCJ9.k_5cEZIDLfo7wgDxRiIZp77Cgb_hpDVlBrx4NUh81UnRKzqUQTVza8JgLlvTQM16BTrQban-lcy-CtmjIy6c9xNcdZNiyNylLRUgi6XdZlw33BiACGzHAd5_FXyvz9BIk-digNXICSL7dYJdYb2KP8_7T0MgOlGdYn4KR4oEp-uWG0oUEZgJRuPR3oldKtLtQxi0kD3mlWLMNZ-TOM-Ijqv-WfD9D6IVf3fFJN2kVabJUrSfQcUWUpCVfl3_f6nXcOpjY5OX7o_sYSz9RbJje_Mqn3AzqHDlBj88_qe5U8qGrjH42uQBIXGL9QsKIfZIeDTxQRvZ2_KZTbyusl-9ug`;
    }

    return config;
});

export { instance };
