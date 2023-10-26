import { AiFillEyeInvisible, AiFillEye, AiOutlineGoogle } from "react-icons/ai";
import axios from "axios";
// import Navbar from "../../shared/Navbar/Navbar";
import useAuth from "../../hooks/useAuth";
import { useState } from "react";
import swal from "sweetalert";
import { updateProfile } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { showPassword, setShowPassword, createUser, googleSignIn } = useAuth();

  // console.log(navigate.pathName);

  const handleRegister = (e) => {
    e.preventDefault();
    setSuccess("");
    setError("");
    const form = e.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;
    // const isAccepted = e.target.terms.value;
    const form2 = new FormData(e.target);
    const isAccepted = form2.get("terms");
    // console.log(name, photoURL, email, password, isAccepted);
    if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/.test(password)) {
      setError(
        "Password should be minimum eight characters, at least one uppercase letter, one lowercase letter and one number!"
      );
      return;
    } else if (photoURL && !/\.(jpg|jpeg|png|gif)$/.test(photoURL)) {
      setError("Pleace provide an valid photo URL!");
      return;
    } else if (!isAccepted) {
      setError("Please accept our terms & conditions!");
      return;
    }
    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        updateProfile(result.user, { displayName: name, photoURL: photoURL });
        setSuccess("User registation successfull.");
        swal("User registation successfull.");
        form.reset();
        navigate("/");
        const logedInUser = {
          // name: result?.user?.displayName,
          // email: result?.user?.email,
          // photoURL: result?.user?.photoURL,
          name,
          email,
          photoURL,
        };
        console.log(logedInUser);
        // mongoDB  data base stroge functionality
        // using axios
        axios
          .post(
            "https://espresso-emporium-server-seven.vercel.app/users",
            logedInUser
          )
          .then((data) => {
            console.log(data.data);
          })
          .catch((error) => {
            console.log(error.message);
          });

        // using fetch
        // fetch("https://espresso-emporium-server-seven.vercel.app/users", {
        //   method: "POST",
        //   headers: {
        //     "content-type": "application/json",
        //   },
        //   body: JSON.stringify(logedInUser),
        // })
        //   .then((res) => res.json())
        //   .then((data) => {
        //     console.log(data);
        //   });
      })
      .catch((error) => {
        console.log(error.message);
        setError(error.message);
        swal(error.message);
      });
  };

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        swal("Sign is successfull.");
        navigate("/");
        console.log(result.user);
        const loggedInUser = {
          name: result?.user?.displayName,
          email: result?.user?.email,
          photoURL: result?.user?.photoURL,
        };
        // console.log(logedInUser);
        //post using axios
        axios
          .post(
            "https://espresso-emporium-server-seven.vercel.app/users",
            loggedInUser
          )
          .then((data) => {
            console.log(data.data);
          })
          .catch((error) => {
            console.log(error.message);
          });

        //  post using fetch
        // fetch("https://espresso-emporium-server-seven.vercel.app/users", {
        //   method: "POST",
        //   headers: {
        //     "content-type": "application/json",
        //   },
        //   body: JSON.stringify(logedInUser),
        // })
        //   .then((res) => res.json())
        //   .then((data) => {
        //     console.log(data);
        //   });
      })
      .catch((error) => {
        swal(error.message);
      });
  };

  return (
    <div className="bg-[url('https://i.postimg.cc/cLQKkXns/11.png')] bg-no-repeat bg-cover bg-top">
      {/* <Navbar /> */}
      <div className="px-5 py-6 md:px-0 font-work-sans">
        <div className="max-w-[1400px] mx-auto"></div>
        <div className="min-h-[87vh] hero ">
          <div className=" w-full max-w-[500px] md:px-6 card rounded bg-[#F4F3F0]">
            <h3 className="text-[#403F3F] text-5xl font-rancho text-center pt-10">
              Register your account
            </h3>
            <hr className="w-5/6 mx-auto mt-10 border-b border-[#c9ac86]" />
            <form onSubmit={handleRegister} className="card-body">
              <div className=" form-control">
                <label className="label">
                  <span className="label-text">Your Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  className="p-3 rounded-sm focus:outline-slate-300"
                  required
                />
              </div>
              <div className=" form-control">
                <label className="label">
                  <span className="label-text">Photo URL/(Optional)</span>
                </label>
                <input
                  type="text"
                  placeholder="Photo URL"
                  name="photoURL"
                  className="p-3 rounded-sm focus:outline-slate-300"
                  // required
                />
              </div>
              <div className=" form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  className="p-3 rounded-sm focus:outline-slate-300"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    name="password"
                    className="w-full p-3 rounded-sm focus:outline-slate-300"
                    required
                  />
                  <span
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute top-4 right-3"
                  >
                    {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
                  </span>
                </div>

                <div className="flex gap-1 mt-3">
                  <input type="checkbox" name="terms" />
                  <label htmlFor="terms">
                    <span>
                      Accept{" "}
                      <a
                        href="#terms"
                        className="text-[#c9ac86] transition-all delay-100 hover:underline"
                      >
                        Terms & Conditions
                      </a>
                    </span>
                  </label>
                </div>
              </div>
              {success && <p className="text-sm text-gray-700">{success}</p>}
              {error && <p className="text-sm text-red-700">{error}</p>}
              <div className="mt-2 form-control">
                <button
                  // style={{ textShadow: "2px 2px 0 rgba(0.5,0,0,0.5) " }}
                  className="font-rancho text-xl md:text-2xl font-normal w-full btn border-2 mb-5  hover:bg-[#c9ac86] hover:border-2 hover:border-[#331A15]  border-[#331A15] bg-[#D2B48C]"
                >
                  Register
                </button>
              </div>
              {/* <p className="font-medium text-center">or</p> */}
              <div className="divider">continue with</div>
              <a onClick={handleGoogleSignIn} className="btn">
                <AiOutlineGoogle className="mx-auto text-4xl text-blue-600 " />
              </a>

              <p className="my-3 text-center">
                Already have an account?{" "}
                <Link to={"/login"} className="text-[#c9ac86] hover:underline">
                  Login
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
