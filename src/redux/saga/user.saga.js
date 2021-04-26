import { takeEvery, put } from 'redux-saga/effects'
import axios from 'axios'
import history from '../../utils/history'
import { toast } from 'react-toastify'

function* loginSaga(action) {
  // console.log("function*loginSaga -> action", action)
  try {
    const { email, password } = action.payload;
    const result = yield axios({
      method: "GET",
      url: "http://localhost:5000/users",
      params: {
        email,
        password
      }
    });
    // console.log("function*loginSaga -> result", result)
    if (result.data.length > 0) {
      toast.success('Đăng nhập thành công');
      localStorage.setItem("userInfo", JSON.stringify(result.data[0]));
      yield put({
        type: "LOGIN_SUCCESS",
        payload: {
          data: result.data[0]
        },
      });
      yield history.push('/');

    } else {
      toast.error('Tài khoản hoặc không chính xác');
      yield put({
        type: "LOGIN_FAIL",
        payload: {
          error: "Email hoặc mật khẩu không đúng"
        }
      });
    }

  } catch (e) {
    yield put({
      type: "LOGIN_FAIL",
      payload: {
        error: e.error

      }
    })
  }
}

function* logoutSaga(action) {
  try {
    const { email, password } = action.payload;
    const result = yield axios({
      method: "GET",
      url: "http://localhost:5000/users",
      params: {
        email,
        password
      }
    });
    if (result.data.length > 0) {
      const a = localStorage.removeItem('userInfo')
      yield put({
        type: "LOGOUT_SUCCESS",
        payload: {
          data: a,
        },
      });
      yield history.push('/login');
    } else {
      yield put({
        type: "LOGOUT_FAIL",
        payload: {
          error: 'message error',
        },
      });
    }
  } catch (e) {
    yield put({
      type: "LOGOUT_FAIL",
      payload: {
        error: e.error
      },
    });
  }

}

export default function* userSaga() {
  yield takeEvery("LOGIN_REQUEST", loginSaga)
  yield takeEvery("LOGOUT_REQUEST", logoutSaga)
}