import { useParams } from "react-router-dom";

function ProductDetailPage() {
  const params = useParams();
  console.log(params);

  return (
    <>
      <h1>Product Details!</h1>
      <p>{params.productId}</p>
    </>
  );
}

export default ProductDetailPage;
