import Image from "next/image";
import CTAButton from "../../CTAButton";

export default function HeroSection() {
  return (
    <section id="hero" >
      <div className="container grid grid-rows-2 items-center   lg:justify-between   lg:grid-rows-1 lg:grid-cols-2  gap-5 h-full">
        <div className="img_section relative h-full  lg:order-2 ">
          <Image src={"/coding.svg"} alt="" fill loading="lazy"></Image>
        </div>
        <div className="intro max-w-96 md:max-w-full lg:max-w-dvh flex flex-col  items-center lg:items-start lg:order-1 ">
          <h1 className="heading text-4xl md:text-6xl uppercase font-black whitespace-nowrap mb-2 md:mb-6">
            Hey, I’m Aaman.
          </h1>
          <h2 className="text-md md:text-xl font-bold uppercase whitespace-nowrap ">
            I’m a Full Stack Web Developer
          </h2>
          <p className="heading-quote text-center lg:text-left md:px-32 lg:px-0">
            A Full-Stack Developer who builds bridges between elegant interfaces
            and bulletproof backends.
          </p>
          <div className="tag-list flex  w-max border border-current  px-2 py-2  text-sm lg:text-md mt-4 rounded-md ">
            <div className="tag-list">
              <span className="tag relative  px-2 lg:px-4 after:content-['|'] after:absolute after:right-0 after:top-0 after:text-current ">
                Full Stack
              </span>
              <span className="tag relative  px-2 lg:px-4 after:content-['|'] after:absolute after:right-0 after:top-0 after:text-current ">
                Front End
              </span>
              <span className="tag relative  px-2 lg:px-4  ">
                Back End
              </span>
            </div>
          </div>
          <div className="call_to_action flex flex-col md:flex-row gap-4 my-4">
            <CTAButton href="#contact" variant="primary">
              Let&apos;s Work Together
            </CTAButton>

            <CTAButton href="/resume.pdf" download>
              Download Resume
            </CTAButton>
          </div>

        </div>
      </div>
    </section>
  );
}
