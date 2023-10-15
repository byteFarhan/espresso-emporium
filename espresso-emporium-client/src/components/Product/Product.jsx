import PropTypes from "prop-types";
const Product = ({ product }) => {
  const { coffeeName, chef, supplier, taste, category, details, photoURL } =
    product;
  return (
    <div className="shadow-xl card card-compact w-96 bg-base-100">
      <figure>
        <img src="./images/coffee-3.png" alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Shoes!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="justify-end card-actions">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

Product.propTypes = {
  product: PropTypes.object.isRequired,
};
export default Product;
