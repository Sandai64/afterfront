import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const instance = axios.create({
  baseURL: 'http://192.168.0.21:8000/api/',
});

instance.interceptors.request.use(async config => {
  let token =
    'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2NTE5MTk3OTgsImV4cCI6MTY1MTkyMzM5OCwicm9sZXMiOlsiUk9MRV9FTVBMT1lFRSJdLCJ1c2VybmFtZSI6ImpvaG4yLmRvZUBnbWFpbC5jb20iLCJwb3dlciI6MTAsInV1aWQiOiI4MjcyMTI0ZS00YzFmLTQzZGYtOTgwZi1iNzM2ZmJiMGJiM2IiLCJmaXJzdG5hbWUiOiJKb2huMiIsImxhc3RuYW1lIjoiRE9FIiwiYWRkcmVzcyI6IjggY2hlbWluIGRlcyBicm91ZXR0ZXMiLCJjaXR5IjoiQmVzYW7Dp29uIiwiemlwX2NvZGUiOiIyNTAwMCJ9.d--tnkcE9l29vpGTSkEljhmNaDCfoETuoK9l8yqkQRciJ_eU6Db7ESmwDMx5fsfMU01RyV_9g0_Wo3XE_-TfGU8CKdaaOWFHTTIG7affgoXuzNV8nbiE70ci0nzo5jEJgnesocGc4hUx9B-mBnysJ7ao9Nj8i8DuqXNryM1j1vRotsXn3qLrKcooS9JPwHuXUH_W8aAoHwWDMT3FfJNzJVm8d-7akQRWp8NJrkvNwm8p7F5wk0f0kMnX-1153ejOFroJEyLQuQbw-4AXib2Kr9c_a7_BaskyrWh3cG4e5v6lW3keuSBQAnyCjLJC4Mk_dgOgjKnu2AcmxodOOc96Aw';

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export { instance };
