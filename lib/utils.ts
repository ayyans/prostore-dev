import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

//convert prisma object into aregular js object
// T placeholder, specify the type of the object the first one T
export function convertToPlainObject<T>(value: T): T{
  return JSON.parse(JSON.stringify(value));
}

//format number with decimal places (for price decimal validation)
export function formatNumberWithDecimal(num: number): string {
  //getting the int and the decimal 49.99 example 49 int 99 is decimal
  //destructure the num
  const [int,decimal] =num.toString().split(',');
  // in return we check if decimal or int padend to define the decimal count numbers

  return decimal ? `${int}.${decimal.padEnd(2,'0')}` : `${int}.00`;

}