import * as msal from "@azure/msal-browser";

import { msalConfig } from "../../authConfig";

const msalInstance = new msal.PublicClientApplication(msalConfig);

const signIn = () => {
  const loginRequest = {
    scopes: ['https://alabsb2c.onmicrosoft.com/api/read','openid','offline_access'],
  };
  console.log("signin")
  msalInstance.loginRedirect(loginRequest).then(res=>{
    console.log(res);
  }).catch(err=>{
    console.log(err);
  });
};

export default signIn;
