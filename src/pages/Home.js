import { Link, useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();

  function navigationHandler() {
    navigate("/products");
  }

  return (
    <>
      <h1>HomePage</h1>
      <p>
        Go to <Link to="/products">Products</Link>
      </p>
      <p>
        <button onClick={navigationHandler}>Navigate to Products</button>
      </p>
    </>
  );
}

export default HomePage;
