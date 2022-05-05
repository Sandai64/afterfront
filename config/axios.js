import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const instance = axios.create({
    baseURL: "http://127.0.0.1:8000/api/"
});

instance.interceptors.request.use(async (config) => {

    let token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2NTE3NjU1MDQsImV4cCI6MTY1MTc2OTEwNCwicm9sZXMiOlsiUk9MRV9FTVBMT1lFRSJdLCJ1c2VybmFtZSI6ImpvaG4yLmRvZUBnbWFpbC5jb20iLCJwb3dlciI6MTAsInV1aWQiOiI4MjcyMTI0ZS00YzFmLTQzZGYtOTgwZi1iNzM2ZmJiMGJiM2IiLCJmaXJzdG5hbWUiOiJKb2huMiIsImxhc3RuYW1lIjoiRE9FIiwiYWRkcmVzcyI6IjggY2hlbWluIGRlcyBicm91ZXR0ZXMiLCJjaXR5IjoiQmVzYW7Dp29uIiwiemlwX2NvZGUiOiIyNTAwMCJ9.riuLvDiZP0IdcGEVy5B4YBWzVqybQ8c0ta736CUMWeLr6f0-Nr5CaaeUQMP6DwBWMlg0Hxx4yAF5cUxW6ciEtWKVyoP8_H0FAanT0_YQv1g5rt23cDH1Zu8r7jq4fEBfOnRzke5kzAILpk_igSqngMV4PjQyVYlG4T83nvceoO17ghfCPDjW8VGJmOiETw5JtUTX_9HFWUC4yl0psvAZD_PZMD3tjvfcho3hFjsHZz10ny9hY3Tck70ek76Gr_w9EDfZl8zlQU7pbvTF9VMvZ5H1CgJQZ3_78YDuPr38satg2glXDmJ7Kr2vqBZDIi0waoPmjeruyvIvrcWl90622Q"; //await AsyncStorage.getItem("token");

    if(token) {
        config.headers.Authorization = `Bearer ${token}`
   }

    return config;
});

export { instance };
