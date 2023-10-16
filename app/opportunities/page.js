import scholarships from "@/data/scholarships.json";
import HorizontalRuling from "@/components/HorizontalRuling";

function getScholarships() {
  let arr = [];

  for (let i = 0; i < scholarships.length; i += 2) {
    arr.push({
      title: scholarships[i],
      desc: scholarships[i + 1],
    });
  }

  return arr;
}
export default function Opportunities() {
  let opportunities = getScholarships();

  return (
    <div className="pt-[50px]">
      {opportunities.map((opp, i) => (
        <div className="pb-[60px]" key={i}>
          <HorizontalRuling>
            <div className="relative w-[544px] h-[45px]">
              <img
                src="/about_us_background.svg"
                className="absolute drop-shadow-lg w-[544px] h-[45px]"
              />

              <p className="absolute left-[20px] font-link font-bold text-[25px] text-[#45379D] underline top-[22.5px] -translate-y-1/2">
                {opp.title}
              </p>
            </div>
          </HorizontalRuling>

          <p className="whitespace-pre-line text-[15px] text-[#45379D] px-[50px] pt-[40px]">
            {opp.desc}
          </p>
        </div>
      ))}
    </div>
  );
}
