import gql from 'graphql-tag';

export const allPosts = gql`
  {
    allPosts(orderBy: createdAt_DESC) {
      id
      title
    }
  }
`;

export const createPost = gql`
  mutation createPost($title: String!) {
    createPost(title: $title) {
      id
      title
    }
  }
`;
