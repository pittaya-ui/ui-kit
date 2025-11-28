import type { DocSection } from "@/lib/docs/types";

type PageSectionProps = {
  pageSections: DocSection[];
};

export function PageSectionComponent({ pageSections }: PageSectionProps) {
  if (!pageSections.length) {
    return null;
  }

  return (
    <>
      {pageSections.map((pageSection) => {
        const HeadingTag = pageSection.level === 2 ? "h2" : "h3";
        return (
          <section
            key={pageSection.id}
            className={`mt-12 space-y-4 ${pageSection.level === 3 ? "pl-4" : ""}`}
          >
            <div className="space-y-2">
              <HeadingTag
                id={pageSection.id}
                className={`text-foreground font-semibold ${pageSection.level === 2 ? "text-2xl" : "text-xl"}`}
              >
                {pageSection.title}
              </HeadingTag>
              {pageSection.description ? (
                <p className="text-muted-foreground">{pageSection.description}</p>
              ) : null}
            </div>
            <div className=" shadow-sm backdrop-blur">
              {pageSection.content}
            </div>
          </section>
        );
      })}
    </>
  );
}

