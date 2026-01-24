import { OrbitImages } from "@/components/ui/orbit-images";
import { createComponentDoc } from "@/helpers/component-doc";
import type { ComponentDoc } from "@/lib/docs/types";

export const orbitImagesDoc: ComponentDoc = createComponentDoc({
  slug: "orbit-images",
  metadata: {
    name: "Orbit images",
    description:
      "A scroll-activated orbit animation that places images around concentric circles and keeps them rotating once fully visible.",
    category: "Components",
    status: "stable",
  },
  sections: [
    {
      id: "when-to-use",
      title: "When to use",
      level: 2,
      content: (
        <div className="text-muted-foreground space-y-4 text-base leading-relaxed">
          <p>
            Use this orbit animation to showcase testimonials, team avatars, or
            brand logos in a dynamic way that reacts to the user&apos;s scroll
            position.
          </p>
          <p>
            It is ideal for hero sections where you want to highlight motion and
            visual storytelling without relying on heavy video assets.
          </p>
        </div>
      ),
    },
    {
      id: "best-practices",
      title: "Best practices",
      level: 2,
      content: (
        <div className="text-muted-foreground space-y-4 text-base leading-relaxed">
          <ul className="list-disc space-y-2 pl-5">
            <li>
              Provide at least four images to ensure the orbit feels balanced
              and avoid uneven clustering.
            </li>
            <li>
              Prefer square assets with generous borders to preserve clarity in
              smaller device breakpoints.
            </li>
            <li>
              Combine the component with contrasting background colors so the
              animated borders remain visible in both light and dark mode.
            </li>
          </ul>
        </div>
      ),
    },
    {
      id: "accessibility",
      title: "Accessibility",
      level: 2,
      content: (
        <div className="text-muted-foreground space-y-4 text-base leading-relaxed">
          <p>
            Ensure that every orbit image includes descriptive alternative text
            so screen readers can communicate who or what is represented in the
            animation.
          </p>
          <p>
            The call-to-action button inherits focus styles from the design
            system. Keep the contrast ratio high and verify that keyboard users
            can reach the button without interference from the animated layers.
          </p>
          <p>
            Avoid relying solely on motion to convey meaning. Pair the orbit
            with supporting copy that clarifies the intent of the showcased
            community or logos.
          </p>
        </div>
      ),
    },
  ],
  props: [
    {
      name: "title",
      type: "string",
      required: true,
      description:
        "Supporting copy rendered inside the orbit to reinforce the visual message.",
    },
    {
      name: "buttonText",
      type: "string",
      required: true,
      description: "Call to action label displayed below the orbit title.",
    },
    {
      name: "classNameButton",
      type: "string",
      description: "Tailwind classes to extend the CTA button styling.",
    },
    {
      name: "outsideBorderColor",
      type: "string",
      description:
        "Utility classes to customize the outer circle border color.",
      defaultValue: "border-rose-400/60",
    },
    {
      name: "middleBorderColor",
      type: "string",
      description:
        "Utility classes to customize the middle circle border color.",
      defaultValue: "border-rose-400/80",
    },
    {
      name: "innerBorderColor",
      type: "string",
      description:
        "Utility classes to customize the inner circle border color.",
      defaultValue: "border-rose-400",
    },
    {
      name: "images",
      type: "string[]",
      required: true,
      description:
        "List of image URLs to distribute evenly around the orbit. Accepts any length.",
    },
    {
      name: "autoPlay",
      type: "boolean",
      description:
        "When true, starts the animation immediately without requiring scroll. Useful for previews and demos.",
      defaultValue: "false",
    },
  ],
  examples: [
    {
      id: "orbit-basic",
      title: "Basic orbit",
      description:
        "Scroll until the orbit reaches 80% of the viewport to expand the circles and trigger the rotation.",
      code: `import { OrbitImages } from "@/components/pittaya/ui/orbit-images";

const images = [
  "https://github.com/marcosvbueno.png",
  "https://github.com/lucasadsr.png",
  "https://github.com/jjgouveia.png",
  "https://github.com/marcosvbueno.png",
  "https://github.com/lucasadsr.png",
  "https://github.com/jjgouveia.png",
];

export function OrbitDemo() {
  return (
    <OrbitImages
      title="Build trust and highlight your community with a dynamic orbit."
      buttonText="Join the crew"
      images={images}
    />
  );
}`,
      preview: (
        <div className="flex h-full w-full items-center justify-center overflow-hidden">
          <div className="scale-75 lg:scale-[0.65]">
            <OrbitImages
              title="Build trust and highlight your community with a dynamic orbit."
              buttonText="Join the crew"
              autoPlay
              images={[
                "https://github.com/marcosvbueno.png",
                "https://github.com/lucasadsr.png",
                "https://github.com/jjgouveia.png",
                "https://github.com/marcosvbueno.png",
                "https://github.com/lucasadsr.png",
                "https://github.com/jjgouveia.png",
              ]}
            />
          </div>
        </div>
      ),
    },
  ],
  toc: [
    { id: "installation", title: "Installation", level: 2 },
    { id: "when-to-use", title: "When to use", level: 2 },
    { id: "best-practices", title: "Best practices", level: 2 },
    { id: "accessibility", title: "Accessibility", level: 2 },
    { id: "examples", title: "Examples", level: 2 },
    { id: "properties", title: "Properties", level: 2 },
  ],
  showcase: {
    code: `import { OrbitImages } from "@/components/pittaya/ui/orbit-images";

const images = [
  "https://github.com/marcosvbueno.png",
  "https://github.com/lucasadsr.png",
  "https://github.com/jjgouveia.png",
  "https://github.com/marcosvbueno.png",
  "https://github.com/lucasadsr.png",
  "https://github.com/jjgouveia.png",
];

export function OrbitDemo() {
  return (
    <OrbitImages
      title="Build trust and highlight your community with a dynamic orbit."
      buttonText="Join the crew"
      images={images}
    />
  );
}`,
    preview: (
      <div className="flex h-full w-full items-center justify-center overflow-hidden">
        <div className="scale-75 lg:scale-[0.65]">
          <OrbitImages
            title="Build trust and highlight your community with a dynamic orbit."
            buttonText="Join the crew"
            autoPlay
            images={[
              "https://github.com/marcosvbueno.png",
              "https://github.com/lucasadsr.png",
              "https://github.com/jjgouveia.png",
              "https://github.com/marcosvbueno.png",
              "https://github.com/lucasadsr.png",
              "https://github.com/jjgouveia.png",
            ]}
          />
        </div>
      </div>
    ),
  },
});
