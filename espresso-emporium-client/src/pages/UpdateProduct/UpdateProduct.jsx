import { useLoaderData } from "react-router-dom";
import InputForm from "../../components/InputForm/InputForm";
import swal from "sweetalert";

const UpdateProduct = () => {
  const product = useLoaderData();
  // console.log(product);
  const handleUpdateProduct = (e) => {
    e.preventDefault();
    const form = e.target;
    const coffeeName = form.name.value;
    const chef = form.chef.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photoURL = form.photoURL.value;
    const UpdatedProduct = {
      coffeeName,
      chef,
      supplier,
      taste,
      category,
      details,
      photoURL,
    };
    // console.log(UpdatedProduct);
    fetch(
      `https://espresso-emporium-server-seven.vercel.app/products/${product._id}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(UpdatedProduct),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          swal("Good job!", "Product has been updated", "success");
        }
      });
  };
  return (
    <div>
      <InputForm
        taitle={`Update Existing Coffee Details`}
        description="It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here."
        submitText="Update Coffee Details"
        handleSubmit={handleUpdateProduct}
        product={product}
      />
    </div>
  );
};

export default UpdateProduct;
