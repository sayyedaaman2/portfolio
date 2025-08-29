import SectionTitle from "@/components/common/SectionTitle";
import SocialLinks from "@/components/Social/SocialLinks";
import Image from "next/image";


export default function AboutSection() {
    // This will show your GA ID in development and production
    return (
        <section id="about">
            <div className="container grid items-center">
                    <SectionTitle title={"about"}/>
                <div className="about_me grid lg:grid-cols-2 items-center w-full lg:gap-24 border rounded-2xl overflow-hidden">
                    <div className="img_section relative aspect-square ">
                        <Image src={'/myimage.jpg'} alt="Aaman Sayyed's Photo" fill={true} loading="lazy" className="object-cover" ></Image>
                    </div>
                    <div className="about_section flex flex-col justify-around p-4">
                        <h1 className="text-xl font-black mb-2">Aaman Sayyed</h1>
                        <p className="text-sm leading-relaxed mb-4">
                            I&apos;m a passionate Full-Stack Web Developer with 6 months of hands-on experience — including 2 months of internship and 4 months in a professional role. I specialize in building dynamic, user-friendly web applications using technologies like React, Next.js, Node.js, and MongoDB. I love solving real-world problems through code and continuously learning new tools and best practices to sharpen my skills. When I&apos;m not coding, I enjoy exploring new tech trends, traveling, and leveling up my design sense.
                        </p>
                        <SocialLinks />
                    </div>
                </div>

            </div>

        </section>
    );
}
