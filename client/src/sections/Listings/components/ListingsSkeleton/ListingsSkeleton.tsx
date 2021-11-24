import React, { FC } from 'react';
import { Alert, Divider, Skeleton } from 'antd';
import './styles/ListingsSkeleton.css';

interface Props {
  title: string;
  error?: boolean;
}

export const ListingsSkeleton: FC<Props> = ({ title, error = false }) => {
  const errorAlert = error ? (
    <Alert
      type="error"
      message="Something went wrong! Please try again later :("
      className="listings-skeleton__alert"
    />
  ) : null;

  return (
    <div className="listings-skeleton">
      {errorAlert}
      <h2>{title}</h2>
      <Skeleton active paragraph={{ rows: 1 }} />
      <Divider />
      <Skeleton active paragraph={{ rows: 1 }} />
      <Divider />
      <Skeleton active paragraph={{ rows: 1 }} />
    </div>
  );
};
