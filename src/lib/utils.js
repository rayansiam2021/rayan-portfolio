import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merges Tailwind classes and handles conditional logic.
 * Essential for components like Electric Border.
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}