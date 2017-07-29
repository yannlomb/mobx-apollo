import { query } from 'mobx-apollo';

import client from './client';
import { allPosts, createPost } from './queries';

export default new class {
  @query
  allPosts = {
    client,
    query: allPosts,
    // multiple: true, // default is a single query
    onError: error => console.log(error.message)
    // onFetch: (/* data */) => console.log('Received data!')
  };

  createPost = title =>
    client.mutate({
      mutation: createPost,
      variables: { title },
      refetchQueries: [{ query: allPosts }]
    });
}();
