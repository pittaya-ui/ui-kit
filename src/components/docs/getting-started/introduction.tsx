import Image from "next/image";

import { PageSection } from "@/lib/docs/types";

export const Introduction: PageSection = {
  slug: "introduction",
  metadata: {
    name: "Introduction",
    description:
      "Build modern and engaging interfaces with components you can copy and paste directly into your applications.",
  },
  sections: [
    {
      id: "about",
      title: "About Pittaya UI",
      level: 2,
      content: (
        <div className="text-muted-foreground space-y-6 text-base leading-relaxed">
          <p>
            <span className="text-pittaya">Pittaya UI</span> is a reusable component library created by Brazilian
            developers  <Image width={24} height={24} src="https://img.icons8.com/emoji/48/brazil-emoji.png" alt="brazil-emoji" className="inline-block" />, designed to help you build elegant, consistent, and
            efficient user interfaces with ease.
          </p>
          <p>
            It provides components, blocks, and templates focused on creating
            smooth, professional, user-centered experiences — ideal for landing
            pages, dashboards, and digital products of any kind.
          </p>
        </div>
      ),
    },
    {
      id: "principles",
      title: "Principles",
      level: 2,
      content: (
        <div className="text-muted-foreground space-y-6 text-base leading-relaxed">
          <p>
            We believe that great design is an essential part of great software. It
            communicates care, professionalism, and immediately builds trust between
            you and someone discovering your product for the first time.
          </p>
          <p>
            In the digital world, <strong className="text-foreground font-medium">trust comes first</strong>.
            Before taking action, a visitor naturally asks themselves:
          </p>
          <ul className="ml-6 list-disc [&>li]:mt-2">
            <li>“Is this solution reliable?”</li>
            <li>“Does it feel professional?”</li>
            <li>“Do the creators care about quality?”</li>
          </ul>
          <p>
            <strong className="text-foreground font-medium">Poor design signals neglect.</strong> It looks
            improvised, unstable, and creates uncertainty.
          </p>
          <p>
            <strong className="text-foreground font-medium">Good design, on the other hand, shows that there is a committed team behind the product.</strong> That every detail matters. That the user experience is a priority.
          </p>
          <p>
            When visitors notice this level of attention, they instinctively
            think:
          </p>
          <blockquote className="border-l-2 pl-6 italic text-foreground">
            “If they care this much about the details, the product must be solid too.”
          </blockquote>
          <p>
            Pittaya UI was created with this mindset: combining simplicity,
            beauty, and a modern Brazilian identity to help teams build products
            that inspire trust at first glance.
          </p>
        </div>
      ),
    },
  ],
  toc: [
    {
      id: "about",
      title: "About Pittaya UI",
      level: 2,
    },
    {
      id: "principles",
      title: "Principles",
      level: 2,
    },
  ],
};
