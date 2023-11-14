export default function MemberCard({ name, title, image, bio }) {
  return (
    <div className="relative rounded-lg w-[310px] bg-[#FDF4F2] lg:mb-0 mb-[25px] text-[#45379D]">
      <div className="w-[310px] h-[310px] overflow-hidden">
        <img className="rounded-t-lg object-cover" src={image} />
      </div>

      <div className="group min-h-[60px]">
        <div className="mx-2">
          <p
            data={name}
            bio={bio}
            className="font-bold underline group-hover:no-underline text-[20px] before:content-[attr(data)] group-hover:before:content-[attr(bio)]"
          ></p>
          <p
            data={title}
            className='text-[18px] before:content-[attr(data)] group-hover:before:content-[""]'
          ></p>
        </div>
      </div>
    </div>
  );
}
