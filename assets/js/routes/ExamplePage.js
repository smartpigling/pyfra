import React from 'react';
import { connect } from 'dva';
import Example from '../components/Example';

const ExamplePage = ({ dispatch, examples }) => {
  function handleDelete (id){
    dispatch({
      type: 'examples/delete',
      payload: id,
    });
  }
  return (
    <div>
      <h1>Example List</h1>
      <Example onDelete={handleDelete} examples={examples}/>
    </div>
  );
};

export default connect( ({examples}) => ({
  examples,
}))(ExamplePage);
