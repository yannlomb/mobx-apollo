import React, { Component } from 'react';

import { inject, observer } from 'mobx-react';

@inject('postsStore')
@observer
export default (class extends Component {
  componentDidMount() {
    setTimeout(
      () =>
        this.props.postsStore
          .createPost('Hello World!')
          // .then(() => console.log('Added data!'))
          .catch(error => console.log(error.message)),
      2500
    );
  }

  render() {
    this.props.postsStore.allPosts &&
      this.props.postsStore.allPosts.forEach(post => console.log(post.title));

    return null;
  }
});
