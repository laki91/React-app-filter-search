import gql from "graphql-tag";

export const GET_POSTS = gql`
    query {
        posts {
            data {
                id
                title
                body
                user {
                    id
                    name
                    address {
                        street
                        city
                        zipcode
                    }
                }
                comments {
                    data {
                        id
                        name
        	            body
                    }
                }
            }
        }
    }
`;