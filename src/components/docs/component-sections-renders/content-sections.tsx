import type { DocSection } from "@/lib/docs/types";

type ContentSectionsProps = {
  sections: DocSection[];
};

export function ContentSections({ sections }: ContentSectionsProps) {
  if (!sections.length) {
    return null;
  }

  return (
    <>
      {sections.map((section) => {
        const HeadingTag = section.level === 2 ? "h2" : "h3";
        return (
          <section
            key={section.id}
            className={`mt-12 space-y-4 ${section.level === 3 ? "pl-4" : ""}`}
          >
            <div className="space-y-2">
              <HeadingTag
                id={section.id}
                className={`text-foreground font-semibold ${section.level === 2 ? "text-2xl" : "text-xl"}`}
              >
                {section.title}
              </HeadingTag>
              {section.description ? (
                <p className="text-muted-foreground">{section.description}</p>
              ) : null}
            </div>
            <div className="border-border/60 bg-card/60 rounded-2xl border p-6 shadow-sm backdrop-blur">
              {section.content}
            </div>
          </section>
        );
      })}
    </>
  );
}

