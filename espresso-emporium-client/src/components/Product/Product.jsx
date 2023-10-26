import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import swal from "sweetalert";
const Product = ({ product, setProducts, products }) => {
  const {
    _id,
    coffeeName,
    chef,
    photoURL,
    // supplier,
    // taste,
    // category,
    // details,
  } = product;
  const handleDelete = (id) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this product!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        fetch(
          `https://espresso-emporium-server-seven.vercel.app/products/${id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount) {
              const remaining = products.filter((prod) => prod._id !== id);
              setProducts(remaining);
              swal("Product has been deleted!", {
                icon: "success",
              });
            }
          });
      } else {
        swal("Product deletion has been canceled.!");
      }
    });

    // fetch(`https://espresso-emporium-server-seven.vercel.app/products/${id}`, {
    //   method: "DELETE",
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data);
    //     if (data.deletedCount) {
    //       const remaining = products.filter((prod) => prod._id !== id);
    //       setProducts(remaining);
    //     }
    //   });
  };
  return (
    <div className="justify-between bg-[#F5F4F1] hover:shadow md:bg-opacity-70 flex-col md:flex-row flex items-center py-8 px-4 md:p-8 rounded-sm">
      <figure>
        <img
          src={photoURL ? photoURL : `./images/coffee-6.png`}
          alt={coffeeName}
          className="object-cover"
        />
      </figure>
      <div className="justify-self-center card-body">
        <div className="flex-1 w-full md:w-2/3 md:mx-auto">
          <p className="text-lg">
            <span className="font-medium">Name:</span> {coffeeName}
          </p>
          <p className="text-lg">
            <span className="font-medium">Chep:</span> {chef}
          </p>
          <p className="text-lg">
            <span className="font-medium">Price:</span> {`890 Taka`}
          </p>
        </div>
      </div>
      <div className="flex gap-5 md:flex-col">
        <button className="btn">View</button>
        <Link to={`/update-product/${_id}`}>
          <button className="btn">Update</button>
        </Link>
        <button onClick={() => handleDelete(_id)} className="btn">
          Delete
        </button>
      </div>
    </div>
  );
};

Product.propTypes = {
  product: PropTypes.object.isRequired,
  setProducts: PropTypes.func.isRequired,
  products: PropTypes.array.isRequired,
};
export default Product;
