import { Dashboard } from "@/components/ui/8bit/blocks/dashboard/dashboard";

import CopyCommandButton from "../../docs/components/copy-command-button";
import { OpenInV0Button } from "../../docs/components/open-in-v0-button";

export default function DashboardBlocks() {
  return (
    <>
      <div className="flex flex-col gap-4 border rounded-lg p-4 min-h-[450px]">
        <div className="flex flex-col md:flex-row gap-2 items-center justify-between">
          <h2 className="text-sm text-muted-foreground sm:pl-3">
            A dashboard layout with a sidebar, charts, and a data table
          </h2>

          <div className="flex flex-col md:flex-row items-center gap-2">
            <CopyCommandButton
              command="pnpm dlx shadcn@latest add @8bitcn/login-form"
              copyCommand="pnpm dlx shadcn@latest add @8bitcn/login-form"
            />
            <OpenInV0Button name="8bit-login-form" className="w-fit" />
          </div>
        </div>
        <div>
          <Dashboard />
        </div>
      </div>
    </>
  );
}
