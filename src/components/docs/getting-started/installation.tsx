import { InstallationSection } from "@/components/ui/installation-section";
import { Stepper } from "@/components/ui/stepper";
import {
  AnimatedSpan,
  Terminal,
  TypingAnimation,
} from "@/components/ui/terminal";
import { PageSection } from "@/lib/docs/types";

export const Installation: PageSection = {
  slug: "installation",
  metadata: {
    name: "Installation",
    description:
      "Learn how to quickly set up Pittaya UI in your project and start using its components right away.",
  },
  sections: [
    {
      id: "introduction",
      title: "",
      level: 2,
      content: (
        <Terminal className="w-full">
          <TypingAnimation>&gt; npx pittaya init</TypingAnimation>
          <AnimatedSpan className="text-muted-foreground">
            Need to install the following packages:
          </AnimatedSpan>
          <AnimatedSpan className="text-muted-foreground">
            pittaya@0.0.8
          </AnimatedSpan>
          <AnimatedSpan className="text-muted-foreground">
            Ok to proceed? (y) y
          </AnimatedSpan>
          <AnimatedSpan className="font-semibold text-blue-500">
            Welcome to Pittaya UI!
          </AnimatedSpan>
          <AnimatedSpan className="text-green-500">
            ✔ Which style would you like to use? › Default
          </AnimatedSpan>
          <AnimatedSpan className="text-green-500">
            ✔ Where is your globals.css file? … app/globals.css
          </AnimatedSpan>
          <AnimatedSpan className="text-green-500">
            ✔ Use React Server Components? … yes
          </AnimatedSpan>
          <AnimatedSpan className="text-green-500">
            ✔ Path for components? … @/components
          </AnimatedSpan>
          <AnimatedSpan className="text-green-500">
            ✔ Path for utils? … @/lib/utils
          </AnimatedSpan>
          <AnimatedSpan className="text-green-500">
            ✔ components.json created successfully!
          </AnimatedSpan>
          <AnimatedSpan className="text-green-500">
            ✔ Dependencies installed!
          </AnimatedSpan>
          <AnimatedSpan className="font-semibold text-green-500">
            ✅ Pittaya UI configured successfully!
          </AnimatedSpan>
          <AnimatedSpan className="text-blue-500">Next steps:</AnimatedSpan>
          <AnimatedSpan className="text-muted-foreground pl-2">
            npx pittaya add button - Add a component
          </AnimatedSpan>
          <AnimatedSpan className="text-muted-foreground pl-2">
            npx pittaya add --all - Add all components
          </AnimatedSpan>
        </Terminal>
      ),
    },
    {
      id: "requirements",
      title: "Requirements",
      level: 2,
      content: (
        <div className="flex flex-col items-center justify-start gap-4">
          <div className="text-muted-foreground space-y-6 text-base leading-relaxed">
            <p>
              Before installing{" "}
              <strong className="text-white">Pittaya UI</strong>, ensure that
              your project meets the following requirements:
            </p>
            <ul className="ml-6 list-disc [&>li]:mt-2">
              <li>Node.js version 14 or higher</li>
              <li>npm or yarn package manager</li>
              <li>React version 16.8 or higher</li>
            </ul>
          </div>
        </div>
      ),
    },

    {
      id: "installation-steps",
      title: "Installation Steps",
      level: 2,
      content: (
        <Stepper
          steps={[
            {
              title: "Initialize a React Project",
              description: (
                <>
                  <p>
                    Pittaya UI is fully compatible with Shadcn and extends it
                    with advanced component options. To get started, set up your
                    React project following the Shadcn Installation Guide.
                  </p>
                  <div className="bg-muted/50 border-border mt-4 rounded-lg border p-4">
                    <p className="flex items-start gap-2 text-sm">
                      <span>
                        If you already have a project compatible with Shadcn,
                        you can skip this guide.
                      </span>
                    </p>
                  </div>
                </>
              ),
            },
            {
              title: "Install Pittaya CLI",
              description:
                "Run the following command to initialize Pittaya UI in your project:",
              children: (
                <div className="space-y-4">
                  <pre className="bg-muted overflow-x-auto rounded-lg p-4">
                    <code className="text-sm">npx pittaya init</code>
                  </pre>
                  <div className="bg-muted/50 border-border rounded-lg border p-4">
                    <pre className="text-muted-foreground overflow-x-auto text-sm whitespace-pre-wrap">
                      {`Need to install the following packages:
pittaya@0.0.8
Ok to proceed? (y) y

Welcome to Pittaya UI!

✔ Which style would you like to use? › Default
✔ Where is your globals.css file? … app/globals.css
✔ Use React Server Components? … yes
✔ Path for components? … @/components
✔ Path for utils? … @/lib/utils
✔ components.json created successfully!
✔ Dependencies installed!

✅ Pittaya UI configured successfully!

Next steps:
  npx pittaya add button - Add a component
  npx pittaya add --all - Add all components`}
                    </pre>
                  </div>
                </div>
              ),
            },
            {
              title: "Add Components",
              description:
                "Once the setup is complete, you can start adding Pittaya UI components to your project:",
              children: (
                <div className="space-y-3">
                  <div>
                    <p className="text-muted-foreground mb-2 text-sm">
                      Add a specific component:
                    </p>
                    <InstallationSection
                      componentSlug={""}
                      availableCommands={{
                        npm: "npx pittaya add button",
                        yarn: "yarn add button",
                        pnpm: "pnpm dlx add button",
                      }}
                      title=""
                      description=""
                    ></InstallationSection>
                  </div>
                  <div>
                    <p className="text-muted-foreground mb-2 text-sm">
                      Or add all components at once:
                    </p>
                    <InstallationSection
                      componentSlug={""}
                      availableCommands={{
                        npm: "npx pittaya add --all",
                        yarn: "yarn add --all",
                        pnpm: "pnpm dlx add --all",
                      }}
                      title=""
                      description=""
                    ></InstallationSection>
                  </div>
                </div>
              ),
            },
            {
              title: "Start Using Components",
              description: (
                <>
                  <p>
                    You're all set! Import and use Pittaya UI components in your
                    React application:
                  </p>
                  <pre className="bg-muted mt-4 overflow-x-auto rounded-lg p-4">
                    <code className="text-sm">
                      {`import { Button } from "@/components/ui/button";

export default function App() {
  return <Button>Click me</Button>;
}`}
                    </code>
                  </pre>
                </>
              ),
            },
          ]}
        />
      ),
    },
  ],
  toc: [
    { id: "requirements", title: "Requirements", level: 2 },
    { id: "installation-steps", title: "Installation Steps", level: 2 },
  ],
};
