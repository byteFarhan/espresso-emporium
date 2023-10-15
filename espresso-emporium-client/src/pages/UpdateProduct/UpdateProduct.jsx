import InputForm from "../../components/InputForm/InputForm";

const UpdateProduct = () => {
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
    console.log(UpdatedProduct);
    // fetch()
  };
  return (
    <div>
      <InputForm
        taitle={`Update Existing Coffee Details`}
        description="It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here."
        submitText="Update Coffee Details"
        handleSubmit={handleUpdateProduct}
      />
    </div>
  );
};

export default UpdateProduct;
