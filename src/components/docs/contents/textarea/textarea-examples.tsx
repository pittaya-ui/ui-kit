"use client";

import { Send } from "lucide-react";
import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

export function BasicTextareaPreview() {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Profile Settings</CardTitle>
        <CardDescription>
          Update your public profile information.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="bio">Bio</Label>
          <Textarea
            id="bio"
            placeholder="Tell us a little bit about yourself..."
            className="min-h-[100px]"
          />
          <p className="text-muted-foreground text-xs">
            You can @mention other users and organizations.
          </p>
        </div>
      </CardContent>
      <CardFooter>
        <Button>Save Changes</Button>
      </CardFooter>
    </Card>
  );
}

export function MinimalTextareaPreview() {
  return (
    <Card className="w-full max-w-sm border-0 bg-gradient-to-br from-muted/30 to-muted/10 shadow-sm backdrop-blur-sm">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-semibold">Quick Note</CardTitle>
          <div className="flex items-center gap-1.5">
            <div className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse" />
            <span className="text-xs text-muted-foreground font-medium">Saved</span>
          </div>
        </div>
      </CardHeader>
      <CardContent className="px-6">
        <Textarea
          placeholder="Start typing your thoughts..."
          className="placeholder:text-muted-foreground/40 min-h-[120px] resize-none border-0 bg-white/50 dark:bg-black/20 px-4 py-3 shadow-none focus-visible:ring-0 focus-visible:bg-white dark:focus-visible:bg-black/30 transition-colors rounded-lg"
        />
      </CardContent>
      <CardFooter className="pt-2 pb-4 px-6">
        <p className="text-xs text-muted-foreground/70">
          Auto-saves as you type
        </p>
      </CardFooter>
    </Card>
  );
}

export function ExpandingTextareaPreview() {
  const [expanded, setExpanded] = React.useState(false);
  const [value, setValue] = React.useState("");

  return (
    <Card className="w-full max-w-sm border-0 shadow-md ring-1 ring-black/5 dark:ring-white/10">
      <CardHeader className="pb-4">
        <CardTitle className="text-muted-foreground text-sm font-medium tracking-wide uppercase">
          Comment
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="relative">
          <Textarea
            placeholder="Write a comment..."
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onFocus={() => setExpanded(true)}
            onBlur={() => !value && setExpanded(false)}
            className={cn(
              "py-3 pr-12 resize-none transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
              expanded ? "h-32" : "h-10"
            )}
          />
          <Button
            size="icon"
            variant="ghost"
            className={cn(
              "absolute top-2 right-2 h-7 w-7 transition-opacity duration-300 flex items-center justify-center",
              expanded && value
                ? "opacity-100"
                : "pointer-events-none opacity-0"
            )}
          >
            <Send className="h-4 w-4" />
            <span className="sr-only">Send</span>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

export function ScrollableTextareaPreview() {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>License Agreement</CardTitle>
        <CardDescription>
          Please review the terms before continuing.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Textarea
          className="h-[200px] max-h-[200px] overflow-y-auto resize-none font-mono text-xs leading-relaxed"
          readOnly
          defaultValue={`MIT License

Copyright (c) 2024 UI Kit

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.`}
        />
        <div className="mt-4 flex items-center space-x-2">
          <Button className="w-full">Accept Terms</Button>
        </div>
      </CardContent>
    </Card>
  );
}
