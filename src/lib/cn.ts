import { clsx, type ClassValue } from 'clsx'

/** Small helper to compose conditional className strings. */
export function cn(...inputs: ClassValue[]): string {
  return clsx(inputs)
}
