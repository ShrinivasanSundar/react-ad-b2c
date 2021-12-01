import * as msal from "@azure/msal-browser";

// Config object to be passed to Msal on creation.
// For a full list of msal.js configuration parameters,
// visit https://azuread.github.io/microsoft-authentication-library-for-js/docs/msal/modules/_authenticationparameters_.html
export const msalConfig = {
  auth: {
    clientId: "0f61d79b-c777-4552-b62b-52759a0e7e7a",
    //authority: "https://login.microsoftonline.com/alabsb2c.onmicrosoft.com",
    authority: "https://alabsb2c.b2clogin.com/alabsb2c.onmicrosoft.com/B2C_1_AccountSignUp",
    redirectUri: "http://localhost:3000",
    knownAuthorities:["alabsb2c.b2clogin.com"]
    // clientId: "0f61d79b-c777-4552-b62b-52759a0e7e7a",
    // authority: "https://alabsb2c.b2clogin.com/alabsb2c.onmicrosoft.com/B2C_1_UserSignIn",
    // redirectUri: "http://localhost:3000"
  },
  cache: {
    cacheLocation: "sessionStorage", // This configures where your cache will be stored
    storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
  },
  system: {
    loggerOptions: {
      loggerCallback: (level, message, containsPii) => {
        if (containsPii) {
          return;
        }
        switch (level) {
          case msal.LogLevel.Error:
            console.error(message);
            return;
          case msal.LogLevel.Info:
            console.info(message);
            return;
          case msal.LogLevel.Verbose:
            console.debug(message);
            return;
          case msal.LogLevel.Warning:
            console.warn(message);
            return;
          default:
            return;
        }
      },
    },
  },
};
