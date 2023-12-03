import scholarships from "@/data/scholarships.json";
import HorizontalRuling from "@/components/HorizontalRuling";

export default function Opportunities() {
  return (
    <div className="pt-[50px] bg-primary">
      {scholarships.map((s, i) => (
        <div className="pb-[60px]" key={i}>
          <HorizontalRuling>
            <div className="relative w-[544px] h-[45px]">
              <div className="absolute drop-shadow-lg w-[544px] h-[45px] background" />

              <a
                href={s["Link"]}
                className="absolute left-[20px] font-link font-bold sm:text-[25px] text-[20px] text-text underline top-[22.5px] -translate-y-1/2"
              >
                {s["Scholarship Name"]}
              </a>
            </div>
          </HorizontalRuling>

          <div className="w-[100vw]">
            <p className="whitespace-pre-line text-[15px] text-text pt-[40px] ml-[50vw] -translate-x-1/2 max-w-[calc(min(600px,90vw))]">
              {s["Info"]}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
