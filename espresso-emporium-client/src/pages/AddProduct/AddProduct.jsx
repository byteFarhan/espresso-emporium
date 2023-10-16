import InputForm from "../../components/InputForm/InputForm";
import swal from "sweetalert";
const AddProduct = () => {
  const handleAddProduct = (e) => {
    e.preventDefault();
    const form = e.target;
    const coffeeName = form.name.value;
    const chef = form.chef.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photoURL = form.photoURL.value;
    const product = {
      coffeeName,
      chef,
      supplier,
      taste,
      category,
      details,
      photoURL,
    };
    // console.log(product);
    fetch("http://localhost:5000/products", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.insertedId) {
          swal({
            title: "Good job!",
            text: "The product has been added successfully",
            icon: "success",
          });
          form.reset();
        }
      });
  };
  return (
    <div>
      <InputForm
        taitle={`Add New Coffee`}
        description="It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here."
        submitText="Add Coffee"
        handleSubmit={handleAddProduct}
      />
    </div>
  );
};

export default AddProduct;
