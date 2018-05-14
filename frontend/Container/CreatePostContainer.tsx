import * as React from 'react';
import { Provider, connect } from 'react-redux';
import { hot } from 'react-hot-loader';
import CreatePostFormComponent from '../Components/CreatePostFormComponent';
import handleTextField from '../Action/HandleTextFiledAction';
import handleFileInput from '../Action/HandleFileInputAction';
import postInputData from '../Action/PostInputDataAction';

interface ListProps {
  dispatch: Function;
  handleTextInputChange: ((event: any, value: string) => void);
  handleFileInputChange: ((event: any) => void);
  onClickSubmit: (() => void);
  inputData: Object,
}

/*
 * Container
 * 一旦変な名前つけてます。
 */
class _CreatePostContainer extends React.Component<ListProps, {}> {

  render() {
    return (
      <div>
        <CreatePostFormComponent
          handleTextInputChange={this.props.handleTextInputChange}
          handleFileInputChange={this.props.handleFileInputChange}
          onClickSubmit={this.props.onClickSubmit}
          inputData={this.props.inputData}
        />
      </div>
    );
  }
}

function mapStateToProps(store) {
  return {
    inputData: store.inputData,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    handleTextInputChange(event, value) {
      dispatch(handleTextField(event, value));
    },
    handleFileInputChange(event, value) {
      dispatch(handleFileInput(event));
    },
    onClickSubmit(inputData) {
      // TODO：バリデーション処理を追加
      dispatch(postInputData(inputData));
    },
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
