import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* getProductListSaga(action) {
  try {
    const { page, limit, categoryId, desc, publisherId } = action.payload;
    console.log("🚀 ~ file: product.saga.js ~ line 7 ~ function*getProductListSaga ~ publisherId", publisherId)
    // const publisherIds = [1, 2, 3]
    // let publisherIdParams = '';
    // publisherIds.forEach((item, index) => {
    //   if (index === 0) {
    //     publisherIdParams = `?publisherId=${item}`
    //   } else {
    //     publisherIdParams = publisherIdParams + `&publisherId=${item}`
    //   }
    // })
    const result = yield axios({
      method: 'GET',
      url: 'http://localhost:5000/products',
      params: {
        _page: page,
        _limit: limit,
        ...categoryId && { categoryId },
        ...publisherId && { publisherId },
        _order: desc,
      }
    });
    yield put({
      type: "GET_PRODUCT_LIST_SUCCESS",
      payload: {
        data: result.data
      },
    });
  } catch (e) {
    yield put({
      type: "GET_PRODUCT_LIST_FAIL",
      payload: {
        error: e.error
      },
    });
  }
}

function* getProductDetailSaga(action) {
  try {
    const { id } = action.payload;
    const result = yield axios({
      method: 'GET',
      url: `http://localhost:5000/products/${id}`,
      params: {
        _expand: 'category'
      }
    });
    yield put({
      type: "GET_PRODUCT_DETAIL_SUCCESS",
      payload: {
        data: result.data,
      },
    });
  } catch (e) {
    yield put({type: "GET_PRODUCT_DETAIL_FAIL", message: e.message});
  }
}

function* getCategoryListSaga(action) {
  try {
    const result = yield axios({
      method: 'GET',
      url: 'http://localhost:5000/categories',
    });
    yield put({
      type: "GET_CATEGORY_LIST_SUCCESS",
      payload: {
        data: result.data,
      },
    });
  } catch (e) {
    yield put({
      type: "GET_CATEGORY_LIST_FAIL",
      payload: {
        error: e.error
      },
    });
  }
}

function* getPublisherListSaga(action) {
  try {
    const result = yield axios({
      method: 'GET',
      url: 'http://localhost:5000/publishers',
    });
    yield put({
      type: "GET_PUBLISHER_LIST_SUCCESS",
      payload: {
        data: result.data,
      },
    });
  } catch (e) {
    yield put({
      type: "GET_PUBLISHER_LIST_FAIL",
      payload: {
        error: e.error
      },
    });
  }
}

export default function* productSaga() {
  yield takeEvery('GET_PRODUCT_LIST_REQUEST', getProductListSaga);
  yield takeEvery('GET_PRODUCT_DETAIL_REQUEST', getProductDetailSaga);
  yield takeEvery('GET_CATEGORY_LIST_REQUEST', getCategoryListSaga);
  yield takeEvery('GET_PUBLISHER_LIST_REQUEST', getPublisherListSaga);
}
