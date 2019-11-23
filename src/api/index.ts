import axios from 'axios';
import qs from 'qs';
import { LoginInterface } from '../types/Login';
import { UserInterface } from '../types/User';

const sharedInfo = {
  client_id: '',
  client_secret: '',
  app_version: ''
}

export const loginUser = ({ username, password }: LoginInterface) => {
  const reqBody = qs.stringify({
    username: username,
    password: password,
    grant_type: '',
    ...sharedInfo,
  })

  const headers = {
    'Content-Type': 'application/x-www-form-urlencoded'
  };

  return axios.post('https://stageoauth.actinate.com/v2/oauth/token?lang=en', reqBody, {
    headers: headers,
  })
}

export const refreshLogin = ({ refresh_token }: UserInterface) => {
  const reqBody = qs.stringify({
    refresh_token: refresh_token,
    grant_type: '',
    ...sharedInfo,
  })

  const headers = {
    'Content-Type': 'application/x-www-form-urlencoded'
  };

  return axios.post('https://stageoauth.actinate.com/v2/oauth/token?lang=en', reqBody, {
    headers: headers,
  })
}