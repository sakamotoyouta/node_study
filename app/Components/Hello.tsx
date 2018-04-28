import * as React from 'react';

export interface HelloProps { compiler: string; framework: string; }

// state less バージョン
// export const Hello = (props: HelloProps) => <h1>Hello from {props.compiler} and {props.framework} !</h1>

// クラスバージョン
export class Hello extends React.Component<HelloProps, {}> {
  render() {
    return <h1>Hello from {this.props.compiler} and {this.props.framework} !</h1>;
  }
}