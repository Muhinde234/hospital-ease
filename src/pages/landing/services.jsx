import React from "react";
import Container from "../../components/layout/Container";
import service from "../../assets/images/service.jpeg";

import {
  ClipboardList,
  FileCheck,
  Users,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import FAQSection from "../../feature/FAQSection";
import SEO from "../../components/common/seo";

const Services = () => {
  return (
    <>
     <SEO title="Service page" description="Service page" content="Service page" />
    <div className="min-h-screen flex flex-col mt-18 mb-18">
   
      <section className="text-white py-20 bg-gradient-to-br from-[#00A2E8] to-[#5FB3B3]">
        <Container className="px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl font-bold mb-4">
            Our digital platform services
          </h1>
          <p className="text-[15px] text-white/90 max-w-2xl mx-auto">
            We provide innovative,
            reliable, and user-friendly solutions tailored to meet your unique
            needs.
          </p>
        </Container>
      </section>

      <main className="flex-1">
        <Container>
          <div className="text-center max-w-3xl mx-auto mt-16 mb-12">
            <h2 className="text-3xl font-semibold text-black mb-3">
              Empowering Healthcare through Technology
            </h2>
            <p className="text-gray-700 text-[15px] mt-10">
              Health Staff Manager offers a complete platform for healthcare
              staffing—from recruitment to task execution and admin management—
              ensuring better performance, transparency, and professional
              growth.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-12 mt-24">
            <div className="w-full lg:w-1/2">
              <img
                src={service}
                alt="Health services"
                className="rounded-xl h-[600px] object-cover w-full shadow-lg"
              />
            </div>

            <div className="bg-blue-50 w-full lg:w-1/2 p-8 rounded-xl shadow-lg">
              <h3 className="text-3xl font-bold text-gray-800 mb-6 border-b-2 border-blue-600 pb-2">
                What We Provide
              </h3>

              <ServiceItem
                icon={FileCheck}
                title="Online Recruitment System"
                text="Professionals can register, upload documents, track application status, and communicate directly with admins during the review process."
              />
              <ServiceItem
                icon={ClipboardList}
                title="Task Management Portal"
                text="Healthcare workers manage their assignments, upload proof of work, and see real-time status of pending, verified, or paid tasks."
              />
              <ServiceItem
                icon={Users}
                title="Workforce Profile Directory"
                text="Every worker gets a dynamic dashboard showing task stats, feedback, performance, and availability status."
              />
              <ServiceItem
                icon={ShieldCheck}
                title="Admin Control Center"
                text="Admins manage worker applications, assign tasks, verify completions, track financials, and generate system-wide reports with ease."
              />
            </div>
          </div>

          <div className="text-center mt-24 mb-20">
            <h4 className="text-2xl font-semibold mb-12">
              Ready to transform your healthcare staffing?
            </h4>
            <Link
              to="/register"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-lg px-6 py-3 rounded-full shadow-md transition-all"
            >
              Get Started <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
          <div>
            <FAQSection/>
          </div>
        </Container>
      </main>

    
    </div>
    </>
  );
};

const ServiceItem = ({ icon: Icon, title, text }) => (
  <div className="flex items-start gap-10 mb-10">
    <div className="bg-blue-200 p-3 rounded-full">
      <Icon className="text-blue-600 w-6 h-6" />
    </div>
    <div>
      <h4 className=" text-lg font-semibold text-gray-800 mb-2">{title}</h4>
      <p className="text-gray-600 text-[15px]">{text}</p>
    </div>
  </div>
 
);

export default Services;
