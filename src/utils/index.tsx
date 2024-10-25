import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
/**
 * A version of {@link https://github.com/Jimdo/tailwind-merge#twmerge `twMerge`} that
 * uses {@link https://github.com/lukeed/clsx `clsx`} to flatten the inputs. This is
 * useful when you want to use the `tw-` prefix in your class names, but also want to
 * use the `clsx` utility to conditionally add classes.
 *
 * @example
 * import { cn } from '~/utils';
 *
 * const cls = cn('tw-font-bold', {
 *   'tw-text-blue-500': condition,
 * });
 *
 *
 * @param inputs The class names to be merged together.
 * @returns A single string containing all of the class names from the inputs.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
