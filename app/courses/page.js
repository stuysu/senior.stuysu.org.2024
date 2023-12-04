import { redirect } from 'next/navigation';

export default function Courses() {
  /*return (
    <div className="relative bg-primary">
      <p className="font-link absolute lg:text-[40px] text-[30px] font-bold lg:top-[90px] top-[40px] -translate-y-1/2 left-[50vw] -translate-x-1/2 text-text underline">
        Course Selection Guide
      </p>

      <div className="lg:pt-[200px] pt-[100px]">
      </div>
    </div>
  );*/

  redirect("https://docs.google.com/document/d/1ltKbFo0SDqg417J16mmhc8D6DiNpYxOr6op9mmxx0aA/edit?usp=sharing");
}