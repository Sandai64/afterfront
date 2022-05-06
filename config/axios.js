import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const instance = axios.create({
  baseURL: 'http://127.0.0.1:8000/api/',
});

instance.interceptors.request.use(async config => {
  let token =
    'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2NTE4Njk4MjksImV4cCI6MTY1MTg3MzQyOSwicm9sZXMiOlsiUk9MRV9FTVBMT1lFRSJdLCJ1c2VybmFtZSI6ImpvaG4yLmRvZUBnbWFpbC5jb20iLCJwb3dlciI6MTAsInV1aWQiOiI4MjcyMTI0ZS00YzFmLTQzZGYtOTgwZi1iNzM2ZmJiMGJiM2IiLCJmaXJzdG5hbWUiOiJKb2huMiIsImxhc3RuYW1lIjoiRE9FIiwiYWRkcmVzcyI6IjggY2hlbWluIGRlcyBicm91ZXR0ZXMiLCJjaXR5IjoiQmVzYW7Dp29uIiwiemlwX2NvZGUiOiIyNTAwMCJ9.Qp37gO8pHqngy6RRaqPH3_4OozbUDJXScN6ZvxuNbrL1Sn1AeJiugBUR8mDduweEVKvfi3VgP8VuxcVsS6dsiRnc2FUS8Akbcm-I67sR4gVoSRmIhv5khGc4ihqiTYGFrtEekrvUXhtu1NEPOwEIdz_2VZHsOKOmQtgn_4xISURx1EnBLOjJ61NIorSEzrp2hILT2oXOvEmCaj8fwvFECBkZfrTmg-FsnV3VReth1ljmcReYBADBcBl_C5LB2PwrGVylIhVnc_EgvnETG_wslsekjq0iTsbotLeJpn05zkNq0dn5yIgbVgC-7kRie2VSHLpR-m_M4b9enDg6-_7xSQ';

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export { instance };
