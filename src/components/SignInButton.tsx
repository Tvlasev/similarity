"use client";

import { FC, useState } from "react";
import { signIn } from "next-auth/react";
import Button from "./common/Button";
import { ToastComponent } from "./common/Toast";

interface SignInButtonProps {}

const SignInButton: FC<SignInButtonProps> = ({}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const signInWithGoogle = async () => {
    setIsLoading(true);

    try {
      // await signIn("google");
      ToastComponent({
        title: "Error signing in",
        message: "Please try again later",
        type: "error",
      });
    } catch (error) {
      ToastComponent({
        title: "Error signing in",
        message: "Please try again later",
        type: "error",
      });
    }
  };

  return (
    <Button onClick={signInWithGoogle} isLoading={isLoading}>
      Sign In
    </Button>
  );
};

export default SignInButton;
