import React, { useState } from "react";

const JobApplicationForm = () => {
  const [selectedPosition, setSelectedPosition] = useState("");
  const [selectedSchedules, setSelectedSchedules] = useState([]);
  const [message, setMessage] = useState("");
  const [resume, setResume] = useState(null);

  const handleScheduleChange = (schedule) => {
    if (selectedSchedules.includes(schedule)) {
      setSelectedSchedules(selectedSchedules.filter((s) => s !== schedule));
    } else {
      setSelectedSchedules([...selectedSchedules, schedule]);
    }
  };

  const handleFileChange = (e) => {
    setResume(e.target.files[0]);
  };

  return (
    <div 



    
    className="max-w-5xl mx-auto p-6 ">
      <div className="mb-6">
        <h2 className="text-lg font-semibold  mb-3">
          Type of position sought? <span className="text-red-500"> *</span>
        </h2>
        <div className="flex flex-col lg:flex-row gap-12 text-[15px]">
          {["Full-time", "Part-time", "One-time shifts"].map((position) => (
            <div key={position} className="flex items-center">
              <input
                type="checkbox"
                id={`position-${position}`}
                name="position"
                value={position}
                checked={selectedPosition === position}
                onChange={() => setSelectedPosition(position)}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                required
              />
              <label htmlFor={`position-${position}`} className="ml-2 ">
                {position}
              </label>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-3">
          Type of schedule you are looking for?{" "}
          <span className="text-red-500"> *</span>
        </h2>
        <div className="space-y-2 text-[15px]">
          {["Day", "Evening", "Night", "Weekends", "Every other weekend"].map(
            (schedule) => (
              <div key={schedule} className="flex items-center">
                <input
                  type="checkbox"
                  id={`schedule-${schedule}`}
                  checked={selectedSchedules.includes(schedule)}
                  onChange={() => handleScheduleChange(schedule)}
                  className="h-4 w-4 text-blue-600 rounded focus:ring-blue-500"
                />
                <label htmlFor={`schedule-${schedule}`} className="ml-2">
                  {schedule}
                </label>
              </div>
            )
          )}
        </div>
      </div>

      <div className="mb-6">
        <label
          htmlFor="message"
          className="block text-lg font-semibold text-gray-800 mb-2"
        >
          Message (optional)
        </label>
        <p className="text-sm text-gray-500 mb-2">
          Share any relevant information with us.
        </p>
        <textarea
          id="message"
          rows="4"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>

      <div className="mb-6">
        <label className="block text-lg font-semibold  mb-1">
          Attach your resume <span className="text-red-500"> *</span>
        </label>
        <p className="text-sm text-gray-500 mb-3">
          Please attach your CV in .pdf format (preferred) or .doc
        </p>
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:bg-gray-50 transition-colors">
          <input
            type="file"
            id="resume"
            accept=".pdf,.doc,.docx"
            onChange={handleFileChange}
            className="hidden"
            required
          />
          <label htmlFor="resume" className="cursor-pointer block">
            <p className="text-gray-600">
              <span className="text-blue-600">Choose file </span> or drop here
            </p>
            {resume && (
              <p className="mt-2 text-sm text-blue-600">{resume.name}</p>
            )}
          </label>
        </div>
      </div>
    </div>
  );
};

export default JobApplicationForm;
