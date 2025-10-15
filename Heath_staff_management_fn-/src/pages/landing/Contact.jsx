import { Mail, MapPin, Phone } from "lucide-react";
import Container from "../../components/layout/Container";
import { Link } from "react-router";
import doc1 from "../../assets/images/doc1.webp";
import Input from "../../components/common/Input";
import SEO from "../../components/common/seo";


const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
     <SEO title="Contact page" description="Contact page" content="Contact page" />
      <div className="min-h-screen flex flex-col ">
        <main className="flex-1">
          <section className="pt-38 text-white py-16 bg-gradient-to-br from-[#00A2E8]/90 to-[#5FB3B3]">
            <Container className="px-4 sm:px-6 lg:px-8 text-center">
              <h1 className="text-3xl font-bold mb-4">Get in Touch</h1>
              <p className="text-[15px]  text-white/90 max-w-2xl mx-auto ">
                We're here to help you with any questions about our healthcare
                staffing platform
              </p>
            </Container>
          </section>

          <Container>
            <section className="mt-20 mb-18">
              <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-8 lg:gap-12 px-4 sm:px-6">
                <div className="flex flex-col w-full sm:w-[400px] justify-center items-center bg-white shadow-sm rounded-lg p-6">
                  <div className="bg-[#00A2E8]/10 h-16 w-16 rounded-lg flex justify-center items-center">
                    <Phone size={28} className="text-[#00A2E8]" />
                  </div>
                  <div className="flex flex-col justify-center items-center text-center">
                    <p className="text-lg mt-4 font-bold">Phone</p>
                    <p className="text-[15px]  text-gray-600 mt-2">
                      Reach out anytime for immediate case coordination and
                      support.
                    </p>
                    <Link
                      to="./"
                      className="text-[#00A2E8] mt-5 cursor-pointer"
                    >
                      +0780394888
                    </Link>
                  </div>
                </div>

                <div className="flex flex-col w-full sm:w-[400px] justify-center items-center bg-white shadow-sm rounded-lg p-6">
                  <div className="bg-[#00A2E8]/10 h-16 w-16 rounded-lg flex justify-center items-center">
                    <Mail size={28} className="text-[#00A2E8]" />
                  </div>
                  <div className="flex flex-col justify-center items-center text-center">
                    <p className="text-lg mt-4 font-bold">Email</p>
                    <p className="text-[15px]  mt-2 text-gray-600">
                      Reach out anytime for immediate case coordination and
                      support.
                    </p>
                    <Link
                      to="./"
                      className="text-[#00A2E8] mt-5 cursor-pointer"
                    >
                      contact@example.com
                    </Link>
                  </div>
                </div>

                <div className="flex flex-col w-full sm:w-[400px] justify-center items-center bg-white shadow-sm rounded-lg p-6">
                  <div className="bg-[#00A2E8]/10 h-16 w-16 rounded-lg flex justify-center items-center">
                    <MapPin size={28} className="text-[#00A2E8]" />
                  </div>
                  <div className="flex flex-col justify-center items-center text-center">
                    <p className="text-lg mt-4 font-bold">Location</p>
                    <p className="text-[15px]  text-gray-600 mt-2">
                      Reach out anytime for immediate case coordination and
                      support.
                    </p>
                    <Link
                      to="./"
                      className="text-[#00A2E8] mt-5 cursor-pointer"
                    >
                      123 Care St, City, Country
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          </Container>
          <Container className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <section className="mt-16 lg:mt-48 mb-16 flex flex-col lg:flex-row gap-8 lg:gap-12">
              <div className="w-full lg:w-1/2 flex justify-center">
                <img
                  src={doc1}
                  alt="doctor image"
                  className="w-full max-w-[500px] lg:max-w-none h-auto object-contain rounded-lg shadow-sm "
                />
              </div>

              <div className="w-full lg:w-1/2 bg-white rounded-lg shadow-sm p-6">
                <h1 className="text-3xl font-bold mb-8 text-center">
                  Get in Touch!
                </h1>

                <form onSubmit={handleSubmit}>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <div className="flex-1">
                      <Input label="Your name" placeholder="Dositha" required />
                    </div>
                    <div className="flex-1">
                      <Input
                        label="Your Email"
                        type="email"
                        placeholder="example@gmail.com"
                        required
                      />
                    </div>
                  </div>

                  <hr className="my-6 border-gray-300" />

                  <h2 className="text-lg font-semibold mb-4">Your subject</h2>

                  <Input
                    label="Subject"
                    placeholder="Subject title "
                    required
                  />

                  <Input
                    label="Message body"
                    placeholder="Message here"
                    required
                    isTextArea
                  />

                  <hr className="my-6 border-gray-300" />

                  <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-3 px-4 rounded-md hover:bg-blue-600 transition duration-500 cursor-pointer active:scale-95"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </section>
          </Container>
        </main>
      </div>
    </div>
  );
};

export default Contact;
