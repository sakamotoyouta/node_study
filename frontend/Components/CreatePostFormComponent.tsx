import * as React from 'react';
import { hot } from 'react-hot-loader';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

interface FormDisplayProps {
  handleTextInputChange: ((event: any, value: string) => void);
  handleFileInputChange: ((event: any) => void);
  onClickSubmit: Function;
  inputData: Object;
}

class CreatePostFormComponent extends React.Component<FormDisplayProps, any> {
  static style : {[key: string]: object;}  = {
    fileInput: {
      cursor: 'pointer',
      position: 'absolute',
      top: 0,
      bottom: 0,
      right: 0,
      left: 0,
      width: '100%',
      opacity: 0,
    }
  }

  render() {
    // User Nameはあとで取り除く
    return (
      <div>
        <div>
          <TextField
            name="userName"
            floatingLabelText="User Name(Provisional)"
            onChange={(e, value) => { this.props.handleTextInputChange(e, value); }}
          />
        </div>
        <div style={{ marginBottom: '30px' }}>
          <TextField
            name="message"
            floatingLabelText="Message"
            onChange={(e, value) => { this.props.handleTextInputChange(e, value); }}
          />
        </div>
        <div style={{marginBottom: '30px'}}>
          <RaisedButton
            containerElement='label'
            label='Choose an Image'
            labelPosition="before"
            icon={<i className="material-icons pb-3">add_a_photo</i>}
          >
            <input
              type="file"
              style={CreatePostFormComponent.style.fileInput}
              name="image"
              onChange={(e) => {this.props.handleFileInputChange(e);}}
              accept="image/**"
            />
          </RaisedButton>
        </div>
        <div>
          <RaisedButton
            label='POST'
            onClick={() => {this.props.onClickSubmit(this.props.inputData);}}
          />
        </div>
      </div>
    );
  }
}

export default hot(module)(CreatePostFormComponent)
