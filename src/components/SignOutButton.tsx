"use client";

import { FC, useState } from "react";
import { signOut } from "next-auth/react";
import Button from "./common/Button";
import { ToastComponent } from "./common/Toast";

interface SignOutButtonProps {}

const SignOutButton: FC<SignOutButtonProps> = ({}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const signOut = async () => {
    setIsLoading(true);

    try {
      await signOut();
    } catch (error) {
      ToastComponent({
        title: "Error signing out",
        message: "Please try again later",
        type: "error",
      });
    }
  };

  return (
    <Button onClick={signOut} isLoading={isLoading}>
      Sign Out
    </Button>
  );
};

export default SignOutButton;
