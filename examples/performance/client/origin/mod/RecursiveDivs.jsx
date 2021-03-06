import React from 'react';
import createReactClass from 'create-react-class';

const leaf = <div>test performance</div>;

const RecursiveDivs = createReactClass({
  render() {
    const { depth, breadth } = this.props;

    if (depth <= 0) {
      return leaf;
    }

    const children = [];
    for (let i = 0; i < breadth; i++) {
      children.push(<RecursiveDivs key={i} depth={depth - 1} breadth={breadth} />);
    }
    return <div>{children}</div>;
  }
});

export default RecursiveDivs;
