import * as React from 'react';
import { hot } from 'react-hot-loader';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

interface FormDisplayProps { }

class CreatePostFormComponent extends React.Component<FormDisplayProps, {}> {
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
    return (
      <div>
        <div>
          <TextField floatingLabelText="User Name(Provisional)"/>
        </div>
        <div style={{ marginBottom: '30px' }}>
          <TextField floatingLabelText="Message"/>
        </div>
        <div>
          <RaisedButton
            containerElement='label'
            label='Choose an Image'
            labelPosition="before"
            icon={<i className="material-icons pb-3">add_a_photo</i>}
          >
            <input type="file" style={CreatePostFormComponent.style.fileInput} />
          </RaisedButton>
        </div>
      </div>
    );
  }
}

export default hot(module)(CreatePostFormComponent)
