import Container from "../../components/layout/Container";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Button from "../../components/common/Button";
import Input from "../../components/common/Input";
import SEO from "../../components/common/seo";

const Login = () => {
  const navigate = useNavigate();

  const [formdata, setFormdata] = useState({
    email: "",
    password: "",
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

    switch (formdata.role) {
      case "worker":
        navigate("/worker-dashboard");
        break;
      case "applicant":
        navigate("/applicant-dashboard");
        break;
      case "admin":
        navigate("/admin-dashboard");
        break;
      default:
        alert("Please select a role.");
        break;
    }
  };

  return (
    <div>
    <SEO title="Login page" description="Login page" content="Login page" />

    <Container className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-100 to-white px-4 ">
      <div className="w-full max-w-xl bg-white shadow-sm rounded-2xl p-8 sm:p-10 md:p-12 mt-24 space-y-6">
        <div className="text-center">
          <Link to="/" className=" text-blue-500 hover:text-blue-600">
            <span className="ml-3 text-2xl sm:text-3xl font-bold">
              Welcome Back!
            </span>
          </Link>
          <p className="mt-2 text-gray-600 text-sm sm:text-base">
            Please login to your account
          </p>
        </div>
        

        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            label="Email"
            type="email"
            id="email"
            value={formdata.email}
            placeholder="example@email.com"
            onChange={handleChange}
            required
          />

          <Input
            label="Password"
            type="password"
            id="password"
            value={formdata.password}
            placeholder="Enter your password"
            onChange={handleChange}
            required
          />

          <div className="flex flex-col sm:flex-row justify-between items-center gap-2 text-sm ">
            <Link to="/" className="hover:underline text-blue-600">
              Forgot password?
            </Link>
            <span>
              Need an account?{" "}
              <Link to="/register" className="underline text-blue-600">
                Register
              </Link>
            </span>
          </div>

          <div className="text-center">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-2 rounded-full transition-all duration-300">
              Login
            </Button>
          </div>
        </form>
      </div>
    </Container>
       
      </div>

 
  );
};

export default Login;
