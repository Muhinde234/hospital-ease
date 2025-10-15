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
    role: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormdata((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formdata.password !== formdata.confirmpassword) {
      alert("Passwords do not match!");
      return;
    }

    if (!formdata.role) {
      alert("Please select a role.");
      return;
    }

    console.log("Registered User:", formdata);

    navigate("/login");
  };

  return (
    <>
      <SEO title="Register page" description="Register page" content="Register page" />
      <Container className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-100 to-white px-4">
        <div className="w-full max-w-xl bg-white shadow-sm rounded-2xl p-8 sm:p-10 md:p-12 space-y-6">
          <div className="text-center  ">
            <Link to="/" className=" text-blue-500 hover:text-blue-600">
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
              />
              <Input
                label="Last Name"
                type="text"
                id="lastname"
                value={formdata.lastname}
                onChange={handleChange}
                placeholder="Doe"
                required
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
            />

            <Input
              label="Password"
              type="password"
              id="password"
              value={formdata.password}
              onChange={handleChange}
              placeholder="Create a password"
              required
            />

            <Input
              label="Confirm Password"
              type="password"
              id="confirmpassword"
              value={formdata.confirmpassword}
              onChange={handleChange}
              placeholder="Repeat your password"
              required
            />

            <div>
              <label
                htmlFor="role"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Select Role
              </label>
              <select
                id="role"
                value={formdata.role}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
                required
              >
                <option value="">-- Choose Role --</option>
                <option value="worker">Worker</option>
                <option value="admin">Admin</option>
              </select>
            </div>

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
