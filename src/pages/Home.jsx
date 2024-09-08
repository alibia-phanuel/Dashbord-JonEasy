import { useFormik } from "formik";
import { LoginValidation } from "../components/FormValidation/LogInValidation";
import { useNavigate } from "react-router-dom";
const initialValues = {
  username: "",
  password: "",
};
function Home() {
  const { values, handleBlur, handleChange, handleSubmit, errors } = useFormik({
    initialValues: initialValues,
    validationSchema: LoginValidation,
    onSubmit: (values) => {
      console.log(values);
      navigate("/ManageSystemRules");
    },
  });
  const navigate = useNavigate();

  return (
    <div className="container-fluid">
      <div className="h-screen md:overflow-hidden">
        <div className="flex ">
          <div className=" relative z-50 bg-white w-full flex justify-center items-center">
            <div className="w-full xl:p-12 p-10 container  flex justify-center items-center">
              <div className="flex h-[90vh] flex-col  w-[800px]">
                <div className="mx-auto">
                  <a href="index.html" className="">
                    <img
                      src="assets/images/logo-sm.svg"
                      alt=""
                      className="h-8 inline"
                    />{" "}
                    <span className="text-xl align-middle font-medium ltr:ml-2 rtl:mr-2 dark:text-white">
                      <strong className="text-[#5156BE]">Jon Easy</strong>
                    </span>
                  </a>
                </div>

                <div className="my-auto">
                  <div className="text-center">
                    <h5 className="text-gray-600 ">Bienvenue !</h5>
                    <p className="text-gray-500  mt-1">
                      Se connecter pour continuer à{" "}
                      <strong className="text-[#5156BE]">Jon Easy</strong>
                    </p>
                  </div>

                  <form
                    className="mt-4 pt-2"
                    action="index.html"
                    onSubmit={handleSubmit}
                  >
                    <div className="mb-4">
                      <label className="text-gray-600  font-medium mb-2 block">
                        Username
                      </label>
                      <input
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.username}
                        name="username"
                        type="text"
                        className="w-full pl-3 rounded outline-none placeholder:text-sm py-2 border-[#E6E6EB] border-[1px] dark:bg-white dark:border-zinc-600  dark:text-gray-500 "
                        id="username"
                        placeholder="Enter username"
                      />
                      {errors.username && (
                        <small
                          className="text-red-700 py-3 font-bold"
                          role="alert"
                        >
                          {errors.username}
                        </small>
                      )}
                    </div>
                    <div className="mb-3">
                      <div className="flex justify-between">
                        <div className="flex-grow-1">
                          <label className="text-gray-600  font-medium mb-2 block">
                            Password
                          </label>
                        </div>
                        <div className="ltr:ml-auto rtl:mr-auto">
                          <a href="#" className="text-gray-500 ">
                            Forgot password?
                          </a>
                        </div>
                      </div>

                      <div className="flex">
                        <input
                          onBlur={handleBlur}
                          onChange={handleChange}
                          value={values.password}
                          type="password"
                          name="password"
                          className="w-full outline-none pl-3 rounded ltr:rounded-r-none rtl:rounded-l-none placeholder:text-sm py-2 border-gray-100  dark:border-zinc-600 dark:text-gray-500 border-[1px]"
                          placeholder="Enter password"
                          aria-label="Password"
                          aria-describedby="password-addon"
                        />
                      </div>
                      {errors.password && (
                        <small
                          className="text-red-700 py-3 font-bold"
                          role="alert"
                        >
                          {errors.password}
                        </small>
                      )}
                    </div>
                    <div className="row mb-6">
                      <div className="col">
                        <div
                          className="flex
                          items-center gap-2"
                        >
                          <input
                            type="checkbox"
                            className="h-4 w-4 border border-gray-300 rounded bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain ltr:float-left rtl:float-right ltr:mr-2 rtl:ml-2 cursor-pointer focus:ring-offset-0"
                            id="exampleCheck1"
                          />
                          <label className="align-middle text-gray-600  font-medium">
                            Remember me
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="mb-3">
                      <button
                        className="btn border-transparent bg-violet-500 w-full py-2.5 text-white bg-blue-600 rounded-lg w-100 waves-effect waves-light shadow-md shadow-violet-200 dark:shadow-zinc-600"
                        type="submit"
                      >
                        Log In
                      </button>
                    </div>
                  </form>
                </div>

                <div className=" text-center">
                  <p className="text-gray-500  relative mb-5">
                    © <script>document.write(new Date().getFullYear())</script>{" "}
                    Minia . Crafted with{" "}
                    <i className="mdi mdi-heart text-red-400"></i> by
                    Themesbrand
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
