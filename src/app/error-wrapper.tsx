"use client";

import "./global.css";
import { FC, PropsWithChildren, useState } from "react";

type ErrorSimulatorProps = {
  message?: string;
};

const ErrorSimulator = ({
  message = "An error occurred",
}: ErrorSimulatorProps) => {
  const [error, setError] = useState(false);

  if (error) {
    throw new Error(message);
  }

  return (
    <button
      title="Simulate an error"
      className="bg-red-950 text-red-500 rounded p-1 leading-none font-semibold text-sm hover:bg-red-900 transition"
      onClick={() => setError(true)}
    >
      Simulate Error
    </button>
  );
};

export const ErrorWrapper: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="flex flex-col rounded-lg mt-8 relative p-4 border border-gray-300">
      <div className="absolute top-0 left-4 -translate-y-1/2">
        <ErrorSimulator message="Simulated error in root layout" />
      </div>
      {children}
    </div>
  );
};

export default ErrorWrapper;
