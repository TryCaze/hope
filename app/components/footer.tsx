import Image from "next/image";
import Link from "next/link";

const Footer = () => {
    return ( 
<footer className="bg-violet-950">

  <div className="flex items-center justify-center border-b-2 border-neutral-200 p-6 dark:border-neutral-500 lg:justify-between">
  <div className="mr-12 hidden md:block">
    <span>Social Media</span>
  </div>
  <div className="flex justify-center items-center">
    <a href="https://www.youtube.com/channel/UCICryVYQ_DfYHtulmoUAv3A" className="mx-5">
        <Image src="/youtube.svg" alt="youtube" width={24} height={24}/>
    </a>
    <a href="https://www.instagram.com/trycaze/" className="mx-5">
        <Image src="/instagram.svg" alt="instagram" width={24} height={24}/>
    </a>
    <a href="https://bsky.app/profile/did:plc:ortwnym66v3s7gzkl4gritxf" className="mx-5">
        <Image src="/bluesky.svg" alt="bluesky" width={24} height={24}/>
    </a>
    <a href="https://github.com/TryCaze" className="mx-5">
        <Image src="/github.svg" alt="github" width={24} height={24}/>
    </a>
  </div>
</div>

  <div className="mx-6 pt-8 pb-4 text-center">

  <div className="mb-6 text-center">
  <h1 className="mb-2 font-bold uppercase">Like what I do?</h1>
  <a 
    href="https://liberapay.com/trycaze/donate" 
    target="_blank" 
    className="inline-block"
  >
    <Image
      src="/liberapay.png" 
      alt="Donate!" 
      width={128}
      height={128}
    />
  </a>
</div>


  <div className="grid grid-cols-1 md:grid-cols-3 mb-4">
  <div className="mb-6">
    <Link href="/presets" className="mb-2.5 font-bold text-white hover:text-[#FFD700]">
      Presets
    </Link>
  </div>

  <div className="mb-6">
    <Link href="/sounds" className="mb-2.5 font-bold text-white hover:text-[#FFD700]">
      Custom
    </Link>
  </div>

  <div className="mb-6">
    <Link href="/download" className="mb-2.5 font-bold text-white hover:text-[#FFD700]">
      Download
    </Link>
  </div>
</div>

  </div>

  <div className="bg-violet-950 p-6 text-center flex justify-center items-center">

      <span>© 2025 copyright: </span>

      <p className="mx-3">
        <Image
          src="/hope.svg"
          className="h-5"
          alt="Logo"
          loading="lazy"
          width={32}
          height={32}
        />
      </p>

      <p
        className="font-semibold text-white"
      >
        HOPE
      </p>

  </div>


</footer>
     );
}
 
export default Footer;
