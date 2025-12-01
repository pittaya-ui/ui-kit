import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Carousel, CarouselItem } from "@/components/ui/carousel";
import type { ComponentDoc } from "@/lib/docs/types";

export const carouselDoc: ComponentDoc = {
  slug: "carousel",
  metadata: {
    name: "Carousel",
    description:
      "An accessible and customizable carousel component built with Embla Carousel, featuring arrow navigation, dot indicators, and autoplay.",
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
            Use the Carousel when you need to display multiple images or content
            pieces sequentially, allowing users to navigate through them
            intuitively.
          </p>
          <p>
            It&apos;s ideal for image galleries, customer testimonials,
            highlighting products, or any content that benefits from sequential
            presentation with focus on one item at a time.
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
              Keep a reasonable number of slides (3-7 is ideal) to avoid
              overwhelming users.
            </li>
            <li>
              Use autoplay sparingly - allow users to control navigation when
              possible.
            </li>
            <li>
              Always provide alternative navigation controls (arrows and/or
              dots) when using autoplay.
            </li>
            <li>Ensure content is readable across different screen sizes.</li>
            <li>
              Use images with consistent dimensions to avoid abrupt layout
              shifts.
            </li>
            <li>
              Consider disabling autoplay when content requires reading or
              interaction.
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
            The component provides full keyboard navigation support through
            arrow keys (← and →), allowing users to navigate without using a
            mouse.
          </p>
          <p>
            Navigation buttons include descriptive <code>aria-label</code>{" "}
            attributes (&quot;Previous slide&quot; and &quot;Next slide&quot;),
            and dot indicators have <code>aria-current</code> to communicate the
            active slide to screen readers.
          </p>
          <p>
            When autoplay is active, it automatically pauses when the user
            interacts with the carousel, respecting the user&apos;s preference
            for manual control.
          </p>
        </div>
      ),
    },
  ],
  props: [
    {
      name: "children",
      type: "React.ReactNode",
      required: true,
      description:
        "The carousel slides. Use the CarouselItem component for each slide.",
    },
    {
      name: "className",
      type: "string",
      description: "Additional CSS classes for customizing the container.",
    },
    {
      name: "autoplay",
      type: "boolean",
      defaultValue: "false",
      description:
        "Enables automatic slide playback. Autoplay pauses when the user interacts with the carousel.",
    },
    {
      name: "autoplayInterval",
      type: "number",
      defaultValue: "3000",
      description:
        "Interval in milliseconds between automatic transitions when autoplay is active.",
    },
    {
      name: "showDots",
      type: "boolean",
      defaultValue: "true",
      description:
        "Displays dot indicators at the bottom for navigation and visual feedback of the current slide.",
    },
    {
      name: "showArrows",
      type: "boolean",
      defaultValue: "true",
      description:
        "Displays navigation buttons (arrows) on the sides to advance and go back through slides.",
    },
    {
      name: "showCounter",
      type: "boolean",
      defaultValue: "false",
      description:
        "Displays a numeric counter (e.g. 1/5) indicating the current slide and total slides.",
    },
    {
      name: "loop",
      type: "boolean",
      defaultValue: "true",
      description:
        "Allows the carousel to return to the first slide after the last and vice versa.",
    },
  ],
  examples: [
    {
      id: "product-showcase",
      title: "Product showcase",
      description:
        "Display featured products with real images, names, prices and call-to-action buttons.",
      code: `import { Button } from "@/components/ui/button";
import { Carousel, CarouselItem } from "@/components/ui/carousel";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";

const products = [
  {
    name: "Modern Furniture",
    price: "$599",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=600&fit=crop",
    category: "Home Decor",
  },
  {
    name: "Vintage Camera",
    price: "$899",
    image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=600&h=600&fit=crop",
    category: "Electronics",
  },
  {
    name: "Designer Watch",
    price: "$1,299",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&h=600&fit=crop",
    category: "Accessories",
  },
];

export function ProductCarousel() {
  return (
    <Carousel>
      {products.map((product, index) => (
        <CarouselItem key={index}>
          <div className="group relative h-[500px] overflow-hidden rounded-xl">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <p className="mb-2 text-sm font-medium uppercase tracking-wider opacity-90">
                {product.category}
              </p>
              <h3 className="mb-3 text-3xl font-bold">{product.name}</h3>
              <p className="mb-6 text-4xl font-bold">{product.price}</p>
              <Button variant="secondary" size="lg">
                <ShoppingCart className="mr-2 h-5 w-5" />
                Add to Cart
              </Button>
            </div>
          </div>
        </CarouselItem>
      ))}
    </Carousel>
  );
}`,
      preview: (
        <Carousel>
          <CarouselItem>
            <div className="group relative h-[500px] overflow-hidden rounded-xl">
              <Image
                src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=600&fit=crop"
                alt="Modern Furniture"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              <div className="absolute right-0 bottom-0 left-0 p-8 text-white">
                <p className="mb-2 text-sm font-medium tracking-wider uppercase opacity-90">
                  Home Decor
                </p>
                <h3 className="mb-3 text-3xl font-bold">Modern Furniture</h3>
                <p className="mb-6 text-4xl font-bold">$599</p>
                <Button variant="secondary" size="lg">
                  <span className="mr-2 inline-flex h-5 w-5 items-center justify-center">
                    🛒
                  </span>
                  Add to Cart
                </Button>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="group relative h-[500px] overflow-hidden rounded-xl">
              <Image
                src="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=600&h=600&fit=crop"
                alt="Vintage Camera"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              <div className="absolute right-0 bottom-0 left-0 p-8 text-white">
                <p className="mb-2 text-sm font-medium tracking-wider uppercase opacity-90">
                  Electronics
                </p>
                <h3 className="mb-3 text-3xl font-bold">Vintage Camera</h3>
                <p className="mb-6 text-4xl font-bold">$899</p>
                <Button variant="secondary" size="lg">
                  <span className="mr-2 inline-flex h-5 w-5 items-center justify-center">
                    🛒
                  </span>
                  Add to Cart
                </Button>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="group relative h-[500px] overflow-hidden rounded-xl">
              <Image
                src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&h=600&fit=crop"
                alt="Designer Watch"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              <div className="absolute right-0 bottom-0 left-0 p-8 text-white">
                <p className="mb-2 text-sm font-medium tracking-wider uppercase opacity-90">
                  Accessories
                </p>
                <h3 className="mb-3 text-3xl font-bold">Designer Watch</h3>
                <p className="mb-6 text-4xl font-bold">$1,299</p>
                <Button variant="secondary" size="lg">
                  <span className="mr-2 inline-flex h-5 w-5 items-center justify-center">
                    🛒
                  </span>
                  Add to Cart
                </Button>
              </div>
            </div>
          </CarouselItem>
        </Carousel>
      ),
    },
    {
      id: "testimonials",
      title: "Customer testimonials",
      description:
        "Showcase customer reviews with real photos and autoplay for social proof.",
      code: `import { Carousel, CarouselItem } from "@/components/ui/carousel";
import Image from "next/image";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Product Manager at TechCorp",
    content: "This product has completely transformed our workflow. The team loves it!",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "CEO at StartupXYZ",
    content: "Outstanding quality and support. Highly recommend to anyone.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
    rating: 5,
  },
  {
    name: "Emma Wilson",
    role: "Designer at Creative Co",
    content: "Beautiful design and incredible attention to detail. Five stars!",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
    rating: 5,
  },
];

export function TestimonialsCarousel() {
  return (
    <Carousel autoplay autoplayInterval={5000} showDots={false}>
      {testimonials.map((testimonial, index) => (
        <CarouselItem key={index}>
          <div className="flex h-80 flex-col items-center justify-center rounded-xl bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950 dark:to-purple-950 p-8 text-center">
            <div className="relative mb-6 min-h-20 w-20 overflow-hidden rounded-full ring-4 ring-white dark:ring-gray-800">
              <Image
                src={testimonial.avatar}
                alt={testimonial.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="flex gap-1 mb-4">
              {[...Array(testimonial.rating)].map((_, i) => (
                <span key={i} className="text-yellow-400 text-xl">★</span>
              ))}
            </div>
            <p className="text-lg italic text-foreground mb-6 max-w-md leading-relaxed">
              &quot;{testimonial.content}&quot;
            </p>
            <div>
              <p className="font-semibold text-foreground text-lg">{testimonial.name}</p>
              <p className="text-sm text-muted-foreground">{testimonial.role}</p>
            </div>
          </div>
        </CarouselItem>
      ))}
    </Carousel>
  );
}`,
      preview: (
        <Carousel
          autoplay
          autoplayInterval={5000}
          showDots={false}
          className="mx-5"
        >
          <CarouselItem>
            <div className="flex h-80 flex-col items-center justify-center rounded-xl bg-gradient-to-br from-indigo-50 to-purple-50 p-8 text-center dark:from-indigo-950 dark:to-purple-950">
              <div className="relative mb-6 min-h-20 w-20 overflow-hidden rounded-full ring-4 ring-white dark:ring-gray-800">
                <Image
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop"
                  alt="Sarah Johnson"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="mb-4 flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-xl text-yellow-400">
                    ★
                  </span>
                ))}
              </div>
              <p className="text-foreground mb-6 max-w-md text-lg leading-relaxed italic">
                &quot;This product has completely transformed our workflow. The
                team loves it!&quot;
              </p>
              <div>
                <p className="text-foreground text-lg font-semibold">
                  Sarah Johnson
                </p>
                <p className="text-muted-foreground text-sm">
                  Product Manager at TechCorp
                </p>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="flex h-80 flex-col items-center justify-center rounded-xl bg-gradient-to-br from-indigo-50 to-purple-50 p-8 text-center dark:from-indigo-950 dark:to-purple-950">
              <div className="relative mb-6 min-h-20 w-20 overflow-hidden rounded-full ring-4 ring-white dark:ring-gray-800">
                <Image
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop"
                  alt="Michael Chen"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="mb-4 flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-xl text-yellow-400">
                    ★
                  </span>
                ))}
              </div>
              <p className="text-foreground mb-6 max-w-md text-lg leading-relaxed italic">
                &quot;Outstanding quality and support. Highly recommend to
                anyone.&quot;
              </p>
              <div>
                <p className="text-foreground text-lg font-semibold">
                  Michael Chen
                </p>
                <p className="text-muted-foreground text-sm">
                  CEO at StartupXYZ
                </p>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="flex h-80 flex-col items-center justify-center rounded-xl bg-gradient-to-br from-indigo-50 to-purple-50 p-8 text-center dark:from-indigo-950 dark:to-purple-950">
              <div className="relative mb-6 min-h-20 w-20 overflow-hidden rounded-full ring-4 ring-white dark:ring-gray-800">
                <Image
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop"
                  alt="Emma Wilson"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="mb-4 flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-xl text-yellow-400">
                    ★
                  </span>
                ))}
              </div>
              <p className="text-foreground mb-6 max-w-md text-lg leading-relaxed italic">
                &quot;Beautiful design and incredible attention to detail. Five
                stars!&quot;
              </p>
              <div>
                <p className="text-foreground text-lg font-semibold">
                  Emma Wilson
                </p>
                <p className="text-muted-foreground text-sm">
                  Designer at Creative Co
                </p>
              </div>
            </div>
          </CarouselItem>
        </Carousel>
      ),
    },
    {
      id: "promotional-banners",
      title: "Promotional banners",
      description:
        "Display marketing campaigns with stunning background images and compelling CTAs.",
      code: `import { Button } from "@/components/ui/button";
import { Carousel, CarouselItem } from "@/components/ui/carousel";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const campaigns = [
  {
    title: "Summer Collection",
    subtitle: "Up to 50% Off",
    description: "Limited time offer on selected items",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&h=400&fit=crop",
    cta: "Shop Now",
  },
  {
    title: "New Arrivals",
    subtitle: "Fresh & Trending",
    description: "Discover the latest styles",
    image: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=1200&h=400&fit=crop",
    cta: "Explore",
  },
  {
    title: "Premium Quality",
    subtitle: "Crafted to Perfection",
    description: "Experience luxury and comfort",
    image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1200&h=400&fit=crop",
    cta: "Discover",
  },
];

export function PromotionalCarousel() {
  return (
    <Carousel autoplay autoplayInterval={4000} showDots={false} showCounter>
      {campaigns.map((campaign, index) => (
        <CarouselItem key={index}>
          <div className="relative h-72 overflow-hidden rounded-xl">
            <Image
              src={campaign.image}
              alt={campaign.title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/50" />
            <div className="absolute inset-0 flex items-center px-12">
              <div className="max-w-2xl text-white">
                <h2 className="text-5xl font-bold mb-2">{campaign.title}</h2>
                <p className="text-2xl font-semibold mb-2">{campaign.subtitle}</p>
                <p className="text-white/90 mb-6 text-lg">{campaign.description}</p>
                <Button variant="secondary" size="lg">
                  {campaign.cta}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </CarouselItem>
      ))}
    </Carousel>
  );
}`,
      preview: (
        <Carousel
          autoplay
          autoplayInterval={4000}
          showDots={false}
          showCounter
          className="mx-5"
        >
          <CarouselItem>
            <div className="relative h-72 overflow-hidden rounded-xl">
              <Image
                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&h=400&fit=crop"
                alt="Summer Collection"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/50" />
              <div className="absolute inset-0 flex items-center px-12">
                <div className="max-w-2xl text-white">
                  <h2 className="mb-2 text-5xl font-bold">Summer Collection</h2>
                  <p className="mb-2 text-2xl font-semibold">Up to 50% Off</p>
                  <p className="mb-6 text-lg text-white/90">
                    Limited time offer on selected items
                  </p>
                  <Button variant="secondary" size="lg">
                    Shop Now
                    <span className="ml-2 inline-flex h-5 w-5 items-center justify-center">
                      →
                    </span>
                  </Button>
                </div>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="relative h-72 overflow-hidden rounded-xl">
              <Image
                src="https://images.unsplash.com/photo-1445205170230-053b83016050?w=1200&h=400&fit=crop"
                alt="New Arrivals"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/50" />
              <div className="absolute inset-0 flex items-center px-12">
                <div className="max-w-2xl text-white">
                  <h2 className="mb-2 text-5xl font-bold">New Arrivals</h2>
                  <p className="mb-2 text-2xl font-semibold">
                    Fresh & Trending
                  </p>
                  <p className="mb-6 text-lg text-white/90">
                    Discover the latest styles
                  </p>
                  <Button variant="secondary" size="lg">
                    Explore
                    <span className="ml-2 inline-flex h-5 w-5 items-center justify-center">
                      →
                    </span>
                  </Button>
                </div>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="relative h-72 overflow-hidden rounded-xl">
              <Image
                src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1200&h=400&fit=crop"
                alt="Premium Quality"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/50" />
              <div className="absolute inset-0 flex items-center px-12">
                <div className="max-w-2xl text-white">
                  <h2 className="mb-2 text-5xl font-bold">Premium Quality</h2>
                  <p className="mb-2 text-2xl font-semibold">
                    Crafted to Perfection
                  </p>
                  <p className="mb-6 text-lg text-white/90">
                    Experience luxury and comfort
                  </p>
                  <Button variant="secondary" size="lg">
                    Discover
                    <span className="ml-2 inline-flex h-5 w-5 items-center justify-center">
                      →
                    </span>
                  </Button>
                </div>
              </div>
            </div>
          </CarouselItem>
        </Carousel>
      ),
    },
    {
      id: "image-gallery",
      title: "Image gallery",
      description:
        "Showcase portfolio work or project images with clean overlay design.",
      code: `import { Carousel, CarouselItem } from "@/components/ui/carousel";
import Image from "next/image";

const projects = [
  {
    title: "Architecture Studio",
    category: "Interior Design",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&h=600&fit=crop",
  },
  {
    title: "Urban Landscape",
    category: "Photography",
    image: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=800&h=600&fit=crop",
  },
  {
    title: "Minimal Workspace",
    category: "Product Design",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&h=600&fit=crop",
  },
  {
    title: "Fashion Editorial",
    category: "Art Direction",
    image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800&h=600&fit=crop",
  },
];

export function GalleryCarousel() {
  return (
    <Carousel showDots={false} showArrows loop={false}>
      {projects.map((project, index) => (
        <CarouselItem key={index}>
          <div className="group relative h-96 overflow-hidden rounded-xl cursor-pointer">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-100 transition-opacity duration-300 group-hover:opacity-100" />
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white transform transition-transform duration-300">
              <p className="text-sm font-medium uppercase tracking-wider mb-2 opacity-90">
                {project.category}
              </p>
              <h3 className="text-4xl font-bold">{project.title}</h3>
            </div>
          </div>
        </CarouselItem>
      ))}
    </Carousel>
  );
}`,
      preview: (
        <Carousel showDots={false} showArrows loop={false} className="mx-5">
          <CarouselItem>
            <div className="group relative h-96 cursor-pointer overflow-hidden rounded-xl">
              <Image
                src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&h=600&fit=crop"
                alt="Architecture Studio"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-100 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="absolute right-0 bottom-0 left-0 transform p-8 text-white transition-transform duration-300">
                <p className="mb-2 text-sm font-medium tracking-wider uppercase opacity-90">
                  Interior Design
                </p>
                <h3 className="text-4xl font-bold">Architecture Studio</h3>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="group relative h-96 cursor-pointer overflow-hidden rounded-xl">
              <Image
                src="https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=800&h=600&fit=crop"
                alt="Urban Landscape"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-100 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="absolute right-0 bottom-0 left-0 transform p-8 text-white transition-transform duration-300">
                <p className="mb-2 text-sm font-medium tracking-wider uppercase opacity-90">
                  Photography
                </p>
                <h3 className="text-4xl font-bold">Urban Landscape</h3>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="group relative h-96 cursor-pointer overflow-hidden rounded-xl">
              <Image
                src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&h=600&fit=crop"
                alt="Minimal Workspace"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-100 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="absolute right-0 bottom-0 left-0 transform p-8 text-white transition-transform duration-300">
                <p className="mb-2 text-sm font-medium tracking-wider uppercase opacity-90">
                  Product Design
                </p>
                <h3 className="text-4xl font-bold">Minimal Workspace</h3>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="group relative h-96 cursor-pointer overflow-hidden rounded-xl">
              <Image
                src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800&h=600&fit=crop"
                alt="Fashion Editorial"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-100 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="absolute right-0 bottom-0 left-0 transform p-8 text-white transition-transform duration-300">
                <p className="mb-2 text-sm font-medium tracking-wider uppercase opacity-90">
                  Art Direction
                </p>
                <h3 className="text-4xl font-bold">Fashion Editorial</h3>
              </div>
            </div>
          </CarouselItem>
        </Carousel>
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
};
