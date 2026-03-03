import { BlocksView } from "@/components/docs/blocks-view";
import { getAllBlockDocs } from "@/lib/docs/block-details";

export default function BlocksPage() {
  const blocks = getAllBlockDocs();

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <h1 className="text-4xl font-semibold">Blocks</h1>
        <p className="text-muted-foreground text-md max-w-xl">
          Ready-made page blocks you can copy and paste directly into your
          project. Each block is fully responsive and built with Pittaya UI
          components.
        </p>
      </div>

      <BlocksView blocks={blocks} />
    </div>
  );
}
