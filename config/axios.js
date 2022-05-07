import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const instance = axios.create({
  baseURL: 'http://127.0.0.1:8000/api/',
});

instance.interceptors.request.use(async config => {
  let token =
    'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2NTE5MjMyMjksImV4cCI6MTY1MTkyNjgyOSwicm9sZXMiOlsiUk9MRV9FTVBMT1lFRSJdLCJ1c2VybmFtZSI6ImpvaG4yLmRvZUBnbWFpbC5jb20iLCJwb3dlciI6MTAsInV1aWQiOiI4MjcyMTI0ZS00YzFmLTQzZGYtOTgwZi1iNzM2ZmJiMGJiM2IiLCJmaXJzdG5hbWUiOiJKb2huMiIsImxhc3RuYW1lIjoiRE9FIiwiYWRkcmVzcyI6IjggY2hlbWluIGRlcyBicm91ZXR0ZXMiLCJjaXR5IjoiQmVzYW7Dp29uIiwiemlwX2NvZGUiOiIyNTAwMCJ9.YFjMJ9okmYJQeE9NYTMTOpLlg7ekEzKCUeAjcwSFTR5y7uFigyi7s1dxr1jsEYMLiEqtjSnxM2nZFixoedbDBpCsbQsrxN14I4wRNlQVtdjfgHcIfnK-HzS_EEM8iwnXGK39fXDgo6f3lluLq88hBQJJA05XwfztV3QUmA0VOjZ0ewxpCMwoXE2ncsRLilO8FH1Z9ugzneqf_WCUSapKo5ylrQ4vRUSej7qBb33ZGwMYr3vj0Rs7Aes3cvInqE1dFgnQDZ6RFVt6p6bjwn_XAKZyHN8HA1EvNU9noYoeC3AfYzTgYDB22zku6Hmr7Q8qICzS5c3_BegY6T2ifFRpXA';

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export { instance };
