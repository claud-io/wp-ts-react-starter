import { Spin } from 'antd';
import React from 'react';
import { LoadingOutlined } from '@ant-design/icons';

interface LoaderProps {}

const antIcon = <LoadingOutlined style={{ fontSize: 100 }} spin />;

export const Loader: React.FC<LoaderProps> = ({}) => {
  return (
    <div className="loading">
      <div className="spinner">
        <Spin indicator={antIcon} />
      </div>
    </div>
  );
};
