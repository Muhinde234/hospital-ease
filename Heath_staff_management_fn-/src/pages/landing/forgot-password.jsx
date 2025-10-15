import Container from "../../components/layout/Container";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/common/Button";
import Input from "../../components/common/Input";
import SEO from "../../components/common/seo";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react"; 

const forgotPasswordSchema = z.object({
  email: z.string().min(1, "Email is required.").email("Email is invalid."),
});



const ForgotPassword = () => {
  const navigate = useNavigate();
  const [successMessage, setSuccessMessage] = useState(""); 


  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset, 
  } = useForm({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: "",
    },
  });

  const handleGoHome = () => {
    navigate("/");
  };

  
  const onSubmit = async (data) => {
    console.log("Forgot Password Request for:", data.email);
    setSuccessMessage(""); 

   
    try {
    

      await new Promise((resolve) => setTimeout(resolve, 2000)); 

      setSuccessMessage(
        "If an account with that email exists, a password reset link has been sent."
      );
      reset(); 
    } catch (error) {
      console.error("Forgot password error:", error);
    
      setSuccessMessage(`Error: ${error.message || 'Something went wrong. Please try again.'}`);
    }
  };

  return (
    <>
      <SEO title="Forgot Password" description="Forgot Password Page" content="Forgot Password" />

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
            <h1 className="text-2xl sm:text-3xl font-bold text-blue-500 hover:text-blue-600">
              Forgot Password?
            </h1>
            <p className="mt-2 text-gray-600 text-sm sm:text-base">
              Enter your email address to reset your password.
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

            {/* Success/Error message display */}
            {successMessage && (
              <p className="text-sm text-center text-green-600 font-medium">
                {successMessage}
              </p>
            )}

            <div className="text-center mt-6">
              <Button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-2 rounded-full transition-all duration-300 w-full sm:w-auto"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Reset Link"}
              </Button>
            </div>
          </form>

          <div className="text-center text-sm text-gray-600">
            Remember your password?{" "}
            <Link
              to="/login"
              className="text-blue-600 underline hover:text-blue-800"
            >
              Login here
            </Link>
          </div>
        </div>
      </Container>
    </>
  );
};

export default ForgotPassword;