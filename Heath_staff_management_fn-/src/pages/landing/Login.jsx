import Container from "../../components/layout/Container";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/common/Button";
import Input from "../../components/common/Input";
import SEO from "../../components/common/seo";
import { z } from "zod"; 
import { useForm } from "react-hook-form"; 
import { zodResolver } from "@hookform/resolvers/zod"; 


const loginSchema = z.object({
  email: z.string().min(1, "Email is required.").email("Email is invalid."),
  password: z.string().min(1, "Password is required."),
  
  role: z.string().optional(),
});

;

const Login = () => {
  const navigate = useNavigate();

 
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    
  } = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
      role: "", 
    },
  });

  const handleGoHome = () => {
    navigate("/"); 
  };

  
  const onSubmit = (data) => {
    console.log("Login User Data:", data);


    const userRole = data.role || "default"; 

    switch (userRole) {
      case "worker":
        navigate("/worker-dashboard");
        break;
    
      case "admin":
        navigate("/admin-dashboard");
        break;
      default:
     
        alert("Login successful, but role not specified. Navigating to default dashboard.");
        navigate("/dashboard"); 
        break;
    }
  };

  return (
    <>
      <SEO title="Login page" description="Login page" content="Login page" />

      <Container className="min-h-screen bg-gradient-to-br from-blue-100 to-white p-4 flex flex-col items-center justify-center">
       <Link to="/" className="w-full max-w-xl flex justify-start mb-4 sm:mb-6">
          <Button
            type="button"
            onClick={handleGoHome}
            className="flex items-center space-x-2 text-gray-700 hover:text-gray-900   transition-colors duration-200"
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
                Welcome Back!
              </span>
            </Link>
            <p className="mt-2 text-gray-600 text-sm sm:text-base">
              Please login to your account
            </p>
          </div>

      
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <Input
              label="Email"
              type="email"
              id="email"
              placeholder="example@email.com"
              required
             
              {...register("email")}
            
              error={errors.email?.message}
            />

            <Input
              label="Password"
              type="password"
              id="password"
              placeholder="Enter your password"
              required
              {...register("password")}
              error={errors.password?.message}
            />

           

            <div className="flex flex-col sm:flex-row justify-between items-center gap-2 text-sm">
              <Link to="/forgot-password" className="hover:underline text-blue-600">
                Forgot password?
              </Link>
              <span>
                Need an account?{" "}
                <Link to="/register" className="underline text-blue-600">
                  Register
                </Link>
              </span>
            </div>

            <div className="text-center mt-6">
              <Button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-2 rounded-full transition-all duration-300 w-full sm:w-auto"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Logging In..." : "Login"}
              </Button>
            </div>
          </form>
        </div>
      </Container>
    </>
  );
};

export default Login;