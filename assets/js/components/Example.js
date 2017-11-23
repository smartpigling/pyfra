import React from 'react';
import PropTypes from 'prop-types';
import { Table, Popconfirm, Button} from 'antd';

const Example = ({ onDelete, examples }) => {
  const columns = [{
    title: 'Name',
    dataIndex: 'name',
  },{
    title: 'Actions',
    render: (text, record) => {
      return (
        <Popconfirm title="Delete?" onConfirm={()=>onDelete(record.id)}>
          <Button>Delete</Button>
        </Popconfirm>
      );
    },
  }];

  return (
    <Table
      dataSource={examples}
      columns={columns}
      rowKey={'id'}
    />
  );
};

Example.propTypes = {
  onDelete: PropTypes.func.isRequired,
  examples: PropTypes.array.isRequired,
};

export default Example;
