import gql from 'graphql-tag'

const CREATE_USER = gql`
  mutation createUser($input: CreateUserInput!) {
    createUser(input: $input) {
      user {
        id
      }
      token
    }
  }
`
export default CREATE_USER
