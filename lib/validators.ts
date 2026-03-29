import { z } from 'zod';
import { formatNumberWithDecimal } from './utils';

//inserting products validation schema
const currency =  z
.string()
.refine((value) => /^\d+(\.\d{2})?$/.test(formatNumberWithDecimal(Number(value))),
'price must have exactly two decimal places'
);
export const insertProductScheme = z.object({
name: z.string().min(3, 'Name must be atleast 3 characters'),
slug: z.string().min(3, 'Name must be atleast 3 characters'),
category: z.string().min(3, 'Name must be atleast 3 characters'),
brand: z.string().min(3, 'Name must be atleast 3 characters'),
description: z.string().min(3, 'Name must be atleast 3 characters'),
stock: z.coerce.number(),
images: z.array(z.string()).min(1,'product must have atleast one image'),
isFeatured: z.boolean(),
banner: z.string().nullable(),
price: currency
});   
//^ means start with
// \d means digit
// + near the \d means one or more digits
// ? after expression mean this part is optional
// $ in this example refine is the money symbol