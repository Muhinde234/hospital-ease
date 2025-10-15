import { useNavigate, Link } from "react-router-dom";
import Input from "../../components/common/Input";
import Button from "../../components/common/Button";
import Container from "../../components/layout/Container";
import SEO from "../../components/common/seo";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const registerSchema = z
  .object({
    firstname: z.string().min(1, "First name is required."),
    lastname: z.string().min(1, "Last name is required."),
    email: z.string().min(1, "Email is required.").email("Email is invalid."),
    password: z.string().min(6, "Password must be at least 6 characters long."),
    confirmpassword: z.string().min(1, "Confirm password is required."),
    role: z.string().optional(),
  })
  .refine((data) => data.password === data.confirmpassword, {
    message: "Passwords do not match.",
    path: ["confirmpassword"],
  });

const Register = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      confirmpassword: "",
      role: "",
    },
  });

  const handleGoHome = () => {
    navigate("/");
  };

  const onSubmit = (data) => {
    console.log("Registered User Data:", data);
  
    navigate("/login");
  };

  return (
    <>
      <SEO title="Register page" description="Register page" content="Register page" />
      <Container className="min-h-screen bg-gradient-to-br from-blue-100 to-white p-4 flex flex-col items-center justify-center">
      
        <Link to="/" className="w-full max-w-xl flex justify-start mb-4 sm:mb-6">
          <Button
            type="button"
            onClick={handleGoHome}
            className="flex items-center space-x-2 text-gray-700 hover:text-gray-900 transition-colors duration-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            <span>Back to Home</span>
          </Button>
        </Link>

        <div className="w-full max-w-xl bg-white shadow-lg rounded-2xl p-8 sm:p-10 md:p-12 space-y-6">
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

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Input
                label="First Name"
                type="text"
                id="firstname"
                placeholder="John"
                required
                {...register("firstname")}
                error={errors.firstname?.message}
              />
              <Input
                label="Last Name"
                type="text"
                id="lastname"
                placeholder="Doe"
                required
                {...register("lastname")}
                error={errors.lastname?.message}
              />
            </div>

            <Input
              label="Email"
              type="email"
              id="email"
              placeholder="example@mail.com"
              required
              {...register("email")}
              error={errors.email?.message}
            />

            <Input
              label="Password"
              type="password"
              id="password"
              placeholder="Create a password"
              required
              {...register("password")}
              error={errors.password?.message}
            />

            <Input
              label="Confirm Password"
              type="password"
              id="confirmpassword"
              placeholder="Repeat your password"
              required
              {...register("confirmpassword")}
              error={errors.confirmpassword?.message}
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

            <div className="text-center mt-6"> 
              <Button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-2 rounded-full transition-all duration-300 w-full sm:w-auto"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Registering..." : "Register"}
              </Button>
            </div>
          </form>
        </div>
      </Container>
    </>
  );
};

export default Register;