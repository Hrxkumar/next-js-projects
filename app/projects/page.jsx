import React from "react";
import CourseList from "./components/CourseList";

// porjects

export const metadata = {
  title: "CourseZone Project",
  description: "Generated by create next app",
};


const page = () => {
  return (
    <div>
     <CourseList />
    </div>
  );
};

export default page;