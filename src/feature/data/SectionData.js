import { Building, Calendar,  User } from "lucide-react";
import {
 
  Heart,
  Settings,
  Shield,
  Lock,
  Home,
  Users,
  CheckSquare,
  BarChart2,
  Bell
} from "lucide-react";



const sections=[
  {
      title:"Our Services",
      description:"Comprehensive healthcare staffing solutions designed to meet the needs of both healthcare professionals and facilities"

  },
  {
      title:"How It Works",
      description:"Our streamlined process makes it easy to find the perfect healthcare opportunities."
  },
  {
      title:"What Our Users Say",
      description:"Hear from healthcare professionals and facilities who have benefited from our platform."
  }
]

const testimonials = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      role: "Medical Doctor",
      image: "https://randomuser.me/api/portraits/women/32.jpg",
      quote: "Health Staff Manager revolutionized our staffing process. We can now quickly find qualified healthcare professionals who match our requirements.",
    },
    {
      id: 2,
      name: "Mark Wilson",
      role: "Registered Nurse",
      image: "https://randomuser.me/api/portraits/men/42.jpg",
      quote: "As a traveling nurse, this platform has given me the flexibility to choose assignments that fit my schedule and professional goals.",
    },
    {
      id: 3,
      name: "Emily Chen",
      role: "Hospital Administrator",
      image: "https://randomuser.me/api/portraits/women/58.jpg",
      quote: "The analytics dashboard provides valuable insights that help us make data-driven decisions for our healthcare staffing needs.",
    },
  ];

  const services=[

    {
      Icon:User,
      title:"Healthcare Staffing",
      description:"Connect with top healthcare facilities seeking professionals with your qualifications and experience."
    },
    {
      Icon:Building,
      title:"Credential Verification",
      description:" Streamlined credential verification process ensuring compliance with healthcare regulations."

    },
    {
      Icon:Calendar,
      title:"Scheduling Solutions",
      description:"Flexible scheduling options to accommodate the dynamic needs of healthcare professionals."
    }
  ]

  const workData=[
    {
      title:"Create an Account",
      description:"Register as a healthcare professional and complete your profile with your qualifications and preferences."
  
    },
    {
      title:"Verification Process",
      description:"Upload your credentials and complete the verification process to become eligible for placement."
    },
    {
      title:"Get Matched",
      description:"Get matched with healthcare facilities based on your skills, preferences, and availability."

    }
  ];
  const faqs = [
    {
      question: "What services do you offer?",
      answer: "We offer a range of customized solutions designed to meet your specific needs, including [brief service list]."
    },
    {
      question: "How can I get started?",
      answer: "Getting started is easy! Simply [describe how—fill a form, contact support, sign up, etc.]."
    },
    {
      question: "Is there a free trial or demo available?",
      answer: "Yes, we offer a [duration] free trial/demo so you can explore our service before committing."
    },
    {
      question: "What makes your service different from others?",
      answer: "Our service stands out due to its [key advantage—e.g., affordability, innovation, customer support, etc.]."
    },
    {
      question: "How do I contact customer support?",
      answer: "You can reach us via email at [email], phone at [number], or live chat on our website."
    },
    {
      question: "Do you offer customization or tailored solutions?",
      answer: "Yes! We work closely with clients to provide solutions that are fully tailored to their needs."
    },
    {
      question: "Is my data secure with your service?",
      answer: "Absolutely. We prioritize security and use industry-standard encryption to protect your data."
    }
  ];
  const values = [
    {
      title: "Integrity",
      description: "Transparent hiring processes, task assignments, and performance reviews across the system.",
      icon: Shield,
      iconColor: "text-blue-600",
      bgColor: "bg-blue-100",
    },
    {
      title: "Efficiency",
      description: "Automated staffing workflows—from application to task completion and admin reporting.",
      icon: Settings,
      iconColor: "text-green-600",
      bgColor: "bg-green-100",
    },
    {
      title: "Security & Privacy",
      description: "Encrypted data handling and role-based access to protect sensitive healthcare credentials.",
      icon: Lock,
      iconColor: "text-purple-600",
      bgColor: "bg-purple-100",
    },
    {
      title: "Empathy",
      description: "Designed to reduce admin burden and support healthcare professionals with ease-of-use.",
      icon: Heart,
      iconColor: "text-pink-600",
      bgColor: "bg-pink-100",
    },
  ];
  
  const menuItems = [
    { icon: Home, label: "Dashboard", href: "/admin" },
    { icon: Users, label: "User Management", href: "/admin/users" },
    { icon: CheckSquare, label: "Task Management", href: "/admin/tasks" },
    { icon: BarChart2, label: "Reports", href: "/admin/reports" },
    { icon: Bell, label: "Notifications", href: "/admin/notifications" },
    { icon: Settings, label: "Settings", href: "/admin/settings" },
  ];


export  {sections, testimonials,services,workData,faqs,values,menuItems}