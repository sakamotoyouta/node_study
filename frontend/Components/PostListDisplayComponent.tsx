import * as React from 'react';
import { hot } from 'react-hot-loader';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import RaisedButton from 'material-ui/RaisedButton';
import { postedItem } from '../Action/FetchPostListAction';

interface PostListDisplayProps {
  postList: any;
  pushHistory(url: string): void;
}

class PostListDisplayComponent extends React.Component<PostListDisplayProps, {}> {
  static styles: {[key: string]: object;} = {
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
    },
    gridList: {
      width: 500,
      height: 450,
      overflowY: 'auto',
    },
  }

  createViewData() {
    const { postList } = this.props;
    if (!postList.length){
      return []
    }

    return postList.map((post) => (
      <GridTile
        key={post._id}
        title={post.message}
        subtitle={<span>by <b>{post.username}</b></span>}
        actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
      >
        <img src={post.image_path} />
      </GridTile>
    ));
  }

  render() {
    return (
      <div>
        <h2>Post List</h2>
        <RaisedButton
          label="投稿する"
          labelPosition="before"
          containerElement="label"
          onTouchTap={() => {this.props.pushHistory('/CreatePost/');}}
        />
        <div style={PostListDisplayComponent.styles.root}>
          <GridList cellHeight={180} style={PostListDisplayComponent.styles.gridList}>
            {this.createViewData()}
          </GridList>
        </div>
      </div>
    );
  }
}

export default hot(module)(PostListDisplayComponent)
