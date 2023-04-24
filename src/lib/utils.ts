import * as clsx from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...inputs: clsx.ClassValue[]) => {
  return twMerge(clsx.clsx(inputs));
};
