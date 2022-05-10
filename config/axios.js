import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const instance = axios.create({
  baseURL: 'http://127.0.0.1:8000/api/',
});

instance.interceptors.request.use(async config => {
  let token =
    'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2NTIyMDcwOTMsImV4cCI6MTY1MjIxMDY5Mywicm9sZXMiOlsiUk9MRV9FTVBMT1lFRSJdLCJ1c2VybmFtZSI6ImpvaG4yLmRvZUBnbWFpbC5jb20iLCJwb3dlciI6MTAsInV1aWQiOiI4MjcyMTI0ZS00YzFmLTQzZGYtOTgwZi1iNzM2ZmJiMGJiM2IiLCJmaXJzdG5hbWUiOiJKb2huMiIsImxhc3RuYW1lIjoiRE9FIiwiYWRkcmVzcyI6IjggY2hlbWluIGRlcyBicm91ZXR0ZXMiLCJjaXR5IjoiQmVzYW7Dp29uIiwiemlwX2NvZGUiOiIyNTAwMCJ9.c63MgNg10X2A33Z6KPlQWeNLn-3CPNISb1e6TjQC5j5ElHuvLCBX1rXc6sdpwY8f_Dcq-hp6ZJ6wd33uzJTfE01obeF9IBXCw-zV0Cs7LICx0ioDKGzCCRe0IPoi2-_1Hj09erT4PKvIc3nigKXU31UM-oVC-SoxZqRKCr-3ed78N5j_SNv2lXf6U_yZjhBCieyztfQn9EK5VzPNhHg6W_QMBXB6qI9BHKU9SjBE6O2OsuwLMB1IaSGPCBQYn5619bAxRQZrwZeGDcedLvP1FCpEdhQtvJavGxeHR7mK_G7zH7U6yUOHoOKg9rMGNFEALFRP-JDWqV64hg4R7HPCPA';
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export { instance };
