# mobx-apollo

# Installation
`yarn add mobx mobx-utils mobx-apollo`

# Usage
```javascript
import { query } from 'mobx-apollo';

type options = {
  client: apolloClientInstance, // new ApolloClient()
  query: gqlInstance, // gql`..`
  onError: Function,
  onFetch: Function, // invoked every time new data is fetched
  ...watchQueryOptions // (see Apollo Client docs)
};

class Store {
  @query allPosts = { ...options };

  // or without decorators
  constructor() {
    query(this, 'allPosts', { ...options });
  }
}

const store = new Store();

autorun(() => console.log(store.allPosts)); // [{ title: 'Hello World!' }]
```

See [example](https://github.com/sonaye/mobx-apollo/tree/master/example).
