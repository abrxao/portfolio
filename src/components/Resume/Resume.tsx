import React from "react";

function correctAge(birth: Date){
    const today = new Date();
    const years = today.getFullYear() - birth.getFullYear();
    if (today.getMonth() < birth.getMonth()){
      return (years - 1)
    }else if (today.getMonth() === birth.getMonth()) {
      return today.getDate() < birth.getDate()?years - 1: years;
    }
}

const Resume = () => {
  const age = correctAge(new Date(1999, 8, 26));
    return (
      <div className="w-full ">
        <div
          className="mt-8 text-white text-justify font-aero
          lg:px-4
          "
        >
          {" "}
          <div
            className=" mt-8 mb-4 text-white text-2xl
            lg:text-3xl
            "
          >
            Resume
          </div>
          <p className="lg:text-lg font-light">
            I am {age} years old and enjoy problem-solving. Programming is a
            great way to utilize this skill. Over the past year, I have been
            studying several programming languages intensively, starting with an
            introduction to programming using C++ in college. Now, I am delving
            into web development tools. I am always eager to learn new things.
            During this period, I have completed more than 20 front-end
            projects, ranging from microservices to complete design systems,
            using many development tools and project organization techniques.
          </p>
        </div>
      </div>
    );
};

export default Resume;
