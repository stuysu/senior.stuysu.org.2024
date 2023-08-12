export default function MemberCard({ name, title, image, bio }) {
  return (
    <div className="relative rounded-lg w-[310px] h-[370px] bg-[#FDF4F2] lg:mb-0 mb-[25px] text-[#45379D]">
      <p className="absolute left-[15px] top-[15px] w-[280px] h-[280px] p-[10px] bg-[#FDF4F2] text-2xl font-bold">
        {bio}
      </p>

      <div className="absolute w-[310px] h-[310px] overflow-hidden">
        <img
          className="rounded-lg object-cover hover:opacity-0"
          src={image}
        />
      </div>

      <div className="absolute left-[15px] top-[312px]">
        <p className="font-bold underline text-[20px]">{name}</p>
        <p className="text-[18px]">{title}</p>
      </div>
    </div>
  );
}
