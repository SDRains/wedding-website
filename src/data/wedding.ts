// All of the site's copy lives here so it can be edited in one place.
// Anything in [square brackets] is a placeholder waiting on real details.

export const couple = {
  first: "Stephen",
  second: "Katherine",
  monogram: "S & K",
};

export const wedding = {
  // Ceremony start, Pacific time — drives the countdown.
  ceremonyIso: "2027-02-20T16:30:00-08:00",
  longDate: "Saturday, February 20, 2027",
  shortDate: "Sat · Feb 20, 2027",
  numericDate: "02 · 20 · 2027",
  ceremonyTime: "4:30 PM",
  doorsOpen: "4:00 PM",
  seatedBy: "4:20",
  city: "San Diego",
  region: "California",
  rsvpBy: "January 8, 2027",
};

export const venue = {
  name: "The Sinclair on G Street",
  street: "643 G St",
  cityLine: "San Diego, CA 92101",
  mapsUrl: "https://maps.app.goo.gl/7K4uTRcqj4BkxzZa8",
};

export const heroPhoto = {
  src: "/images/engagement-hero.jpg",
  alt: "Stephen and Katherine embracing in front of the Botanical Building at Balboa Park",
};

export const dressCode = {
  title: "Formal",
  body: "We ask that guests join us in formal attire. Think suits & ties or floor-length and midi dresses.",
};

export type Hotel = { name: string; area: string; distance: string; url: string };

export const hotels: Hotel[] = [
  { name: "[Hotel name]", area: "[Neighborhood]", distance: "[X] min from venue", url: "" },
  { name: "[Hotel name]", area: "[Neighborhood]", distance: "[X] min from venue", url: "" },
  { name: "[Hotel name]", area: "[Neighborhood]", distance: "[X] min from venue", url: "" },
];

export type Faq = { q: string; a: string; showHotels?: boolean };
export type FaqSection = { eyebrow: string; title: string; items: Faq[] };

export const faqSections: FaqSection[] = [
  {
    eyebrow: "The essentials",
    title: "The day itself",
    items: [
      {
        q: "What is the dress code?",
        a: "We ask that guests join us in formal attire. Think suits & ties or floor-length and midi dresses. San Diego evenings in February can be cool, so we recommend bringing a wrap or light jacket. The venue is indoors.",
      },
      {
        q: "Can I bring a plus-one?",
        a: "We’re only able to accommodate the guests named on your invitation. If your invitation includes a guest, you can add their name on the RSVP form.",
      },
      {
        q: "What time should I arrive?",
        a: `Doors open at ${wedding.doorsOpen} and the ceremony begins at ${wedding.ceremonyTime}. Please don’t arrive before 4:00 — we’ll still be getting everything ready for you.`,
      },
      {
        q: "Is there a hotel block?",
        a: "We don’t have a hotel block, but here are a few hotels close to the venue that we recommend:",
        showHotels: true,
      },
    ],
  },
  {
    eyebrow: "Good to know",
    title: "Travel & logistics",
    items: [
      {
        q: "When do I need to RSVP by?",
        a: `Please respond by ${wedding.rsvpBy} so we can finalize numbers with our venue.`,
      },
      {
        q: "Is there parking at the venue?",
        a: "We recommend taking an Uber to the venue as parking can be limited. The closest parking structure is Park It On Market, located at 614 Market St, San Diego, CA 92101. Rates are currently $1/hour and credit/debit cards are accepted.",
      },
      {
        q: "Are children welcome?",
        a: "We ask that only children named in your invitation are invited to join us.",
      },
      {
        q: "Is the celebration indoors or outdoors?",
        a: "Ceremony and reception are both indoors.",
      },
      {
        q: "I’m flying in. Which airport is closest?",
        a: "San Diego International Airport (SAN) is the closest and the venue is approximately 15 minutes from the airport.",
      },
      {
        q: "Who should I contact with questions?",
        a: "Reach out to us at kvsrwedding@gmail.com, we’re happy to help.",
      },
    ],
  },
];

export type RegistryItem = {
  icon: "gift" | "home" | "plane";
  name: string;
  blurb: string;
  cta: string;
  url: string; // leave empty until the registry is live
};

export const registry = {
  intro:
    "Having you there to celebrate with us is the greatest gift of all. For those who have asked, we’re putting together a registry and will share it here soon.",
  items: [
    { icon: "gift", name: "[Registry store]", blurb: "[A line about what’s on this list.]", cta: "View registry", url: "" },
    { icon: "home", name: "[Registry store]", blurb: "[A line about what’s on this list.]", cta: "View registry", url: "" },
    {
      icon: "plane",
      name: "[Honeymoon or experience fund]",
      blurb: "[Optional — a fund for a trip or experience together.]",
      cta: "Contribute",
      url: "",
    },
  ] satisfies RegistryItem[],
};

export const nav = [
  { href: "/", label: "Home" },
  { href: "/faq", label: "FAQ" },
  { href: "/registry", label: "Registry" },
  { href: "/rsvp", label: "RSVP" },
];
