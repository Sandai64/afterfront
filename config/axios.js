import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const instance = axios.create({
  baseURL: 'http://127.0.0.1:8000/api/',
});

instance.interceptors.request.use(async config => {
  let token =
    'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2NTE5MjY2NTcsImV4cCI6MTY1MTkzMDI1Nywicm9sZXMiOlsiUk9MRV9FTVBMT1lFRSJdLCJ1c2VybmFtZSI6ImpvaG4yLmRvZUBnbWFpbC5jb20iLCJwb3dlciI6MTAsInV1aWQiOiI4MjcyMTI0ZS00YzFmLTQzZGYtOTgwZi1iNzM2ZmJiMGJiM2IiLCJmaXJzdG5hbWUiOiJKb2huMiIsImxhc3RuYW1lIjoiRE9FIiwiYWRkcmVzcyI6IjggY2hlbWluIGRlcyBicm91ZXR0ZXMiLCJjaXR5IjoiQmVzYW7Dp29uIiwiemlwX2NvZGUiOiIyNTAwMCJ9.RQ1BqDoEguHH47RTaCT3bcl2-Fwli8HM13v9-D252fVPNdm_4S3HJK7xmrXN47F8yCvm10K7V0YVIVmNI4C61NjF0oXJZNerZzcztEjlQUOzr3emi7jiJaWhEaHDLa7N6PYdaC_A-8AHTg2d7ZU-r1VXmpWAaHzc0UhKD3Dsx-ZW_uhnj3vT_uEI2g5u7V1lObhB067MlOsIhYIFTIHrDvMkPXtQI03xfsDv9dOE0Han0PlrTwNi-EM2S3tvwC3vXsQYg4wNP_UU3bYJ5a14owN31YkonGaEeP0G0wxG91ByVJVaYrNauqL62Wbyci3IxcOWzqLMAfUinMh0SiN01w';

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export { instance };
