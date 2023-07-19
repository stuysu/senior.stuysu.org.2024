export default function HorizontalRuling({ children }) {
  return (
    <div className="relative flex items-center h-0">
      <div className="bg-[#3F3196] h-[5px] flex-grow"></div>
      <div className="bg-[#3F3196] h-[25px] w-[5px]"></div>

      {children}

      <div className="bg-[#3F3196] h-[25px] w-[5px]"></div>
      <div className="bg-[#3F3196] h-[5px] flex-grow"></div>
    </div>
  );
}
