"use client";

type Props = {
  error: Error;
};

const ErrorBoundary = ({ error }: Props) => {
  return <div>{error.message}</div>;
};

export default ErrorBoundary;
