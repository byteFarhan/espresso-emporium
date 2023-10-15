import PropTypes from "prop-types";
const InputForm = ({ taitle, description, submitText, handleSubmit }) => {
  return (
    <div className="w-[1320px] mx-auto bg-[#F4F3F0] p-12 my-20 rounded-sm">
      <div className="mb-5 space-y-6 text-center">
        <h1
          style={{ textShadow: "2px 2px 0 rgba(0.5,0,0,0.5) " }}
          className="text-5xl text-[#374151] text-opacity-75 font-rancho"
        >
          {taitle}
        </h1>
        <p className="w-2/3 mx-auto">{description}</p>
      </div>
      <form onSubmit={handleSubmit} className="px-10 space-y-5">
        {/* row-1 */}
        <div className="flex gap-5 ">
          <div className="w-full form-control">
            <label className="label">
              <span className="text-xl font-medium">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter coffee name"
              required
              className="w-full px-3 py-2 text-lg font-medium rounded-sm placeholder:text-base placeholder:font-normal focus:outline-slate-300"
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
              required
              className="w-full px-3 py-2 text-lg font-medium rounded-sm placeholder:text-base placeholder:font-normal focus:outline-slate-300"
            />
          </div>
        </div>
        {/* row-2 */}
        <div className="flex gap-5 ">
          <div className="w-full form-control">
            <label className="label">
              <span className="text-xl font-medium">Supplier</span>
            </label>
            <input
              type="text"
              name="supplier"
              placeholder="Enter coffee supplier"
              required
              className="w-full px-3 py-2 text-lg font-medium rounded-sm placeholder:text-base placeholder:font-normal focus:outline-slate-300"
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
              required
              className="w-full px-3 py-2 text-lg font-medium rounded-sm placeholder:text-base placeholder:font-normal focus:outline-slate-300"
            />
          </div>
        </div>
        {/* row-3 */}
        <div className="flex gap-5 ">
          <div className="w-full form-control">
            <label className="label">
              <span className="text-xl font-medium">Category</span>
            </label>
            <input
              type="text"
              name="category"
              placeholder="Enter coffee category"
              required
              className="w-full px-3 py-2 text-lg font-medium rounded-sm placeholder:text-base placeholder:font-normal focus:outline-slate-300"
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
              required
              className="w-full px-3 py-2 text-lg font-medium rounded-sm placeholder:text-base placeholder:font-normal focus:outline-slate-300"
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
            required
            className="w-full px-3 py-2 text-lg font-medium rounded-sm placeholder:text-base placeholder:font-normal focus:outline-slate-300"
          />
        </div>
        <button
          // style={{ textShadow: "2px 2px 0 rgba(0.5,0,0,0.5) " }}
          className="font-rancho text-2xl font-normal w-full btn border-2 mb-5  hover:bg-[#c9ac86] hover:border-2 hover:border-[#331A15]  border-[#331A15] bg-[#D2B48C]"
        >
          {submitText}
        </button>
      </form>
    </div>
  );
};

InputForm.propTypes = {
  taitle: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  submitText: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};
export default InputForm;
