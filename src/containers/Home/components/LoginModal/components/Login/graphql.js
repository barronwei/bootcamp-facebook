import gql from 'graphql-tag'

const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      user {
        id
      }
      token
    }
  }
`
export default LOGIN_USER
