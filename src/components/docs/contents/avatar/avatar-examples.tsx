"use client";

import {
  Avatar,
  AvatarFallback,
  AvatarGroup,
  AvatarImage,
} from "@/components/ui/avatar";

export function BasicAvatarExample() {
  return (
    <Avatar>
      <AvatarImage src="https://github.com/pittaya-ui.png" alt="@pittaya-ui" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  );
}

export function AvatarSizesExample() {
  return (
    <div className="flex items-center gap-4">
      <Avatar size="sm">
        <AvatarImage
          src="https://github.com/pittaya-ui.png"
          alt="@pittaya-ui"
        />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <Avatar size="md">
        <AvatarImage
          src="https://github.com/pittaya-ui.png"
          alt="@pittaya-ui"
        />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <Avatar size="lg">
        <AvatarImage
          src="https://github.com/pittaya-ui.png"
          alt="@pittaya-ui"
        />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <Avatar size="xl">
        <AvatarImage
          src="https://github.com/pittaya-ui.png"
          alt="@pittaya-ui"
        />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </div>
  );
}

export function AvatarFallbackExample() {
  return (
    <div className="flex items-center gap-4">
      <Avatar>
        <AvatarImage src="https://invalid-url.com/image.png" alt="Invalid" />
        <AvatarFallback>JD</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback>AB</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback className="bg-primary text-primary-foreground">
          XY
        </AvatarFallback>
      </Avatar>
    </div>
  );
}

export function AvatarGroupExample() {
  return (
    <AvatarGroup max={3}>
      <Avatar>
        <AvatarImage src="https://github.com/pittaya-ui.png" alt="User 1" />
        <AvatarFallback>U1</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarImage src="https://github.com/vercel.png" alt="User 2" />
        <AvatarFallback>U2</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarImage src="https://github.com/react.png" alt="User 3" />
        <AvatarFallback>U3</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback>U4</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback>U5</AvatarFallback>
      </Avatar>
    </AvatarGroup>
  );
}

export function AvatarGroupSizesExample() {
  return (
    <div className="space-y-6">
      <div>
        <p className="text-muted-foreground mb-2 text-sm">Small</p>
        <AvatarGroup max={3} size="sm">
          <Avatar>
            <AvatarImage src="https://github.com/pittaya-ui.png" alt="User 1" />
            <AvatarFallback>U1</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarImage src="https://github.com/vercel.png" alt="User 2" />
            <AvatarFallback>U2</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarFallback>U3</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarFallback>U4</AvatarFallback>
          </Avatar>
        </AvatarGroup>
      </div>
      <div>
        <p className="text-muted-foreground mb-2 text-sm">Medium</p>
        <AvatarGroup max={3} size="md">
          <Avatar>
            <AvatarImage src="https://github.com/pittaya-ui.png" alt="User 1" />
            <AvatarFallback>U1</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarImage src="https://github.com/vercel.png" alt="User 2" />
            <AvatarFallback>U2</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarFallback>U3</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarFallback>U4</AvatarFallback>
          </Avatar>
        </AvatarGroup>
      </div>
      <div>
        <p className="text-muted-foreground mb-2 text-sm">Large</p>
        <AvatarGroup max={3} size="lg">
          <Avatar>
            <AvatarImage src="https://github.com/pittaya-ui.png" alt="User 1" />
            <AvatarFallback>U1</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarImage src="https://github.com/vercel.png" alt="User 2" />
            <AvatarFallback>U2</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarFallback>U3</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarFallback>U4</AvatarFallback>
          </Avatar>
        </AvatarGroup>
      </div>
    </div>
  );
}

export function AvatarWithStatusExample() {
  return (
    <div className="flex items-center gap-6">
      <div className="relative">
        <Avatar>
          <AvatarImage
            src="https://github.com/pittaya-ui.png"
            alt="@pittaya-ui"
          />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <span className="ring-background absolute right-0 bottom-0 block h-3 w-3 rounded-full bg-green-500 ring-2" />
      </div>
      <div className="relative">
        <Avatar>
          <AvatarImage src="https://github.com/vercel.png" alt="@vercel" />
          <AvatarFallback>VC</AvatarFallback>
        </Avatar>
        <span className="ring-background absolute right-0 bottom-0 block h-3 w-3 rounded-full bg-yellow-500 ring-2" />
      </div>
      <div className="relative">
        <Avatar>
          <AvatarImage src="https://github.com/react.png" alt="@react" />
          <AvatarFallback>RC</AvatarFallback>
        </Avatar>
        <span className="ring-background absolute right-0 bottom-0 block h-3 w-3 rounded-full bg-gray-500 ring-2" />
      </div>
    </div>
  );
}
