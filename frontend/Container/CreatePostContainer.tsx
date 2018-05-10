import * as React from 'react';
import { Provider, connect } from 'react-redux';
import { hot } from 'react-hot-loader';
import CreatePostFormComponent from '../Components/CreatePostFormComponent';
import send from '../Action/SendAction';
import fetchPostList, { postedItem } from '../Action/FetchPostListAction';

interface ListProps {
  dispatch: Function;
  onClick: ((v: string) => void);
  value: string;
  postList: [postedItem];
}

/*
 * Container
 * 一旦変な名前つけてます。
 */
class _CreatePostContainer extends React.Component<ListProps, {}> {

  render() {
    return (
      <div>
        <CreatePostFormComponent />
      </div>
    );
  }
}

function mapStateToProps(store) {
  return {
    value: store.value,
    postList: store.postList
  };
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch(action) {
      dispatch(action);
    },
  };
}

const CreatePostContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(_CreatePostContainer);

export default hot(module)(CreatePostContainer);
