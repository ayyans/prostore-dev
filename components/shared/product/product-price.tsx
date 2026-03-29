import { cn } from "@/lib/utils";
//cn used for dynamic classes
const ProductPrice = ({value, className}:{value: number; className?:string}) => {
   const stringValue = value.toFixed(2);
   const [intValue, floatValue] = stringValue.split('.');
//first argument is for static classes
//align-super for pushing element up
   return ( <p className={ cn('text-2xl', className)}>
    <span className="text-xs align-super">$</span>
    {intValue}
    <span className="text-xs align-super">.{floatValue }</span>
   </p> );
}
 
export default ProductPrice;