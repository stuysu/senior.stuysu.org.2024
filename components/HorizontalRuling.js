export default function HorizontalRuling({ children }) {
  return (
    <div className='relative flex items-center h-0'>
      <div className='bg-tertiary h-[5px] flex-grow'></div>
      <div className='bg-tertiary h-[25px] w-[5px]'></div>

      {children}

      <div className='bg-tertiary h-[25px] w-[5px]'></div>
      <div className='bg-tertiary h-[5px] flex-grow'></div>
    </div>
  )
}
