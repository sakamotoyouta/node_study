import * as React from 'react';
import { Provider, connect } from 'react-redux';
import { hot } from 'react-hot-loader';
import { push } from 'react-router-redux';
import FormInputComponent from '../Components/FormInputComponent';
import PostListDisplayComponent from '../Components/PostListDisplayComponent';
import send from '../Action/SendAction';
import fetchPostList, { postedItem } from '../Action/FetchPostListAction';

interface ListProps {
  dispatch: Function;
  pushHistory(url: string): void;
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
    fetchPostList(this.props.dispatch);
  }

  render() {
    return (
      <div>
        <PostListDisplayComponent
          postList={this.props.postList}
          pushHistory={this.props.pushHistory}
        />
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
    pushHistory(url) {
      dispatch(push(url));
    },
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
