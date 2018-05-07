import * as React from 'react';
import { Provider, connect } from 'react-redux';
import { hot } from 'react-hot-loader';
import FormInputComponent from '../Components/FormInputComponent';
import PostListDisplayComponent from '../Components/PostListDisplayComponent';
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
class _ListContainer extends React.Component<ListProps, {}> {
  componentWillMount() {
    const { dispatch } = this.props;
    fetchPostList(dispatch);
  }

  render() {
    return (
      <div>
        <PostListDisplayComponent postList={this.props.postList} />
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

const ListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(_ListContainer);

export default hot(module)(ListContainer);
