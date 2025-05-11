"use client";

import { useRouter } from "next/navigation";
import { startTransition } from "react";

type Props = {
  error: Error;
  reset: () => void;
};

const ErrorBoundary = ({ error, reset }: Props) => {
  const router = useRouter();

  const reload = () => {
    startTransition(() => {
      router.refresh();
      reset();
    });
  };

  return (
    <div>
      <p>{error.message}</p>
      <button onClick={reload}>Reset</button>
    </div>
  );
};

export default ErrorBoundary;
