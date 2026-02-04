import { createComponentDoc } from "@/helpers/component-doc";
import type { ComponentDoc } from "@/lib/docs/types";

import {
  BasicProgressPreview,
  FileUploadProgressPreview,
  MultiStepProgressPreview,
  ProgressVariantsPreview,
} from "./progress-examples";

export const progressDoc: ComponentDoc = createComponentDoc({
  slug: "progress",
  metadata: {
    name: "Progress",
    description:
      "An accessible progress indicator that displays the completion status of a task or operation.",
    category: "Feedback",
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
            Use Progress when you need to display the completion status of a
            task, such as file uploads, form completion, multi-step processes,
            or any operation with a measurable progress percentage.
          </p>
          <p>
            The component is ideal for providing visual feedback to users about
            ongoing operations, helping them understand how much of a task has
            been completed and how much remains.
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
              Always provide a label or description to indicate what progress is
              being tracked.
            </li>
            <li>
              Use the appropriate variant to communicate the nature of the
              operation (default for standard tasks, success for completed
              operations, destructive for critical tasks).
            </li>
            <li>
              Display the percentage value alongside the progress bar for better
              clarity when possible.
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
            The Progress component uses Radix UI&apos;s{" "}
            <code>@radix-ui/react-progress</code> primitive, which provides
            proper ARIA attributes including{" "}
            <code>role=&quot;progressbar&quot;</code>,{" "}
            <code>aria-valuemin</code>, <code>aria-valuemax</code>, and{" "}
            <code>aria-valuenow</code> to ensure screen readers can accurately
            announce the progress status.
          </p>
          <p>
            When implementing, consider adding <code>aria-label</code> or{" "}
            <code>aria-labelledby</code> to provide context about what is
            progressing, especially in cases where multiple progress indicators
            are visible simultaneously.
          </p>
        </div>
      ),
    },
  ],
  props: [
    {
      name: "value",
      type: "number",
      defaultValue: "0",
      description:
        "The current progress value (0-100). Controls the fill percentage of the progress bar.",
    },
    {
      name: "variant",
      type: '"default" | "secondary" | "destructive" | "success"',
      defaultValue: '"default"',
      description:
        "Defines the visual style of the progress bar. Use 'default' for standard operations, 'success' for completed tasks, 'destructive' for critical operations, or 'secondary' for secondary operations.",
    },
    {
      name: "max",
      type: "number",
      defaultValue: "100",
      description:
        "The maximum progress value. Defaults to 100 for percentage-based progress.",
    },
    {
      name: "className",
      type: "string",
      description:
        "Additional CSS classes to apply to the progress root element.",
    },
  ],
  examples: [
    {
      id: "basic",
      title: "Basic usage",
      description: "A simple progress bar showing 65% completion.",
      code: `import { Progress } from "@/components/pittaya/ui/progress";

export function BasicProgress() {
  return (
    <div className="space-y-2">
      <div className="flex justify-between text-sm">
        <span className="text-muted-foreground">Progress</span>
        <span className="font-medium">65%</span>
      </div>
      <Progress value={65} />
    </div>
  );
}`,
      preview: <BasicProgressPreview />,
    },
    {
      id: "file-upload",
      title: "File upload simulation",
      description:
        "An animated progress bar simulating a file upload operation with automatic progression.",
      code: `import { Progress } from "@/components/pittaya/ui/progress";
import { useEffect, useState } from "react";

export function FileUploadProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prev + 1;
      });
    }, 50);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="space-y-2">
      <div className="flex justify-between text-sm">
        <span className="text-muted-foreground">Uploading document.pdf</span>
        <span className="font-medium">{progress}%</span>
      </div>
      <Progress value={progress} />
      {progress === 100 && (
        <p className="text-sm text-green-600">Upload complete!</p>
      )}
    </div>
  );
}`,
      preview: <FileUploadProgressPreview />,
    },
    {
      id: "variants",
      title: "Progress variants",
      description:
        "Different visual styles for various use cases and contexts.",
      code: `import { Progress } from "@/components/pittaya/ui/progress";

export function ProgressVariants() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">Default progress</span>
          <span className="font-medium">75%</span>
        </div>
        <Progress value={75} variant="default" />
      </div>

      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">Success progress</span>
          <span className="font-medium">100%</span>
        </div>
        <Progress value={100} variant="success" />
      </div>

      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">Secondary progress</span>
          <span className="font-medium">50%</span>
        </div>
        <Progress value={50} variant="secondary" />
      </div>

      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">Destructive progress</span>
          <span className="font-medium">30%</span>
        </div>
        <Progress value={30} variant="destructive" />
      </div>
    </div>
  );
}`,
      preview: <ProgressVariantsPreview />,
    },
    {
      id: "multi-step",
      title: "Multi-step form progress",
      description:
        "Progress indicator for a multi-step form showing current completion status.",
      code: `import { Progress } from "@/components/pittaya/ui/progress";
import { Button } from "@/components/pittaya/ui/button";
import { useState } from "react";

export function MultiStepProgress() {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 4;
  const progress = (currentStep / totalSteps) * 100;

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">
            Step {currentStep} of {totalSteps}
          </span>
          <span className="font-medium">{Math.round(progress)}%</span>
        </div>
        <Progress value={progress} />
      </div>

      <div className="flex gap-2">
        <Button
          variant="outline"
          size="sm"
          onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
          disabled={currentStep === 1}
        >
          Previous
        </Button>
        <Button
          size="sm"
          onClick={() => setCurrentStep(Math.min(totalSteps, currentStep + 1))}
          disabled={currentStep === totalSteps}
        >
          {currentStep === totalSteps ? "Complete" : "Next"}
        </Button>
      </div>
    </div>
  );
}`,
      preview: <MultiStepProgressPreview />,
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
    code: `import { Progress } from "@/components/pittaya/ui/progress";
import { useEffect, useState } from "react";

export function FileUploadProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prev + 1;
      });
    }, 50);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="space-y-2">
      <div className="flex justify-between text-sm">
        <span className="text-muted-foreground">Uploading document.pdf</span>
        <span className="font-medium">{progress}%</span>
      </div>
      <Progress value={progress} />
      {progress === 100 && (
        <p className="text-sm text-green-600">Upload complete!</p>
      )}
    </div>
  );
}`,
    preview: <FileUploadProgressPreview />,
  },
});
