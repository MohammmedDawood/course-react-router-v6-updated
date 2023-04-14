import { Link } from "react-router-dom";

function HomePage() {
  return (
    <>
      <div>HomePage</div>
      <p>
        Go to <Link to="/products">Products</Link>
      </p>
    </>
  );
}

export default HomePage;
