export function loginAction(params) {
  // console.log("userAction -> params", params)
  return {
    type: "LOGIN_REQUEST",
    payload: params,
  }
}

export function logoutAction(params) {
  console.log("logoutAction -> params", params)
  return {
    type: "LOGOUT_REQUEST",
    payload: params,
  }
}

// export function getUserInfoAction(params) {
//   return {
//     type: "GET_USER_INFO_REQUEST",
//     payload: params,
//   }
// }