import announcements from "@/data/announcements.json";

export default function Announcements() {
  return (
    <div>
      {announcements.map(({ date, title, text }, i) => (
        <div
          className="bg-[rgb(253,244,242)] my-[15px] p-[15px] border-black border-[1px] rounded-sm flex relative"
          key={i}
        >
          {/*desktop*/}
          <p className="sm:block hidden text-[#45379D] underline text-[20px] absolute left-1/2 -translate-x-1/2 top-4">
            {title}
          </p>
          {/*mobile*/}
          <p className="sm:hidden block text-[#45379D] underline text-[20px] absolute left-4 top-6">
            {title}
          </p>

          <p className="text-stone-400 absolute top-2 right-2">{date}</p>

          <ul className="mt-10">
            {text.split("\n").map((section, i) => (
              <li key={i}>
                <p className="text-[#45379D] place-self-end justify-self-center">
                  {section}
                </p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
