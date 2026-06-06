import { useState } from "react";
import { ChevronDown } from "lucide-react";

const FullWidthContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const subjects = [
    "Website Build",
    "Migration",
    "SEO",
    "Web Applications",
    "App Development",
    "E-commerce",
    "Other",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  

  return (
    <section className="bg-[#F7F5F2] px-6 py-[120px] md:py-[140px] overflow-hidden">

      <div className="max-w-[1440px] mx-auto">

        {/* TOP */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-16 pb-14 border-b border-black/10">

          {/* LEFT */}
          <div className="max-w-[720px]">

            <p className="text-[11px] tracking-[0.24em] uppercase text-[#9CA3AF]">
              Project Inquiry
            </p>

            <h2
  className="
    mt-5
    font-heading
    text-[32px]
    sm:text-[38px]
    lg:text-[46px]
    xl:text-[52px]
    leading-[1.08]
    tracking-[-0.03em]
    font-semibold
    text-[#0B0B0C]
  "
>
  Ready to Move Your Business Forward?
</h2>

          </div>

          {/* RIGHT */}
          <div className="max-w-[360px]">

            <p className="text-[15px] leading-[1.9] text-[#71717A]">
              Whether you need a high-performance website, scalable web
              application, or a complete digital experience, we’ll help define
              the right direction before anything gets built.
            </p>

          </div>

        </div>

        {/* FORM */}
        <form
          action="https://formspree.io/f/meewqnqj"
          method="POST"
          className="pt-14"
        > 

           <input
            type="hidden"
            name="_subject"
            value="New Contact Form Inquiry"
          />

          <input type="hidden" name="source" value="Contact Page" />

          <input type="text" name="_gotcha" className="hidden" />

          {/* TOP ROW */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

            {/* NAME */}
            <div>

              <label className="block mb-4 text-[12px] tracking-[0.12em] uppercase text-[#9CA3AF]">
                Name
              </label>

              <input
                type="text"
                name="name"
                placeholder="Full name"
                value={formData.name}
                onChange={handleChange}
                className="w-full h-[54px] bg-transparent border-0 border-b border-black/10 px-0 text-[16px] text-[#0B0B0C] placeholder:text-[#A1A1AA] outline-none focus:border-red-600 transition-all duration-300"
              />

            </div>

            {/* EMAIL */}
            <div>

              <label className="block mb-4 text-[12px] tracking-[0.12em] uppercase text-[#9CA3AF]">
                Email
              </label>

              <input
                type="email"
                name="email"
                placeholder="Email address"
                value={formData.email}
                onChange={handleChange}
                className="w-full h-[54px] bg-transparent border-0 border-b border-black/10 px-0 text-[16px] text-[#0B0B0C] placeholder:text-[#A1A1AA] outline-none focus:border-red-600 transition-all duration-300"
              />

            </div>

            {/* SERVICE */}
            <div>

              <label className="block mb-4 text-[12px] tracking-[0.12em] uppercase text-[#9CA3AF]">
                Service
              </label>

              <div className="relative">

                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full h-[54px] appearance-none bg-transparent border-0 border-b border-black/10 px-0 pr-10 text-[16px] text-[#0B0B0C] outline-none focus:border-red-600 transition-all duration-300"
                >
                  <option value="" className="bg-[#F7F5F2] text-[#71717A]">
                    Select service
                  </option>

                  {subjects.map((item) => (
                    <option
                      key={item}
                      value={item}
                      className="bg-[#F7F5F2] text-[#0B0B0C]"
                    >
                      {item}
                    </option>
                  ))}

                </select>

                {/* ICON */}
                <div className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 text-[#9CA3AF]">
                  <ChevronDown size={18} strokeWidth={1.5} />
                </div>

              </div>

            </div>

          </div>

          {/* MESSAGE */}
          <div className="mt-12">

            <label className="block mb-4 text-[12px] tracking-[0.12em] uppercase text-[#9CA3AF]">
              Project Details
            </label>

            <textarea
              name="message"
              rows="5"
              placeholder="Tell us about your project, goals, timeline, or current challenges"
              value={formData.message}
              onChange={handleChange}
              className="w-full resize-none bg-transparent border-0 border-b border-black/10 px-0 py-0 text-[16px] leading-[1.9] text-[#0B0B0C] placeholder:text-[#A1A1AA] outline-none focus:border-red-600 transition-all duration-300"
            />

          </div>

          {/* BOTTOM */}
          <div className="pt-12 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10">

            {/* LEFT */}
            <div className="max-w-[340px]">

              <p className="text-[13px] leading-[1.9] text-[#71717A]">
                Clear communication, structured execution, and focused product
                thinking from day one.
              </p>

            </div>

            {/* RIGHT */}
            <div className="flex flex-col items-start lg:items-end gap-5">

              <button
                type="submit"
                className="group flex items-center gap-4 text-[#0B0B0C]"
              >

                <span className="border-b border-red-600 pb-1 text-[16px] transition-all duration-300 group-hover:border-black">
                  Submit Inquiry
                </span>

                <span className="text-red-600 transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>

              </button>

              <p className="text-[12px] text-[#9CA3AF]">
                Usually replies within 24 hours
              </p>

            </div>

          </div>

        </form>

      </div>

    </section>
  );
};

export default FullWidthContactForm;