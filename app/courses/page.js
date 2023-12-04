import sections from "@/data/courses.json";
import CourseSection from "./CourseSection.js";

export default function Courses() {
  return (
    <div className="relative bg-primary">
      <p className="font-link absolute lg:text-[40px] text-[30px] w-max font-bold lg:top-[90px] top-[40px] -translate-y-1/2 left-[50vw] -translate-x-1/2 text-text underline">
        Course Selection Guide
      </p>

      <div className="lg:pt-[200px] pt-[100px]">
        {sections.map(({ section, classes }, i) => (
          <CourseSection section={section} classes={classes} key={i} />
        ))}
      </div>
    </div>
  );
}
