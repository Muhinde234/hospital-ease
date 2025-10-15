import Container from "../components/layout/Container";
import SectionTitle from "./SectionTitle";
import { sections, testimonials } from "./data/SectionData";
import { useEffect, useState } from "react";
import Button from "../components/common/Button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Testimonial = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const goToTestimonial = (index) => {
    setCurrentTestimonial(index);
  };

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <Container>
      <SectionTitle
        title={sections[2].title}
        description={sections[2].description}
      />
      <div className="relative max-w-4xl mx-auto px-4 mt-12">
        <div className="shadow-sm  border border-blue-200 rounded-2xl py-10 px-6 md:px-12 ">
          <div className="flex flex-col items-center">
            <div className="h-20 w-20 rounded-full overflow-hidden mb-4 border-4 border-[#00A2E8]/20">
              <img
                src={testimonials[currentTestimonial].image}
                alt={testimonials[currentTestimonial].name}
                className="h-full w-full object-cover"
              />
            </div>
            <p className="text-gray-700   text-center mb-6 italic">
              "{testimonials[currentTestimonial].quote}"
            </p>
            <div className="text-center">
              <h4 className="font-semibold text-gray-900">
                {testimonials[currentTestimonial].name}
              </h4>
              <p className="text-gray-500 text-sm">
                {testimonials[currentTestimonial].role}
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToTestimonial(index)}
              className={
                ("h-3 w-3 rounded-full",
                index === currentTestimonial
                  ? "bg-[#00A2E8]"
                  : "bg-gray-300 hover:bg-gray-400")
              }
            />
          ))}
        </div>

        <div className="absolute top-1/2 left-0 transform -translate-y-1/2">
          <Button
            onClick={prevTestimonial}
            className="rounded-full bg-white shadow-md border border-blue-200  hover:bg-blue-200 cursor-pointer"
          >
            <ChevronLeft size={32} />
          </Button>
        </div>

        <div className="absolute top-1/2 right-0 transform -translate-y-1/2">
          <Button
            onClick={nextTestimonial}
            className="rounded-full bg-white shadow-md border border-blue-200 hover:bg-blue-200 cursor-pointer"
          >
            <ChevronRight size={32} />
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default Testimonial;
