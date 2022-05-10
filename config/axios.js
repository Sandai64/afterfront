import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const instance = axios.create({
  baseURL: 'http://127.0.0.1:8000/api/',
});

instance.interceptors.request.use(async config => {
  // Left out for debugging --
  // const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2NTE5MzAzNjksImV4cCI6MTY1MTkzMzk2OSwicm9sZXMiOlsiUk9MRV9FTVBMT1lFRSJdLCJ1c2VybmFtZSI6ImpvaG4yLmRvZUBnbWFpbC5jb20iLCJwb3dlciI6MTAsInV1aWQiOiI4MjcyMTI0ZS00YzFmLTQzZGYtOTgwZi1iNzM2ZmJiMGJiM2IiLCJmaXJzdG5hbWUiOiJKb2huMiIsImxhc3RuYW1lIjoiRE9FIiwiYWRkcmVzcyI6IjggY2hlbWluIGRlcyBicm91ZXR0ZXMiLCJjaXR5IjoiQmVzYW7Dp29uIiwiemlwX2NvZGUiOiIyNTAwMCJ9.KS90MZpxO5oirC4hE6mpkgxmTY3SqZ36kHdbBMy-k0OPXzdVGRCxkdqjLj_MiUNhMeCwP2heF5MCf1Oy-UBDC8KZkLjzJt8IW3Hgdych4BH9hpCsPgXKxVk0xy1xkTDSIqY_12EqrxGzdlDWZ6M94bmIxx9-IIsdDcOkLfaZC5RcHM5FI_q3OdmH6vUdivDwd1D2xllpbODQKHRTfvjXR9GVVYeahtLxCqIALsCdhPf0oiqtcVcvhrBuKaOSq4R4XtmtvX3TfOZ4DrS0O_4W2tVcNuJdkjw8cvHpgtNn0DdUTjF5PXtO6dE8SXwDwndaLloYiSZW6WXz5aSqc74aZA';
  
  const localToken = await AsyncStorage.getItem('token');
  
  if (localToken) {
    config.headers.Authorization = `Bearer ${localToken}`;
    console.log("tentative");
  }

  config.headers['Content-Type'] = 'application/json';
  //config.headers['Access-Control-Allow-Origin'] = '*';
  return config;
});

export { instance };
