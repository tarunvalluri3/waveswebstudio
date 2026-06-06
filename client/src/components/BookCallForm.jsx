import { ChevronDown } from "lucide-react";

const BookCallForm = () => {
  return (
    <div className="w-full">
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
        {/* HEADER */}

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
              Strategy Call Request
            </p>

            <p
              className="
              text-[10px]
              tracking-[0.24em]
              uppercase
              text-red-600
              "
            >
              Response Within 24 Hours
            </p>
          </div>

          <h3
            className="
            mt-5
            font-playfair
            text-[22px]
            md:text-[24px]
            leading-[1.05]
            tracking-[-0.03em]
            text-[#F5F5F3]
            "
          >
            Tell Us About Your Project.
          </h3>
        </div>

        {/* FORM */}

        <form
          action="https://formspree.io/f/xnjyqlrl"
          method="POST"
          className="
          mt-10
          space-y-9
          "
        >
          <input
            type="hidden"
            name="_subject"
            value="New Strategy Call Request"
          />

          <input type="text" name="_gotcha" className="hidden" />

          {/* NAME + EMAIL */}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-7">
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
                Full Name *
              </label>

              <input
                type="text"
                name="name"
                placeholder="John Smith"
                required
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
                Email Address *
              </label>

              <input
                type="email"
                name="email"
                placeholder="john@email.com"
                required
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

          {/* COMPANY + PROJECT */}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-7">
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
                Company Name
              </label>

              <input
                type="text"
                name="company"
                placeholder="Your Company"
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
                Project Type *
              </label>

              <div className="relative">
                <select
                  name="projectType"
                  required
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
                  <option value="">Select a service</option>

                  <option className="text-black">
                    Business Website Development
                  </option>
                  <option className="text-black">
                    Landing Page Design & Development
                  </option>
                  <option className="text-black">Website Redesign</option>
                  <option className="text-black">E-Commerce Website</option>
                  <option className="text-black">
                    Web Application Development
                  </option>
                  <option className="text-black">Mobile App Development</option>
                  <option className="text-black">UI/UX Design</option>
                  <option className="text-black">Technical SEO</option>
                  <option className="text-black">Website Migration</option>
                  <option className="text-black">Other</option>
                </select>

                <ChevronDown
                  size={18}
                  className="
                  absolute
                  right-0
                  top-1/2
                  -translate-y-1/2
                  text-[#6B6B73]
                  pointer-events-none
                  "
                />
              </div>
            </div>
          </div>

          {/* BUDGET */}

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
              Estimated Budget *
            </label>

            <div className="relative">
              <select
                name="budget"
                required
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
                <option className="text-black">₹15k - ₹25k</option>
                <option className="text-black">₹25k - ₹50k</option>
                <option className="text-black">₹50k - ₹1L</option>
                <option className="text-black">₹1L - ₹3L</option>
                <option className="text-black">₹3L+</option>
              </select>

              <ChevronDown
                size={18}
                className="
                absolute
                right-0
                top-1/2
                -translate-y-1/2
                text-[#6B6B73]
                pointer-events-none
                "
              />
            </div>
          </div>

          {/* DATE + TIME */}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-7">
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
                Preferred Date *
              </label>

              <input
                type="date"
                name="preferredDate"
                required
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
                outline-none
                focus:border-red-600
                "
              />
            </div>

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
                Preferred Time *
              </label>

              <input
                type="time"
                name="preferredTime"
                required
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
                outline-none
                focus:border-red-600
                "
              />
            </div>
          </div>

          {/* PROJECT DETAILS */}

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
              Project Details *
            </label>

            <textarea
              name="projectDetails"
              rows="5"
              required
              placeholder="Tell us about your project, goals, challenges, and expectations..."
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
              max-w-[260px]
              text-[12px]
              leading-[1.9]
              text-[#6B6B73]
              "
            >
              Free consultation focused on your goals, requirements, timelines,
              and growth opportunities.
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
                Schedule Strategy Call
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

export default BookCallForm;
