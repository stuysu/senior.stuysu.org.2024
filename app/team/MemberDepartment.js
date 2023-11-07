import HorizontalRuling from '@/components/HorizontalRuling.js'
import MemberCard from './MemberCard.js'

export default function MemberDepartment({ name, members }) {
  return (
    <div className='pb-[60px] bg-quaternary'>
      <div className='mb-[20px]'>
        <HorizontalRuling>
          <div className='relative w-[544px] h-[45px]'>
            <div className='absolute drop-shadow-lg w-[544px] h-[45px] background' />

            <p className='absolute left-[20px] font-link font-bold text-[25px] text-text underline top-[22.5px] -translate-y-1/2'>
              {name}
            </p>
          </div>
        </HorizontalRuling>
      </div>

      <div className='flex flex-wrap justify-center pt-[10px]'>
        {members.map((member, i) => (
          <div className='mx-[40px] mt-[20px]' key={i}>
            <MemberCard {...member} />
          </div>
        ))}
      </div>
    </div>
  )
}
