import scholarships from "@/data/scholarships.json";
import HorizontalRuling from "@/components/HorizontalRuling";

export default function Opportunities() {
  return (
    <div className="pt-[50px]">
      {scholarships.map((s, i) => (
        <div className="pb-[60px]" key={i}>
          <HorizontalRuling>
            <div className="relative w-[544px] h-[45px]">
              <img
                src="/about_us_background.svg"
                className="absolute drop-shadow-lg w-[544px] h-[45px]"
              />

              <a
                href={s["Link"]}
                className="absolute left-[20px] font-link font-bold sm:text-[25px] text-[20px] text-[#45379D] underline top-[22.5px] -translate-y-1/2"
              >
                {s["Scholarship Name"]}
              </a>
            </div>
          </HorizontalRuling>

          <div className="w-[200vw]">
            <p className="whitespace-pre-line text-[15px] text-[#45379D] pt-[40px] ml-[50vw] -translate-x-1/2 max-w-[calc(min(600px,90vw))]">
              {s["Info"]}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
