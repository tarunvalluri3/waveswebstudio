import { useState } from "react";
import { ChevronDown } from "lucide-react";

const subjects = [
  "Website Build",
  "Migration",
  "SEO",
  "Web Applications",
  "App Development",
  "E-commerce",
  "Other",
];

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="w-full max-w-[560px]">
      <div
        className="
    relative
    overflow-hidden
    rounded-[32px]
    border
    border-white/[0.06]
    bg-[#0F0F10]
    px-7
    sm:px-10
    py-10
    "
      >
        {/* TOP */}
        <div className="pb-8 border-b border-white/[0.06]">
          <div className="flex justify-between items-center pb-2">
            <p
              className="
        text-[10px]
        tracking-[0.24em]
        uppercase
        text-[#6B6B73]
        "
            >
              Project Inquiry
            </p>

            <p
              className="
        text-[10px]
        tracking-[0.24em]
        uppercase
        text-red-600
        "
            >
              Response Time: 24 Hours
            </p>
          </div>

          <h3
            className="
    mt-5
    font-heading
    text-[22px]
    md:text-[24px]
    leading-[1.3]
    tracking-[-0.01em]
    font-semibold
    text-[#F5F5F3]
  "
          >
            Ready to Move Your Business Forward?
          </h3>
        </div>

        {/* FORM */}
        <form
          action="https://formspree.io/f/meewqnqj"
          method="POST"
          aria-label="Project inquiry form"
          className="
    mt-10
    space-y-9
  "
        >
          <input
            type="hidden"
            name="_subject"
            value="New Contact Form Inquiry"
          />

          <input type="hidden" name="source" value="Contact Page" />

          <input
            type="text"
            name="_gotcha"
            tabIndex="-1"
            autoComplete="off"
            aria-hidden="true"
            className="hidden"
          />
          {/* NAME + EMAIL */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-7">
            {/* NAME */}
            <div>
              <label
                htmlFor="name"
                className="
    block
    mb-4
    text-[11px]
    tracking-[0.12em]
    uppercase
    text-[#6B6B73]
  "
              >
                Name
              </label>

              <input
                id="name"
                type="text"
                name="name"
                required
                autoComplete="name"
                minLength={2}
                maxLength={80}
                aria-required="true"
                placeholder="Full name"
                value={formData.name}
                onChange={handleChange}
                className="
            w-full
            h-[50px]
            bg-transparent
            border-0
            border-b
            border-white/[0.08]
            px-0
            text-[15px]
            text-[#F5F5F3]
            placeholder:text-[#6B6B73]
            outline-none
            focus:border-red-600
            transition-all
            duration-300
            "
              />
            </div>

            {/* EMAIL */}

            <div>
              <label
                className="
          block
          mb-4
          text-[11px]
          tracking-[0.12em]
          uppercase
          text-[#6B6B73]
          "
              >
                Email
              </label>

              <input
                id="email"
                type="email"
                name="email"
                required
                autoComplete="email"
                spellCheck={false}
                aria-required="true"
                placeholder="Email address"
                value={formData.email}
                onChange={handleChange}
                className="
            w-full
            h-[50px]
            bg-transparent
            border-0
            border-b
            border-white/[0.08]
            px-0
            text-[15px]
            text-[#F5F5F3]
            placeholder:text-[#6B6B73]
            outline-none
            focus:border-red-600
            transition-all
            duration-300
            "
              />
            </div>
          </div>

          {/* SERVICE */}

          <div>
            <label
              className="
        block
        mb-4
        text-[11px]
        tracking-[0.12em]
        uppercase
        text-[#6B6B73]
        "
            >
              Service
            </label>

            <div className="relative">
              <select
                id="subject"
                name="subject"
                required
                aria-required="true"
                value={formData.subject}
                onChange={handleChange}
                className="
    w-full
    h-[50px]
    appearance-none
    bg-transparent
    border-0
    border-b
    border-white/[0.08]
    px-0
    pr-10
    text-[15px]
    text-[#F5F5F3]
    outline-none
    focus:border-red-600
    transition-all
    duration-300
  "
              >
                <option value="" className="bg-[#111111] text-[#F5F5F3]">
                  Select service
                </option>

                {subjects.map((item) => (
                  <option
                    key={item}
                    value={item}
                    className="bg-[#111111] text-[#F5F5F3]"
                  >
                    {item}
                  </option>
                ))}
              </select>

              <div
                className="
          pointer-events-none
          absolute
          right-0
          top-1/2
          -translate-y-1/2
          text-[#6B6B73]
          "
              >
                <ChevronDown size={18} strokeWidth={1.5} />
              </div>
            </div>
          </div>

          {/* MESSAGE */}

          <div>
            <label
              className="
        block
        mb-4
        text-[11px]
        tracking-[0.12em]
        uppercase
        text-[#6B6B73]
        "
            >
              Project Details
            </label>

            <textarea
              name="message"
              rows="4"
              placeholder="Tell us about your project, goals, or challenges"
              value={formData.message}
              onChange={handleChange}
              className="
          w-full
          resize-none
          bg-transparent
          border-0
          border-b
          border-white/[0.08]
          py-1
          text-[15px]
          leading-[1.9]
          text-[#F5F5F3]
          placeholder:text-[#6B6B73]
          outline-none
          focus:border-red-600
          transition-all
          duration-300
          "
            />
          </div>

          {/* FOOTER */}

          <div
            className="
      pt-3
      flex
      flex-col
      sm:flex-row
      sm:items-end
      sm:justify-between
      gap-8
      "
          >
            <p
              className="
        max-w-[240px]
        text-[12px]
        leading-[1.9]
        text-[#6B6B73]
        "
            >
              Clear communication and structured execution from day one.
            </p>

            <button
              type="submit"
              className="
          group
          flex
          items-center
          gap-4
          text-[#F5F5F3]
          "
            >
              <span
                className="
          border-b
          border-red-600
          pb-1
          text-[14px]
          "
              >
                Submit Inquiry
              </span>

              <span
                className="
          text-red-600
          transition-transform
          duration-300
          group-hover:translate-x-1
          "
              >
                →
              </span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
