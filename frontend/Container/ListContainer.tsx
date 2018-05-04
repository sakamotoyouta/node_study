import * as React from 'react';
import { Provider, connect } from 'react-redux';
import { hot } from 'react-hot-loader';
import FormInputComponent from '../Components/FormInputComponent';
import FormDisplayComponent from '../Components/FormDisplayComponent';
import send from '../Action/SendAction';

/*
 * Container
 * 一旦変な名前つけてます。
 */
class _ListContainer extends React.Component<ListProps, {}> {
  render() {
    return (
      <div>
        <FormInputComponent handleClick={this.props.onClick} />
        <FormDisplayComponent data={this.props.value} />
      </div>
    );
  }
}

interface ListProps {
  onClick: ((v: string) => void);
  value: string;
}


function mapStateToProps(state) {
  return {
    value: state.value,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onClick(value) {
      dispatch(send(value));
    },
  };
}

const ListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(_ListContainer);

export default hot(module)(ListContainer);
