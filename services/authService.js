import { instance } from '../config/axios';

async function authActionLogin(username, password) {
  try {
    return await instance.post(
      '/login_check',
      null,
      {
        params:
        {
          username: username,
          password: password,
        }
      }
    );
  } catch (_) {
    throw new Error('Login request failed.');
  }
}

export default {
  authActionLogin,
}
