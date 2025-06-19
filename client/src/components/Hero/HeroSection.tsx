import Image from "next/image";

export default function HeroSection() {
  return (
    <section id="hero" className="h-screen">
      <div className="container  grid grid-rows-2 justify-between  lg:grid-rows-1 lg:grid-cols-2  gap-5 my-10">
        <div className="img_section relative lg:h-96 lg:order-2 ">
          <Image src={'/coding.svg'} alt="" fill></Image>
        </div>
        <div className="intro max-w-96 lg:max-w-dvh text-center lg:text-left lg:order-1 ">
          <h1 className="heading text-4xl lg:text-6xl uppercase font-black whitespace-nowrap mb-2 lg:mb-6">
            Hey, I’m Aaman.
          </h1>
          <p className="heading-quote">
            A Full-Stack Developer who builds bridges between elegant interfaces
            and bulletproof backends.
          </p>
        </div>
       
      </div>
    </section>
  );
}
