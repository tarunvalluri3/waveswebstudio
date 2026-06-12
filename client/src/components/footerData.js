// footerData.js

import { servicesData } from "../components/services/servicesData";

// ---------------------
// Main Navigation
// ---------------------

export const footerNavLinks = [
  {
    name:"Home",
    path:"/"
  },
  {
    name:"Services",
    path:"/services"
  },
  {
    name:"Pricing",
    path:"/pricing"
  },
  {
    name:"Contact",
    path:"/contact"
  }
]

// ---------------------
// Dynamic Service Links
// ---------------------

export const serviceLinks = servicesData.map(
  (service) => ({
    name: service.title,
    path: `/services?service=${service.id}`,
  })
);

// ---------------------
// Contact Details
// ---------------------

export const contactInfo = {
  email: "waveswebstudio99@gmail.com",

  phone: "+91   6303896249",

  location: "Hyderabad, India",
};

// ---------------------
// Social Links
// ---------------------

export const socialLinks = [
  {
    name: "Instagram",
    path: "https://instagram.com",
  },

  {
    name: "LinkedIn",
    path: "https://linkedin.com",
  },

  {
    name: "X",
    path: "https://x.com",
  },
];

// ---------------------
// Footer Bottom
// ---------------------

export const footerMeta = {
  copyright:
    `© ${new Date().getFullYear()} Waves Web Studio`,

  tagline:
    "Designed with precision.",
};