"use client";

import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

interface PreviewFrameProps extends React.HTMLAttributes<HTMLIFrameElement> {
  children: React.ReactNode;
  head?: React.ReactNode;
}

export function PreviewFrame({
  children,
  head,
  className,
  style,
  ...props
}: PreviewFrameProps) {
  const [mountNode, setMountNode] = useState<HTMLElement | null>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;

    const doc = iframe.contentDocument;
    if (!doc) return;

    // Wait for document to be ready if needed, usually synchronous for about:blank
    doc.open();
    doc.write("<!DOCTYPE html><html><head></head><body></body></html>");
    doc.close();

    setMountNode(doc.body);

    // Copy styles from parent document
    const copyStyles = () => {
      // Clear existing styles
      Array.from(doc.head.children).forEach((child) => child.remove());

      // Copy all style and link tags
      Array.from(document.head.querySelectorAll('link[rel="stylesheet"], style')).forEach(
        (node) => {
          doc.head.appendChild(node.cloneNode(true));
        }
      );

      // Copy classList from html/body
      doc.documentElement.className = document.documentElement.className;
      doc.body.className = document.body.className;
    };

    copyStyles();

    // Observe changes in parent head (e.g. for dynamic styles)
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (
            node instanceof HTMLLinkElement ||
            node instanceof HTMLStyleElement
          ) {
            doc.head.appendChild(node.cloneNode(true));
          }
        });
      });
    });

    observer.observe(document.head, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <iframe
      {...props}
      ref={iframeRef}
      className={className}
      style={{ border: "none", width: "100%", height: "100%", ...style }}
    >
      {mountNode && createPortal(children, mountNode)}
      {mountNode &&
        head &&
        createPortal(head, iframeRef.current!.contentDocument!.head)}
    </iframe>
  );
}
