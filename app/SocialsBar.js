export default function SocialsBar() {
  return (
    <div className="bg-secondary h-[82px]">
      <div className="flex justify-center items-center relative top-1/2 -translate-y-1/2 child:invert child:mx-[10px] child:child:w-[40px] child:child:h-[40px]">
        {/*<a>
          <img src="/icons/facebook.svg" />
        </a>*/}
        <a href="https://www.instagram.com/stuyseniorcaucus/">
          <img src="/icons/instagram.svg" />
        </a>
        <a href="https://www.tiktok.com/@stuyseniorcaucus/">
          <img src="/icons/tiktok.svg" />
        </a>
      </div>
    </div>
  );
}
