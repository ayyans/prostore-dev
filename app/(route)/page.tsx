import ProductList from "@/components/shared/product/product-list";
import { Button } from "@/components/ui/button";
//import ProductList from "@/components/shared/product/product-list";
import { getLatestProducts } from "@/lib/actions/product.actions";
//temporary delay to test the loader visibility in pages reload or load for 2 seconds
//const delay = (ms) => new Promise((resolve) => setTimeout(resolve,ms));

//async if we wait for some loading data testing for loader can remove async when loader is commented for now or i can return it in case of loading data from later
//import sampleData from '@/db/sample-data';
const Homepage = async () => {
  const latestProducts = await getLatestProducts();

  //await delay(2000);
  //console.log(sampleData);
  //removed limit={4} from productlist attribute element so it is taken from constants value latest product limit directly from get
  return ( <ProductList data={latestProducts} title='Newest Arrivals' /> 
  );
}
 
export default Homepage;