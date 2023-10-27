import HorizontalRuling from "@/components/HorizontalRuling";
import InstagramEmbed from "./InstagramEmbed";
import styles from "./home.module.css";
import HomepageCarousel from "./HomepageCarousel";
import CalendarEmbed from "./CalendarEmbed";

export default function Home() {
  return (
    <div className="bg-[#FDF4F2]">
      <HomepageCarousel />

      <div className="relative left-[2vw] lg:min-h-[500px] lg:pt-[70px] pt-0">
        <img
          src="/about_us_background.svg"
          className="absolute drop-shadow-lg lg:w-[544px] w-[300px] lg:h-[45px] h-[35px] lg:top-[115px] top-[30px] lg:left-[23vw] left-[50vw] -translate-y-1/2 -translate-x-1/2"
        />
        <p className="absolute font-link lg:text-[30px] text-[17px] text-[#45379D] underline lg:top-[115px] top-[30px] lg:left-[calc(23vw-180px)] left-[calc(50vw-90px)] -translate-y-1/2 -translate-x-1/2">
          About Us
        </p>

        <p
          className="
        lg:pl-[calc(23vw-275px)] px-[8vw] lg:w-[50vw] w-screen lg:pt-[80px] pt-[50px] pb-[30px]
        lg:text-left text-center text-[#3F3194] lg:text-[20px] text-[15px]"
        >
          Welcome to the Stuyvesant High School Senior Caucus! We are the
          student government for the senior body (class of 2024) of Stuyvesant
          High School. We seek to connect with all seniors, providing guidance
          for the college app process, letting them have fun, and preparing them
          for the next chapter of their lives.
        </p>

        <div className="lg:block hidden absolute left-[70vw] top-[50%] -translate-x-1/2 -translate-y-1/2">
          <InstagramEmbed />
        </div>
      </div>

      <HorizontalRuling>
        <img src="/icons/star.svg" className="w-[40px] h-[40px] mx-[10px]" />
      </HorizontalRuling>

      <div
        className={`flex lg:flex-row flex-col justify-center items-center pt-[20px] pb-[45px] ${styles.striped_background}`}
      >
        <div className="relative lg:w-[50vw] w-[72.5vw]">
          <p className="text-center font-link text-[25px] text-[#45379D] underline mb-[15px]">
            Announcements
          </p>
          <div className="bg-[#FDF4F2] relative lg:ml-[2.5vw] border-black border-[1px] rounded-lg drop-shadow-2xl lg:w-[45vw] lg:h-[45vw] w-[70vw] h-[70vw]">
            <p className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[#45379D]">
              <ul>
                <li>&#8226;Senior portrait due October 31</li>
                <li>&#8226;Senior quotes due November 4</li>
              </ul>
            </p>
          </div>
        </div>

        <div className="relative lg:w-[50vw] w-[72.5vw] lg:mt-0 mt-[20px]">
          <p className="text-center font-link text-[25px] lg:text-[#45379D] text-[#E5D6FF] underline mb-[15px]">
            Calendar
          </p>
          <div className="bg-[#FDF4F2] relative lg:ml-[2.5vw] border-black border-[1px] rounded-lg drop-shadow-2xl lg:w-[45vw] lg:h-[45vw] w-[70vw] h-[70vw]">
            {/*<CalendarEmbed />*/}

            <p className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[#45379D]">
              Stay tuned :)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
