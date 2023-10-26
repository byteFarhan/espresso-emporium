import PropTypes from "prop-types";

// coffeeName,
// chef,
// supplier,
// taste,
// category,
// details,
// photoURL,
const InputForm = ({
  taitle,
  description,
  submitText,
  handleSubmit,
  product,
}) => {
  return (
    <div className="bg-[url('https://i.postimg.cc/cLQKkXns/11.png')] bg-no-repeat bg-cover bg-top py-20">
      <div className="mx-3 md:mx-6 lg:w-[1300px] mx-w-[1320px] lg:mx-auto bg-[#F4F3F0] py-12 px-6 md:p-12 rounded-sm">
        <div className="mb-5 space-y-6 text-center">
          <h1
            style={{ textShadow: "2px 2px 0 rgba(0.5,0,0,0.5) " }}
            className="md:text-5xl text-3xl text-[#374151] text-opacity-75 font-rancho"
          >
            {taitle}
          </h1>
          <p className="mx-auto lg:w-2/3">{description}</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-5 md:px-10">
          {/* row-1 */}
          <div className="flex flex-col gap-5 lg:flex-row">
            <div className="w-full form-control">
              <label className="label">
                <span className="text-xl font-medium">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter coffee name"
                defaultValue={product?.coffeeName}
                required
                className="w-full px-3 py-2 text-lg rounded-sm placeholder:text-base placeholder:font-normal focus:outline-slate-300"
              />
            </div>
            <div className="w-full form-control">
              <label className="label">
                <span className="text-xl font-medium">Chef</span>
              </label>
              <input
                type="text"
                name="chef"
                placeholder="Enter coffee chef"
                defaultValue={product?.chef}
                required
                className="w-full px-3 py-2 text-lg rounded-sm placeholder:text-base placeholder:font-normal focus:outline-slate-300"
              />
            </div>
          </div>
          {/* row-2 */}
          <div className="flex flex-col gap-5 lg:flex-row">
            <div className="w-full form-control">
              <label className="label">
                <span className="text-xl font-medium">Supplier</span>
              </label>
              <input
                type="text"
                name="supplier"
                placeholder="Enter coffee supplier"
                defaultValue={product?.supplier}
                required
                className="w-full px-3 py-2 text-lg rounded-sm placeholder:text-base placeholder:font-normal focus:outline-slate-300"
              />
            </div>
            <div className="w-full form-control">
              <label className="label">
                <span className="text-xl font-medium">Taste</span>
              </label>
              <input
                type="text"
                name="taste"
                placeholder="Enter coffee taste"
                defaultValue={product?.taste}
                required
                className="w-full px-3 py-2 text-lg rounded-sm placeholder:text-base placeholder:font-normal focus:outline-slate-300"
              />
            </div>
          </div>
          {/* row-3 */}
          <div className="flex flex-col gap-5 lg:flex-row">
            <div className="w-full form-control">
              <label className="label">
                <span className="text-xl font-medium">Category</span>
              </label>
              <input
                type="text"
                name="category"
                placeholder="Enter coffee category"
                required
                defaultValue={product?.category}
                className="w-full px-3 py-2 text-lg rounded-sm placeholder:text-base placeholder:font-normal focus:outline-slate-300"
              />
            </div>
            <div className="w-full form-control">
              <label className="label">
                <span className="text-xl font-medium">Details</span>
              </label>
              <input
                type="text"
                name="details"
                placeholder="Enter coffee details"
                defaultValue={product?.details}
                required
                className="w-full px-3 py-2 text-lg rounded-sm placeholder:text-base placeholder:font-normal focus:outline-slate-300"
              />
            </div>
          </div>
          {/* row-4 */}
          <div className="w-full form-control">
            <label className="label">
              <span className="text-xl font-medium">Photo</span>
            </label>
            <input
              type="text"
              name="photoURL"
              placeholder="Enter photo URL"
              defaultValue={product?.photoURL}
              required
              className="w-full px-3 py-2 text-lg rounded-sm placeholder:text-base placeholder:font-normal focus:outline-slate-300"
            />
          </div>
          <button
            // style={{ textShadow: "2px 2px 0 rgba(0.5,0,0,0.5) " }}
            className="font-rancho text-xl md:text-2xl font-normal w-full btn border-2 mb-5  hover:bg-[#c9ac86] hover:border-2 hover:border-[#331A15]  border-[#331A15] bg-[#D2B48C]"
          >
            {submitText}
          </button>
        </form>
      </div>
    </div>
  );
};

InputForm.propTypes = {
  taitle: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  submitText: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  product: PropTypes.object,
};
export default InputForm;
