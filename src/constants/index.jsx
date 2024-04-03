import { SocialMediaProfiles } from "@/components/SocialMedia";

export const navigation = [
  {
    title: "Our Works",
    links: [
      { title: "ZOBOX AI Platform", href: "/work/" },
      { title: "Crew Planning Systems", href: "/work/" },
      { title: "Customer-Specific Solutions", href: "/work/" },
      {
        title: (
          <>
            See all <span aria-hidden="true">&rarr;</span>
          </>
        ),
        href: "/work",
      },
    ],
  },
  {
    title: "Company",
    links: [
      { title: "About", href: "/about" },
      { title: "Process", href: "/process" },
      { title: "Blog", href: "/blog" },
      { title: "Contact us", href: "/contact" },
    ],
  },
  {
    title: "Connect",
    links: SocialMediaProfiles,
  },
];
