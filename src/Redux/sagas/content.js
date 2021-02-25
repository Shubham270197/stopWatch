import { put } from 'redux-saga/effects'
import gql from 'graphql-tag'
import {ApolloClient, HttpLink, InMemoryCache} from 'apollo-boost'



import { getUserDataSuccess, getUserDataFailure } from '../actions/content'


const endPointUrl = "https://graphqlzero.almansi.me/api"
const client = new ApolloClient({
   link: new HttpLink({uri:endPointUrl}),
   cache:new InMemoryCache()
});
// const httpLink = createHttpLink({
//     uri: "https://graphqlzero.almansi.me/api"
//   })

// const link = split(
//     // split based on operation type
//     ({ query }) => {
//       const { kind, operation } = getMainDefinition(query)
  
//       return kind === 'OperationDefinition' && operation === 'subscription'
//     },
//     httpLink
//   )

// const client = new ApolloClient({
//     link: link,
//     cache: new InMemoryCache()
//   })

export function* getUserSaga() {
    try {
        let GET_USER_DATA = ''
        GET_USER_DATA = gql`
        query{
            user(id: "1"){
              posts {
                data {
                  id
                  title
                }
              }
            }
          }
        `
        const userData = yield client.query({
            query: GET_USER_DATA,
        })
        const finalData = userData.data.user.posts.data
        console.log("shubham = ", finalData)
        yield put(getUserDataSuccess(finalData))
    } catch (error) {
        yield put (getUserDataFailure(error))
    }
}

export default getUserSaga