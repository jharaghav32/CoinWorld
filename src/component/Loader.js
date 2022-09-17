import { Space, Spin } from 'antd';
import React from 'react';

const Loader = () => (
  <Space size="middle">
    <Spin size="small" />
    <Spin />
    <Spin size="large" />
  </Space>
);

export default Loader;