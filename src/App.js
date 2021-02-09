import "./App.css";
import { Formik } from "formik";
import * as Yup from "yup";
import CustomInput from "./components/CustomInput/CustomInput";
import PasswordInput from "./components/PasswordInput/PasswordInput";

function App() {
  const initialValues = {
    name: "",
    email: "",
    password: "",
    confirm_password: ""
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Required"),
    email: Yup.string()
      .required("Required")
      .email("Invalid email"),
    password: Yup.string()
      .required("Required")
      .matches(/[A-Z]/, "Must have at least one capital letter")
      .min(8, "Password Too short"),
    confirm_password: Yup.string()
      .required("Required")
      .oneOf([Yup.ref("password")], "Passwords donot match")
  });

  const handleSubmit = values => {
    console.log(values);
  };

  return (
    <div className="App bg-primary h-screen flex justify-center items-center">
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting
          /* and other goodies */
        }) => (
          <form
            onSubmit={handleSubmit}
            className="bg-white p-8"
            style={{ width: "520px" }}
          >
            <h1 className="text-4xl font-bold text-primary text-left">
              Signup
            </h1>
            <div className="mt-8">
              <CustomInput
                name="name"
                id="name"
                label="Name"
                placeholder="Enter your full name"
              />
            </div>
            <div className="mt-8">
              <CustomInput
                name="email"
                id="email"
                label="Email"
                placeholder="Enter your email"
              />
            </div>
            <div className="mt-8">
              <PasswordInput
                name="password"
                id="password"
                label="Password"
                placeholder="Enter your password"
              />
            </div>
            <div className="mt-8">
              <PasswordInput
                name="confirm_password"
                id="confirm_password"
                label="Confirm Password"
                placeholder="Confirm Password"
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-primary p-4 text-white mt-4"
            >
              Submit
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
}

export default App;
