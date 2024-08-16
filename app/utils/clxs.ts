import { twMerge } from "tailwind-merge";
import { clsx, ClassValue } from "clsx";

export const clsxs = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};
