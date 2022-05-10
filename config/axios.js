import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const instance = axios.create({
  baseURL: 'http://127.0.0.1:8000/api/',
});

instance.interceptors.request.use(async config => {
  let token =
    'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2NTIyMDA3ODEsImV4cCI6MTY1MjIwNDM4MSwicm9sZXMiOlsiUk9MRV9FTVBMT1lFRSJdLCJ1c2VybmFtZSI6ImpvaG4yLmRvZUBnbWFpbC5jb20iLCJwb3dlciI6MTAsInV1aWQiOiI4MjcyMTI0ZS00YzFmLTQzZGYtOTgwZi1iNzM2ZmJiMGJiM2IiLCJmaXJzdG5hbWUiOiJKb2huMiIsImxhc3RuYW1lIjoiRE9FIiwiYWRkcmVzcyI6IjggY2hlbWluIGRlcyBicm91ZXR0ZXMiLCJjaXR5IjoiQmVzYW7Dp29uIiwiemlwX2NvZGUiOiIyNTAwMCJ9.O0QNgWqawhxqWhDZYTVdv18kGShVsATDdPLXHGY62QcC5L1NhO7VA9n3hoqMtssiEMcXM0qvu04mSYw706ar3IeNpExD0M2qIf0kyVgNUBWRN57s_-sOE_dC_CxXR04A_yEWZ1k7Q0M-lG-TkmamGJkgYYwJhLH01K8X_L-u3QoLtMTXyr9zhHPprb4aMJaMjY6lRlUJ4xfLoKZAdyTNbbKlBEJkKm-6sw_-db01PqeRUYDE6w678lQvsTTcQOVFLocl-__KBkX0tXBRNokHxngmWPD3alSB8boRvluPIxOJCwz_DN7Q9frUUu28bZ1GS0aFblIOWNJui_C-wsereQ';

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export { instance };
