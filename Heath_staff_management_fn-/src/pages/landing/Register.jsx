import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Input from "../../components/common/Input";
import Button from "../../components/common/Button";
import Container from "../../components/layout/Container";
import SEO from "../../components/common/seo";

const Register = () => {
  const navigate = useNavigate();

  const [formdata, setFormdata] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmpassword: "",
    role: "", // Assuming 'role' will be handled later if needed, but keeping it for now
  });

  // New state to hold validation error messages
  const [validationErrors, setValidationErrors] = useState({});

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormdata((prev) => ({
      ...prev,
      [id]: value,
    }));
    // Clear the error for the field being changed
    setValidationErrors((prev) => ({
      ...prev,
      [id]: "",
    }));
  };

  const validateForm = () => {
    let errors = {};
    let isValid = true;

    // First Name validation
    if (!formdata.firstname.trim()) {
      errors.firstname = "First name is required.";
      isValid = false;
    }

    // Last Name validation
    if (!formdata.lastname.trim()) {
      errors.lastname = "Last name is required.";
      isValid = false;
    }

    // Email validation
    if (!formdata.email.trim()) {
      errors.email = "Email is required.";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formdata.email)) {
      errors.email = "Email is invalid.";
      isValid = false;
    }

    // Password validation
    if (!formdata.password) {
      errors.password = "Password is required.";
      isValid = false;
    } else if (formdata.password.length < 6) {
      errors.password = "Password must be at least 6 characters long.";
      isValid = false;
    }

    // Confirm Password validation
    if (!formdata.confirmpassword) {
      errors.confirmpassword = "Confirm password is required.";
      isValid = false;
    } else if (formdata.password !== formdata.confirmpassword) {
      errors.confirmpassword = "Passwords do not match.";
      isValid = false;
    }

    // Role validation (if applicable and you add a selection later)
    // if (!formdata.role) {
    //   errors.role = "Please select a role.";
    //   isValid = false;
    // }

    setValidationErrors(errors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log("Registered User:", formdata);
      // Here you would typically send the data to a backend
      navigate("/login");
    } else {
      console.log("Form has validation errors.");
    }
  };

  return (
    <>
      <SEO title="Register page" description="Register page" content="Register page" />
      <Container className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-100 to-white px-4">
        <div className="w-full max-w-xl bg-white shadow-sm rounded-2xl p-8 sm:p-10 md:p-12 space-y-6">
          <div className="text-center">
            <Link to="/" className="text-blue-500 hover:text-blue-600">
              <span className="ml-3 text-2xl sm:text-3xl font-bold">
                Create an Account
              </span>
            </Link>
            <p className="mt-2 text-gray-600 text-sm sm:text-base">
              Join us by filling the form below
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Input
                label="First Name"
                type="text"
                id="firstname"
                value={formdata.firstname}
                onChange={handleChange}
                placeholder="John"
                required
                error={validationErrors.firstname} // Pass error message to Input component
              />
              <Input
                label="Last Name"
                type="text"
                id="lastname"
                value={formdata.lastname}
                onChange={handleChange}
                placeholder="Doe"
                required
                error={validationErrors.lastname} // Pass error message to Input component
              />
            </div>

            <Input
              label="Email"
              type="email"
              id="email"
              value={formdata.email}
              onChange={handleChange}
              placeholder="example@mail.com"
              required
              error={validationErrors.email} // Pass error message to Input component
            />

            <Input
              label="Password"
              type="password"
              id="password"
              value={formdata.password}
              onChange={handleChange}
              placeholder="Create a password"
              required
              error={validationErrors.password} // Pass error message to Input component
            />

            <Input
              label="Confirm Password"
              type="password"
              id="confirmpassword"
              value={formdata.confirmpassword}
              onChange={handleChange}
              placeholder="Repeat your password"
              required
              error={validationErrors.confirmpassword} 
            />

           
            

            <div className="text-sm text-center text-gray-600">
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-blue-600 underline hover:text-blue-800"
              >
                Login
              </Link>
            </div>

            <div className="text-center">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-2 rounded-full transition-all duration-300">
                Register
              </Button>
            </div>
          </form>
        </div>
      </Container>
    </>
  );
};

export default Register;