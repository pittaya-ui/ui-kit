import React from "react";

import { cn } from "@/lib/utils";

interface StepperStep {
  title: string;
  description?: React.ReactNode;
  children?: React.ReactNode;
}

interface StepperProps {
  steps: StepperStep[];
  className?: string;
}

export function Stepper({ steps, className }: StepperProps) {
  return (
    <div className={cn(className)}>
      {steps.map((step, index) => (
        <div key={index} className="relative flex gap-6">
          <div className="flex flex-col items-center">
            <div className="bg-foreground text-background flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-semibold">
              {index + 1}
            </div>
            {index < steps.length - 1 && (
              <div className="bg-border min-h-16 w-[2px] flex-1" />
            )}
          </div>

          <div
            className={cn("flex-1 pb-8", index === steps.length - 1 && "pb-0")}
          >
            <h3 className="mb-3 text-xl font-semibold">{step.title}</h3>
            {step.description && (
              <div className="text-muted-foreground text-base leading-relaxed">
                {step.description}
              </div>
            )}
            {step.children && <div className="mt-4">{step.children}</div>}
          </div>
        </div>
      ))}
    </div>
  );
}
