import { Spinner } from '@chakra-ui/react';
import React from 'react';

interface LoaderProps {}

export const Loader: React.FC<LoaderProps> = ({}) => {
  return (
    <div className="loading">
      <div className="spinner">
        <Spinner size="xl" />
      </div>
    </div>
  );
};
