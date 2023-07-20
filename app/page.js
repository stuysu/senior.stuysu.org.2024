import HorizontalRuling from "@/components/HorizontalRuling";
import InstagramEmbed from "./InstagramEmbed";
import styles from "./home.module.css";

export default function Home() {
  return (
    <div className="bg-[#FDF4F2]">
      <img
        src="/caucus_pictures/anthony-zidane-1.png"
        className="w-screen h-[40vw] object-cover"
      />

      <div className="relative lg:min-h-[500px] lg:pt-[70px] pt-0">
        <img
          src="/about_us_background.svg"
          className="absolute drop-shadow-lg lg:w-[544px] w-[300px] lg:h-[45px] h-[35px] lg:top-[115px] top-[45px] lg:left-[23vw] left-[50vw] -translate-y-1/2 -translate-x-1/2"
        />
        <p className="absolute font-link lg:text-[30px] text-[17px] text-[#45379D] underline lg:top-[115px] top-[45px] lg:left-[calc(23vw-180px)] left-[calc(50vw-90px)] -translate-y-1/2 -translate-x-1/2">
          About Us
        </p>

        <p
          className="
        lg:pl-[5vw] px-[8vw] lg:w-[50vw] w-screen pt-[80px] pb-[30px]
        text-center text-[#3F3194] lg:text-[20px] text-[15px]"
        >
          Welcome to the Stuyvesant High School Senior Caucus! We are the student government for the senior body (class of 2024) of Stuyvesant High School. We seek to connect with all seniors, providing guidance for the college app process, letting them have fun, and preparing them for the next chapter of their lives.
        </p>

        <div className="lg:block hidden absolute left-[75vw] top-[50%] -translate-x-1/2 -translate-y-1/2">
          <InstagramEmbed />
        </div>
      </div>

      <HorizontalRuling>
        <img src="/icons/star.svg" className="w-[40px] h-[40px] mx-[10px]" />
      </HorizontalRuling>

      <div
        className={`flex justify-center items-center pt-[20px] pb-[45px] ${styles.striped_background}`}
      >
        {/*
        <div className="relative w-[50vw]">
          <p className="text-center font-link text-[25px] text-[#45379D] underline mb-[15px]">
            Announcements
          </p>
          <div className="bg-white ml-[2.5vw] border-black border-[1px] rounded-lg drop-shadow-2xl w-[45vw] h-[45vw]">
            Announcement.
          </div>
        </div>

        <div className="relative w-[50vw]">
          <p className="text-center font-link text-[25px] text-[#45379D] underline mb-[15px]">
            Calendar
          </p>
          <div className="bg-white ml-[2.5vw] border-black border-[1px] rounded-lg drop-shadow-2xl w-[45vw] h-[45vw]">
            Calendar.
          </div>
        </div>*/}

        <div className="relative lg:w-[50vw] w-[72.5vw]">
          <p className="text-center font-link text-[25px] text-[#45379D] underline mb-[15px]">
            Announcements
          </p>
          <div className="bg-white ml-[2.5vw] border-black border-[1px] rounded-lg drop-shadow-2xl lg:w-[45vw] lg:h-[45vw] w-[70vw] h-[70vw]"></div>
        </div>
      </div>
    </div>
  );
}
