import SocialLinks from "@/components/Social/SocialLinks";
import Image from "next/image";


export default function AboutSection() {
    return (
        <section id="about" className="  ">
            <div className=" container grid grid-cols-1  md:grid-cols-[30%_70%] md:grid-rows-1  border-4 border-slate-200 dark:border-slate-800 rounded-md overflow-hidden">
                <div className="img_section relative  aspect-square  ">
                    <Image src={'/myimage.jpg'} alt="Aaman Sayyed's Photo" fill={true} className="object-cover" ></Image>
                </div>
                <div className="about_section p-6 flex flex-col justify-around">
                    <h1 className="text-xl font-black mb-2">Aaman Sayyed</h1>
                    <p className="text-sm leading-relaxed mb-4">
                        I&apos;m a passionate Full-Stack Web Developer with 6 months of hands-on experience — including 2 months of internship and 4 months in a professional role. I specialize in building dynamic, user-friendly web applications using technologies like React, Next.js, Node.js, and MongoDB. I love solving real-world problems through code and continuously learning new tools and best practices to sharpen my skills. When I&apos;m not coding, I enjoy exploring new tech trends, traveling, and leveling up my design sense.
                    </p>
                    <SocialLinks />
                </div>

            </div>
        </section>
    );
}
