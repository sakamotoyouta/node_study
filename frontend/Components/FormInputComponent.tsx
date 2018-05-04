import * as React from 'react';
import { hot } from 'react-hot-loader';

interface FormInputProps {
  handleClick: ((v: string) => void);
}

class FormInputComponent extends React.Component<FormInputProps, {}> {

  private myInput: {
    value: string;
  };

  send(e) {
    e.preventDefault();
    this.props.handleClick(this.myInput.value.trim());
    this.myInput.value = '';
  }

  render() {
    return (
      <form>
        <input type="text" ref={(ref) => (this.myInput = ref)} defaultValue="" />
        <button onClick={(event) => this.send(event)}>Send</button>
      </form>
    );
  }
}

export default hot(module)(FormInputComponent);
