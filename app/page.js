import HorizontalRuling from "@/components/HorizontalRuling";
import InstagramEmbed from "./InstagramEmbed";
import styles from "./home.module.css";
import HomepageCarousel from "./HomepageCarousel";
import CalendarEmbed from "./CalendarEmbed";
import Announcements from "./Announcements";

export default function Home() {
  return (
    <div className='bg-primary'>
      <HomepageCarousel />

      <div className='relative left-[2vw] lg:min-h-[500px] lg:pt-[70px] pt-0'>
        <div className='absolute drop-shadow-lg lg:w-[544px] w-[300px] lg:h-[45px] h-[35px] lg:top-[115px] top-[30px] lg:left-[23vw] left-[50vw] -translate-y-1/2 -translate-x-1/2 background' />
        <p className='absolute font-link lg:text-[30px] text-[17px] text-text underline lg:top-[115px] top-[30px] lg:left-[calc(23vw-180px)] left-[calc(50vw-90px)] -translate-y-1/2 -translate-x-1/2'>
          About Us
        </p>

        <p
          className='
        lg:pl-[calc(23vw-275px)] px-[8vw] lg:w-[50vw] w-screen lg:pt-[80px] pt-[50px] pb-[30px]
        lg:text-left text-center text-text lg:text-[20px] text-[15px]'
        >
          Welcome to the Stuyvesant High School Senior Caucus! We are the
          student government for the senior body (class of 2024) of Stuyvesant
          High School. We seek to connect with all seniors, providing guidance
          for the college app process, letting them have fun, and preparing them
          for the next chapter of their lives.
        </p>

        <div className='lg:block hidden absolute left-[70vw] top-[50%] -translate-x-1/2 -translate-y-1/2'>
          <InstagramEmbed />
        </div>
      </div>

      <HorizontalRuling>
        <img src='/icons/star.svg' className='w-[40px] h-[40px] mx-[10px]' />
      </HorizontalRuling>

      <div
        className={`flex lg:flex-row flex-col justify-center items-center pt-[20px] pb-[45px] striped_background`}
      >
        <div className='lg:relative lg:w-[50vw] w-[72.5vw] sm:mb-auto mb-[450px]'>
          <p className='text-center font-link text-[25px] text-text underline mb-[15px]'>
            Announcements
          </p>
          <div className="lg:ml-[2.5vw] lg:w-[45vw] lg:h-[45vw] w-[70vw]">
            <Announcements />

            <div
              className="absolute left-1/2 -translate-x-1/2"
              dangerouslySetInnerHTML={{
                __html:
                  '<iframe class="fundraising-widget" width="220px" height="484px" data-id="2804fa" data-url-key="stuyseniorhoodie" data-src="https://www.customink.com/fundraising/widgets/stuyseniorhoodie" data-utm-campaign="campaign-dashboard-embed-v1"></iframe> <script src="https://www.customink.com/fundraising/assets/campaign_widget/fundraising_widget.js"></script>',
              }}
            />
          </div>
        </div>

        <div className="lg:relative lg:w-[50vw] w-[72.5vw] lg:mt-0 mt-[20px]">
          <p className="text-center font-link text-[25px] lg:text-text text-secondary underline mb-[15px]">
            Calendar
          </p>
          {/*  border-black  rounded-lg drop-shadow-2xl   w-[70vw] h-[70vw] */}
          <div className='relative lg:ml-[2.5vw] lg:w-[45vw] lg:h-[45vw]'>
            <CalendarEmbed />
            <p style={{fontSize:"10px", textAlign:"right"}}>Updated: November 15, 2023</p>
          </div>
        </div>
      </div>
    </div>
  )
}
