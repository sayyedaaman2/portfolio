import ContactForm from "./ContactForm";

export default function Contact() {

  return (
    <section id="contact" className="py-16">
      <div className="container mx-auto px-6 max-w-4xl">
        {/* Heading */}
        <h1 className="text-3xl font-bold text-center mb-4">
          Let&apos;s Work Together
        </h1>
        <p className="text-center text-gray-600 dark:text-gray-50 mb-12">
          I&apos;m open to freelance, full-time, or collaboration projects.
        </p>

        {/* Contact Content */}
        <ContactForm/>
      </div>
    </section>
  )
}
