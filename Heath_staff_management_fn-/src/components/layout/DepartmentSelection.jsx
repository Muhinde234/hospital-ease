import React from "react";

const DepartmentSelection = () => {
  const departments = [
    "Patient support",
    "CLSC (Routine Care)",
    "CHSLD",
    "Cardiology",
    "Dispensary",
    "Hemodyalis",
    "Neurology",
    "Oncology",
    "Rehabilitation",
    "Acute Care",
    "Palliative care",
    "Emergency room",
    "Operating theatre",
    "CLSC (Home Care)",
    "Surgery",
    "Prison",
    "Gynaecology and Obstetrics",
    "Medicine",
    "Nephrology",
    "Paediatrics",
    "Recovery room",
    "Intensive care",
    "Psychiatry / Mental Health",
    "Vaccination",
  ];

  return (
    <div className="max-w-4xl mx-auto p-6  mt-12 ">
      <h2 className=" text-start text-lg font-semibold  mb-8">
        Which department(s) are you interested in?<span className="text-red-500"> *</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-[15px]">
        {departments.map((department, index) => (
          <div key={index} className="flex items-center">
            <input
              type="checkbox"
              id={`dept-${index}`}
              name="departments"
              className="h-4 w-4 text-blue-600 rounded focus:ring-blue-500"
            />
            <label htmlFor={`dept-${index}`} className="ml-2  text-[15px]">
              {department}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DepartmentSelection;
