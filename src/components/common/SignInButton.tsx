"use client";

import { signIn } from "next-auth/react";
import { FC, useState } from "react";
import Button from "./Button";
import { ToastComponent } from "@/common/Toast";

/**
 * NextJS does not allow to pass function from server -> client components,
 * hence this unreusable component.
 */

interface SignInButtonProps {}

const SignInButton: FC<SignInButtonProps> = ({}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const signInWithGoogle = async () => {
    try {
      setIsLoading(true);
      await signIn("google");
    } catch (error) {
      ToastComponent({
        title: "Error signing in",
        message: "Please try again later.",
        type: "error",
      });
    }
  };

  return (
    <Button onClick={signInWithGoogle} isLoading={isLoading}>
      Sign in
    </Button>
  );
};

export default SignInButton;
