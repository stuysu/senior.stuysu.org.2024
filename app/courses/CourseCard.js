export default function CourseCard({
  comments,
  description,
  name,
  periods,
  prereqs,
  teacher,
}) {
  return (
    <div className="relative rounded-lg lg:w-[60vw] w-[90vw] bg-primary lg:mb-0 mb-[25px] text-text mx-2 px-[10px] text-[20px]">
      <p className="text-[30px] top-[5px] font-bold absolute left-1/2 -translate-x-1/2 w-max">
        {name}
      </p>
      <p className="font-light pt-[50px]">{description}</p>

      <p className="pt-[20px]">Teacher: {teacher}</p>
      <p>Prereqs: {prereqs}</p>
      <p>Periods: {periods}</p>

      {comments.length > 0 && (
        <>
          <p className="pt-[20px]">Student Comments:</p>
          <ul className="ml-[20px] pb-[10px] list-disc">
            {comments.map((comment, i) => (
              <li className="font-light" key={i}>
                {comment}
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}
