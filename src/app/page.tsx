
import Hero from "@/components/Hero"
import FlashSales from "@/components/FlashSales"
import PromoBanner from "@/components/PromoBanner"
import Product from "@/components/products"
import Cart from "@/components/Cart"
import Featured from "@/components/Featured"





export default function Homepage(){
  return(
    <div>
      
      <Hero/>
      <FlashSales/>
      <Cart/>
      <PromoBanner/>
      <Product/>
      <Featured/>
      
      
      
      
    </div>
  )
}