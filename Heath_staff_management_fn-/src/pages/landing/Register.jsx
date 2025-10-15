import { useNavigate } from "react-router-dom";
import Input from "../../components/common/Input";
import Button from "../../components/common/Button";
import Container from "../../components/layout/Container";
import SEO from "../../components/common/seo";
import { z } from "zod"; // Import Zod
import { useForm } from "react-hook-form"; // Import useForm from React Hook Form
import { zodResolver } from "@hookform/resolvers/zod"; // Import zodResolver

// 1. Define your Zod schema (same as before)
const registerSchema = z
  .object({
    firstname: z.string().min(1, "First name is required."),
    lastname: z.string().min(1, "Last name is required."),
    email: z.string().min(1, "Email is required.").email("Email is invalid."),
    password: z.string().min(6, "Password must be at least 6 characters long."),
    confirmpassword: z.string().min(1, "Confirm password is required."),
    role: z.string().optional(), // Make role optional for now
  })
  .refine((data) => data.password === data.confirmpassword, {
    message: "Passwords do not match.",
    path: ["confirmpassword"], // This attaches the error to the confirmpassword field
  });

// Define the type for your form data from the Zod schema
// This is very helpful for TypeScript users
// type RegisterFormInputs = z.infer<typeof registerSchema>;

const Register = () => {
  const navigate = useNavigate();

  // 2. Initialize useForm with zodResolver
  const {
    register, // Function to register inputs
    handleSubmit, // Function to handle form submission
    formState: { errors, isSubmitting }, // Object containing form state, including errors and submission status
    // Optionally, you can also include:
    // watch, // Function to watch input values
    // setValue, // Function to programmatically set input values
    // reset // Function to reset the form
  } = useForm({
    resolver: zodResolver(registerSchema), // Connect Zod schema to RHF
    defaultValues: { // Set initial values for your form fields
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      confirmpassword: "",
      role: "",
    },
  });

  const handleGoHome = () => {
    navigate("/"); // Navigate to the home page
  };

  // 3. Define your onSubmit function. RHF will pass validated data to it.
  const onSubmit = (data) => {
    console.log("Registered User Data:", data);
    // Here you would typically send the data to a backend
    // The `isSubmitting` state can be used to disable the button during this process
    // For demonstration, we'll just navigate
    navigate("/login");
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

          {/* 4. Pass RHF's handleSubmit to the form */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Input
                label="First Name"
                type="text"
                id="firstname"
                placeholder="John"
                required
                // 5. Use RHF's register function to connect inputs
                {...register("firstname")}
                // 6. Pass errors from RHF's formState to your Input component
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

            <div className="flex justify-center gap-4 mt-6">
              <Button
                type="button"
                onClick={handleGoHome}
                className="bg-gray-500 hover:bg-gray-600 text-white px-8 py-2 rounded-full transition-all duration-300"
              >
                Back to Home
              </Button>
              <Button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-2 rounded-full transition-all duration-300"
                disabled={isSubmitting} // Disable button while submitting
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