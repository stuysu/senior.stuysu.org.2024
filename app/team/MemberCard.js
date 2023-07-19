export default function MemberCard({ name, title, image, bio }) {
  return (
    <div className="relative rounded-lg w-[310px] h-[370px] bg-[#FDF4F2] lg:mb-0 mb-[25px]">
      <p className="absolute left-[15px] top-[15px] w-[280px] h-[280px] p-[10px] bg-[#f2f2f2] text-2xl font-bold">
        {bio}
      </p>

      <img
        className="rounded-lg absolute w-[310px] h-[310px] hover:opacity-0"
        src={image}
      />

      <div className="absolute left-[15px] top-[312px] text-[#45379D]">
        <p className="font-bold underline text-[20px]">{name}</p>
        <p className="text-[18px]">{title}</p>
      </div>
    </div>
  );
}
