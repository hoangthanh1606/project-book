const initialState = {
  userInfo: {
    data: {},
    load: false,
    error: "",
  }
}

export default function userReducer(state = initialState, action) {
  switch (action) {
    case "LOGIN_REQUEST": {
      return {
        ...state,
        userInfo: {
          ...state.userInfo,
          load: true

        }
      }
    }
    case "LOGIN_SUCCESS": {
      const { data } = action.payload
      console.log("userReducer -> data", data)
      return {
        ...state,
        userInfo: {
          ...state.userInfo,
          data: data,
          load: false

        }

      }
    }
    case "LOGIN_FAIL": {
      const { error } = action.payload
      return {
        ...state,
        userInfo: {
          ...state.userInfo,
          load: false,
          error: error
        }
      }
    }
    case 'LOGOUT_REQUEST': {
      return {
        ...state,
        userInfo: {
          ...state.userInfo,
          load: true
        }
      }
    }
    case 'LOGOUT_SUCCESS': {
      const { data } = action.payload
      console.log("userReducer -> data", data)
      return {
        ...state,
        userInfo: {
          ...state.userInfo,
          data: data,
          load: false
        }
      }
    }
    case 'LOGOUT_FAIL': {
      const { error } = action.payload
      return {
        ...state,
        userInfo: {
          ...state.userInfo,
          load: false,
          error: error
        }
      }
    }


    default: {
      return state
    }

  }
}