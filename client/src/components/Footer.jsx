import { Link } from "react-router-dom";

import {
  Mail,
  MapPin,
  ArrowUpRight,
} from "lucide-react";

import {
  FaWhatsapp,
  FaInstagram,
  FaLinkedin,
  FaXTwitter,
} from "react-icons/fa6";

import {
  footerNavLinks,
  serviceLinks,
  socialLinks,
  contactInfo,
  footerMeta,
} from "./footerData";

const Footer = () => {
  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const socialIcons = {
    Instagram: <FaInstagram />,
    LinkedIn: <FaLinkedin />,
    X: <FaXTwitter />,
  };

  return (
    <footer
      className="
      relative
      overflow-hidden
      bg-[#050505]
      text-white
      border-t
      border-white/[0.04]
      "
    >
      {/* Atmosphere */}

      <div
        className="
        absolute
        inset-0
        bg-[radial-gradient(circle_at_top,rgba(255,255,255,.03),transparent_55%)]
        "
      />

      <div
        className="
        absolute
        bottom-[-250px]
        right-[-250px]
        h-[700px]
        w-[700px]
        rounded-full
        bg-red-600/[0.02]
        blur-[160px]
        "
      />

      {/* subtle texture */}

      <div
        className="
        absolute
        inset-0
        opacity-[0.018]
        [background-image:radial-gradient(#fff_0.7px,transparent_0.7px)]
        [background-size:20px_20px]
        "
      />

      <div
        className="
        relative
        max-w-[1500px]
        mx-auto
        px-6
        md:px-10
        lg:px-16
        py-[140px]
        "
      >
        {/* TOP */}

        <div
          className="
          grid
          lg:grid-cols-12
          gap-y-24
          "
        >
          {/* LEFT */}

          <div className="lg:col-span-5">
            {/* Logo */}

            <Link
              to="/"
              onClick={handleScrollTop}
              className="
              inline-block
              font-heading
              font-semibold
              text-[24px]
              lg:text-[38px]
              tracking-[-0.035em]
              transition-all
              duration-500
              hover:opacity-80
              "
            >
              Wav
              <span className="text-red-600">
                e
              </span>
              s.

              <span
                className="
                ml-3
                text-[14px]
                uppercase
                tracking-[0.18em]
                text-white/35
                font-normal
                "
              >
                Web Studio
              </span>
            </Link>

            {/* Main Statement */}

            <h2
              className="
              mt-10
              font-heading
              text-[44px]
              sm:text-[58px]
              lg:text-[80px]
              font-semibold
              leading-[0.92]
              tracking-[-0.07em]
              "
            >
              Digital experiences

              <span
                className="
                block
                text-white/25
                "
              >
                built with quiet precision.
              </span>
            </h2>

            <p
              className="
              mt-10
              max-w-[420px]
              text-[15px]
              leading-[1.9]
              text-white/42
              "
            >
              Premium websites and digital systems
              designed for brands that value
              distinction, clarity and long-term growth.
            </p>

            {/* CTA */}

            <Link
              to="/schedule-call"
              onClick={handleScrollTop}
              className="
              mt-14
              inline-flex
              items-center
              gap-4
              rounded-full
              border
              border-white/[0.08]
              px-8
              py-4
              backdrop-blur-xl

              hover:bg-white
              hover:text-black
              hover:px-10

              transition-all
              duration-700
              "
            >
              Start Your Project

              <ArrowUpRight size={18}/>
            </Link>
          </div>

          {/* RIGHT */}

          <div
            className="
            lg:col-span-6
            lg:col-start-7
            grid
            sm:grid-cols-3
            gap-16
            "
          >
            {/* Pages */}

            <div>

              <p
                className="
                text-[10px]
                uppercase
                tracking-[0.3em]
                text-white/20
                "
              >
                Pages
              </p>

              <div className="mt-8 space-y-5">

                {footerNavLinks.map(item=>(
                  <Link
                    key={item.name}
                    to={item.path}
                    onClick={handleScrollTop}
                    className="
                    block
                    text-[15px]
                    text-white/45

                    hover:text-white
                    hover:translate-x-[5px]

                    transition-all
                    duration-500
                    "
                  >
                    {item.name}
                  </Link>
                ))}

              </div>

            </div>


            {/* Services */}

            <div>

              <p
                className="
                text-[10px]
                uppercase
                tracking-[0.3em]
                text-white/20
                "
              >
                Services
              </p>

              <div className="mt-8 space-y-5">

                {serviceLinks.map(service=>(
                  <Link
                    key={service.name}
                    to={service.path}
                    onClick={handleScrollTop}
                    className="
                    block
                    text-[15px]
                    text-white/45

                    hover:text-white
                    hover:translate-x-[5px]

                    transition-all
                    duration-500
                    "
                  >
                    {service.name}
                  </Link>
                ))}

              </div>

            </div>


            {/* Contact */}

            <div>

              <p
                className="
                text-[10px]
                uppercase
                tracking-[0.3em]
                text-white/20
                "
              >
                Contact
              </p>

              <div className="mt-8 space-y-7">

                <a
                  href={`mailto:${contactInfo.email}`}
                  className="
                  flex
                  items-center
                  gap-4
                  text-white/45
                  hover:text-white
                  transition-all
                  "
                >
                  <Mail
                    size={16}
                    className="
                    text-[#C95B5B]
                    "
                  />

                  {contactInfo.email}
                </a>


                <a
                  href={`https://wa.me/${contactInfo.phone}`}
                  className="
                  flex
                  items-center
                  gap-4
                  text-white/45
                  hover:text-white
                  "
                >
                  <FaWhatsapp
                    size={18}
                    className="
                    text-[#6FCF97]
                    "
                  />

                  {contactInfo.phone}
                </a>


                <div
                  className="
                  flex
                  items-center
                  gap-4
                  text-white/45
                  "
                >
                  <MapPin
                    size={16}
                    className="
                    text-[#C4A57B]
                    "
                  />

                  {contactInfo.location}
                </div>

              </div>

            </div>

          </div>
        </div>

        {/* Bottom */}

        <div
          className="
          mt-32
          pt-12
          border-t
          border-white/[0.04]
          flex
          flex-col
          gap-10
          lg:flex-row
          lg:justify-between
          lg:items-end
          "
        >
          {/* Social */}

          <div>

            <p
              className="
              mb-6
              text-[10px]
              uppercase
              tracking-[0.3em]
              text-white/20
              "
            >
              Follow
            </p>

            <div className="flex gap-8">

              {socialLinks.map(item=>(

                <a
                  key={item.name}
                  href={item.path}
                  target="_blank"
                  rel="noreferrer"
                  className="
                  group
                  flex
                  items-center
                  gap-3
                  text-white/30

                  hover:text-white

                  transition-all
                  duration-500
                  "
                >
                  <span
                    className="
                    text-[18px]
                    group-hover:-translate-y-[2px]
                    transition-all
                    "
                  >
                    {socialIcons[item.name]}
                  </span>

                  <span
                    className="
                    text-[14px]
                    "
                  >
                    {item.name}
                  </span>

                </a>

              ))}

            </div>

          </div>

          {/* Closing */}

          <div className="lg:text-right">

            <p
              className="
              text-[13px]
              uppercase
              tracking-[0.14em]
              text-white/14
              "
            >
              Designed to elevate perception.
            </p>

            <p className="mt-5 text-sm text-white/22">
              {footerMeta.copyright}
            </p>

            <p className="mt-2 text-sm text-white/15">
              {footerMeta.tagline}
            </p>

          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;