import scholarships from '@/data/scholarships.json'
import HorizontalRuling from '@/components/HorizontalRuling'

function getScholarships() {
  let arr = []

  for (let i = 0; i < scholarships.length; i += 2) {
    arr.push({
      title: scholarships[i],
      desc: scholarships[i + 1],
    })
  }

  return arr
}
export default function Opportunities() {
  let opportunities = getScholarships()

  return (
    <div className='pt-[50px]'>
      {opportunities.map((opp, i) => (
        <div className='pb-[60px]' key={i}>
          <HorizontalRuling>
            <div
              className='relative w-3/5 md:w-2/5 h-auto bg-cover flex justify-center items-center overflow-auto'
              style={{
                backgroundImage: `url(${'/about_us_background.svg'})`,
              }}
            >
              <p className='font-link font-bold lg:text-2xl sm:text-xl text-lg text-[#45379D] underline text-center p-2'>
                {opp.title}
              </p>
            </div>
          </HorizontalRuling>

          <p className='whitespace-pre-line text-[15px] text-[#45379D] px-[50px] pt-[40px]'>
            {opp.desc}
          </p>
        </div>
      ))}
    </div>
  )
}
