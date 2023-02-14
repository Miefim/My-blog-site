import { put, takeEvery } from 'redux-saga/effects'

import { getUserFulfilled, getUserRejected } from '../slices/projectTestTaskSlice'

function* workGetUserFetch() {
   try {
      const user = yield fetch("https://graphqlzero.almansi.me/api", {
         "method": "POST",
         "headers": { "content-type": "application/json" },
         "body": JSON.stringify({
            query: `{
               user(id: 10) {
                  id
                  username
                  email
                  address {
                     geo {
                        lat
                        lng
                     }
                  }
               }
            }`
         })
      })
      const formattedUser = yield user.json()
      yield put(getUserFulfilled(formattedUser))
   
   } catch (error) {
      yield put(getUserRejected('Failed to fetch'))
   } 
}

function* projectUserSaga () {
   yield takeEvery('projectTestTask/getUserFetch', workGetUserFetch)
}

export default projectUserSaga