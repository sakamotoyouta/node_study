import * as React from 'react';
import { hot } from 'react-hot-loader';

interface FormDisplayProps { data: string; }

class FormDisplayComponent extends React.Component<FormDisplayProps, {}> {
  render() {
    return <div>{this.props.data}</div>;
  }
}

export default hot(module)(FormDisplayComponent)
