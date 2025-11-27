import { useState } from "react";
import { ActivityIcon } from "lucide-react";
import Container from "../../components/layout/Container";
import Input from "../../components/common/Input";
import DepartmentSelection from "../../components/layout/DepartmentSelection";
import JobApplicationForm from "../../components/layout/JobApplicationForm ";
import Button from "../../components/common/Button";
import SEO from "../../components/common/seo";

const ApplyPage = () => {
  const [formdata, setFormdata] = useState({
    firstname: "",
    lastname: "",
    email: "",
    telephone: "",
    Zipcode: "",
    position: "",
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
  };

  return (
    <div>
      <SEO title="Apply page" description="Apply page" content="Apply page" />
      <div className="min-h-screen flex flex-col">
        <main className="flex-1">
          <section className="text-white py-12 md:py-20 bg-gradient-to-br from-[#00A2E8] to-[#5FB3B3] pt-32 md:pt-38">
            <Container className="px-4 sm:px-6 lg:px-8 text-center">
              <h1 className="text-3xl  font-bold mb-4">
                Would you like to put your skills to good use?
              </h1>
              <p className="text-[15px] text-white/90 max-w-2xl mx-auto">
                Do not hesitate to submit your application to us, our
                recruitment department will contact you for more details
              </p>
            </Container>
          </section>

          <section className="pb-12 md:pb-16">
            <Container>
              <div className="max-w-3xl mx-auto mt-12 md:mt-24 px-4 sm:px-6 text-center md:text-start">
                <p className="text-[15px] ">
                  Take a moment to fill out this quick form; It's designed to
                  help us understand exactly what you're looking for. One of our
                  recruiters will contact you immediately to discuss your career
                  aspirations in depth and offer you opportunities that are
                  perfectly aligned with your ambitions. We look forward to
                  supporting you in the next step of your career!
                </p>
              </div>

              <div className="max-w-3xl mx-auto mt-12 md:mt-24 px-4 sm:px-6 flex flex-col justify-center items-center">
                <ActivityIcon className="h-12 w-12 md:h-16 md:w-16 border-2 border-blue-500 rounded-full p-2 text-blue-500" />
                <h1 className="mt-6 md:mt-12 text-lg md:text-xl lg:text-2xl font-bold">
                  Application submission form
                </h1>
                <div className="max-w-xl text-center mt-2 md:mt-3">
                  <p className="text-[15px] ">
                    As soon as you have filled out this form, one of our
                    recruiters will contact you without delay!
                  </p>
                </div>
              </div>

              <div className="mt-8 md:mt-12 px-4 sm:px-6">
                <form onSubmit={handleSubmit} className="max-w-xl mx-auto">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8">
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

                  <div className="mt-4 md:mt-6">
                    <Input
                      label="Email"
                      type="text"
                      id="email"
                      value={formdata.email}
                      onChange={handleChange}
                      placeholder="example@mail.com"
                      required
                    />
                    <p className="text-xs  text-gray-700 mt-1 md:mt-2 mb-2 md:mb-3">
                      We'll use this to contact you about your application
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8 mt-4 md:mt-6">
                    <Input
                      label="Telephone"
                      type="number"
                      id="telephone"
                      value={formdata.telephone}
                      onChange={handleChange}
                      placeholder="Enter your number"
                      required
                    />
                    <Input
                      label="Zip code"
                      type="text"
                      id="ZipCode"
                      value={formdata.Zipcode}
                      onChange={handleChange}
                      placeholder="Enter your postal code"
                      required
                    />
                  </div>

                  <div className="mt-4 md:mt-6">
                    <select
                      id="position"
                      value={formdata.position}
                      onChange={handleChange}
                      className="w-full border border-gray-300 rounded-md p-2 text-[15px] focus:outline-none focus:ring-2 focus:ring-blue-300"
                      required
                    >
                      <option value="">-- Choose your position --</option>
                      <option value="worker">Clinical Nurse</option>
                      <option value="admin">Licensed Practical Nurse</option>
                      <option value="admin">Beneficiary Attendant</option>
                      <option value="admin">
                        Health and Social Services Assistant
                      </option>
                      <option value="admin">Physiotherapist</option>
                      <option value="admin">Respiratory Therapist</option>
                      <option value="admin">Occupational Therapist</option>
                      <option value="admin">Institutional Supervisor</option>
                      <option value="admin">Cleaning Attendant</option>
                    </select>
                  </div>

                  <div className="mt-4 md:mt-6">
                    <DepartmentSelection />
                  </div>

                  <div className="mt-4 md:mt-6">
                    <JobApplicationForm />
                  </div>

                  <div className="text-center mt-6 md:mt-8">
                    <Button className="px-4 py-2 md:px-5 md:py-3 bg-blue-500 rounded-lg text-white text-sm md:text-base">
                      Send Application
                    </Button>
                  </div>
                </form>
              </div>
            </Container>
          </section>
        </main>
      </div>
    </div>
  );
};

export default ApplyPage;
