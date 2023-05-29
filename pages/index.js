import Featured from "@/components/Featured";
import Header from "@/components/Header";
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";

export default function HomePage({ product }) {
  console.log(product)
  return (
    <div>
      <Header />
      <Featured product={product} />
    </div>
  )
}

export async function getServerSideProps() {
  const featuredProductId = "6468c7a7b91b23fdc05b6b2a";
  await mongooseConnect();
  const product = await Product.findById(featuredProductId);

  return {
    props: { product: JSON.parse(JSON.stringify(product)) }
  }
}