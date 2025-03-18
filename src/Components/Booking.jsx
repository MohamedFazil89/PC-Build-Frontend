import { useSearchParams } from "react-router-dom"
import CardData from "./CartData";
import Cart from "./Cart";

export default function Booking() {
    const [searchParams] = useSearchParams();
    const productId = searchParams.get('productId');
    

  const Item = CardData.Products.find(product => product.id === Number(productId))


  return (
    <div>
      {Item ? (
        <Cart
        title={Item.title}
        description={Item.description}
        price={Item.price}
        img={Item.img}
         />
      ): ("")}
    </div>
  )
}
