"use client";

import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

export function BasicProgressPreview() {
  return (
    <div className="w-full max-w-55 space-y-2">
      <div className="flex justify-between text-sm">
        <span className="text-muted-foreground">Progress</span>
        <span className="font-medium">65%</span>
      </div>
      <Progress value={65} />
    </div>
  );
}

export function FileUploadProgressPreview() {
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
    <div className="w-full max-w-55 space-y-2">
      <div className="flex justify-between gap-4 text-sm">
        <span className="text-muted-foreground">Uploading document.pdf</span>
        <span className="font-medium">{progress}%</span>
      </div>
      <Progress value={progress} />
      {progress === 100 && (
        <p className="text-sm text-green-600">Upload complete!</p>
      )}
    </div>
  );
}

export function ProgressVariantsPreview() {
  return (
    <div className="w-full max-w-55 space-y-6">
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
}

export function MultiStepProgressPreview() {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 4;
  const progress = (currentStep / totalSteps) * 100;

  return (
    <div className="w-full max-w-55 space-y-4">
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
          variant={"secondary"}
          onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
          disabled={currentStep === 1}
        >
          Previous
        </Button>
        <Button
          onClick={() => setCurrentStep(Math.min(totalSteps, currentStep + 1))}
          disabled={currentStep === totalSteps}
        >
          {currentStep === totalSteps ? "Complete" : "Next"}
        </Button>
      </div>
    </div>
  );
}
