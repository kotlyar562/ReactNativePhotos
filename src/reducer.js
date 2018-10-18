export const GET_DATA = 'REQUST_DATA'
export const GET_DATA_SUCCESS = 'GET_DATA_SUCCESS'
export const GET_DATA_ERROR = 'GET_DATA_ERROR'
export const NEXT_PAGE = 'NEXT_PAGE'

const initial = {
  page: 1,
  loading: false,
  data: [],
  error: null,
}

export default function reducer(state = initial, action) {
  switch (action.type) {
    case GET_DATA:
      return { ...state, loading: true }
    case GET_DATA_SUCCESS:
      return { ...state, loading: false, data: state.data.concat(action.data) }
    case GET_DATA_ERROR:
      return { ...state, loading: false, error: action.error }
    case NEXT_PAGE:
      return { ...state, page: state.page + 1 }
    default:
      return state
  }
}

const requestData = () => ({
  type: GET_DATA,
})

const succesLoadData = data => ({
  type: GET_DATA_SUCCESS,
  data,
})

const failLoadData = error => ({
  type: GET_DATA_ERROR,
  error,
})

const nextPage = () => ({
  type: NEXT_PAGE,
})

const adress = 'https://api.unsplash.com/photos'
const token = 'cf49c08b444ff4cb9e4d126b7e9f7513ba1ee58de7906e4360afc1a33d1bf4c0'

export function loadData(page) {
  const link = `${adress}?client_id=${token}&page=${page}`
  return dispatch => {
    dispatch(requestData())
    fetch(link)
      .then(response => {
        if (response.ok) {
          return response.json().then(data => {
            dispatch(succesLoadData(data))
          })
        } else {
          dispatch(failLoadData('Ошибка при загрузке фото'))
        }
      })
      .catch(error => {
        dispatch(failLoadData(error))
      })
  }
}

export function loadNext() {
  return (dispatch, getState) => {
    dispatch(nextPage())
    const state = getState()
    dispatch(loadData(state.page))
  }
}
