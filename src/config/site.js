// src/config/site.js
export const SITE = {
  name: "Rizq",
  tagline: "Delightfully Delicious",
  whatsapp: "8801XXXXXXXXX", // ⚠️ Replace with real number later
  whatsappMessage: "Hello Rizq, I'd like to inquire about your catering services.",
  email: "info@rizq.com.bd",
  address: "House 254, Road 3, Baridhara DOHS, Dhaka, Bangladesh",
  social: {
    facebook: "https://facebook.com/rizq",
    instagram: "https://instagram.com/rizq",
  },
};

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  {
    label: "Services",
    href: "/services",
    dropdown: [
      { label: "Wedding Ceremonies", href: "/services#weddings" },
      { label: "Social Events", href: "/services#social" },
      { label: "Corporate Events", href: "/services#corporate" },
      { label: "Industrial Catering", href: "/services#industrial" },
    ],
  },
  { label: "The Menus", href: "/menus" },
  { label: "Venues", href: "/venues", comingSoon: true },
  { label: "Gallery", href: "/gallery" },
];
