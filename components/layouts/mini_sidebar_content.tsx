import * as React from "react"
import { ChevronDown, Inbox, Layers, LayoutGrid, Users } from "lucide-react"
import Link from "next/link"

import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import MiniSidebarHeader from "./mini_sidebar_header"

export default function MiniSidebarContent(){
  return (
    <div className="flex w-full flex-col border-r transition-all duration-300">
      <MiniSidebarHeader />
      <div className="flex-1 py-3 pe-3">
        <nav className="space-y-2">
          <Link href="/inbox" className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium hover:bg-accent">
            <Inbox className="h-4 w-4" />
            <span>Inbox</span>
          </Link>
          <Link href="/my-tasks" className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium hover:bg-accent">
            <Layers className="h-4 w-4" />
            <span>My tasks</span>
          </Link>
        </nav>

        <Collapsible defaultOpen>
          <CollapsibleTrigger className="flex w-full items-center justify-between py-2 text-sm font-medium">
            <span>Workspace</span>
            <ChevronDown className="h-4 w-4" />
          </CollapsibleTrigger>
          <CollapsibleContent>
            <nav className="ml-4 space-y-2">
              <Link href="/" className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm hover:bg-accent">
                <Layers className="h-4 w-4" />
                <span>Projects</span>
              </Link>
              <Link href="/views" className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm hover:bg-accent">
                <LayoutGrid className="h-4 w-4" />
                <span>Views</span>
              </Link>
              <Link href="/teams" className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm hover:bg-accent">
                <Users className="h-4 w-4" />
                <span>Teams</span>
              </Link>
            </nav>
          </CollapsibleContent>
        </Collapsible>

        <Collapsible>
          <CollapsibleTrigger className="flex w-full items-center justify-between py-2 text-sm font-medium">
            <span>Your teams</span>
            <ChevronDown className="h-4 w-4" />
          </CollapsibleTrigger>
          <CollapsibleContent>

            <Collapsible>
              <CollapsibleTrigger className="flex w-full items-center justify-between py-2 text-sm font-medium">
                <nav className="ml-4 space-y-2">
                  <a href="#minitasks" className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm hover:bg-accent">
                    <div className="flex h-4 w-4 items-center justify-center rounded bg-green-500 text-[10px] text-white">
                      M
                    </div>
                    <span>MiniTasks</span>
                  </a>
                </nav>
                <ChevronDown className="h-4 w-4" />
              </CollapsibleTrigger>
              <CollapsibleContent>
                <nav className="ml-4 space-y-2">
                  <a href="#tasks" className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm hover:bg-accent">
                    <Layers className="h-4 w-4" />
                    <span>Tasks</span>
                  </a>
                  <a href="#project" className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm hover:bg-accent">
                    <LayoutGrid className="h-4 w-4" />
                    <span>Project</span>
                  </a>
                  <a href="#views" className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm hover:bg-accent">
                    <Users className="h-4 w-4" />
                    <span>Views</span>
                  </a>
                </nav>
              </CollapsibleContent>
            </Collapsible>
          </CollapsibleContent>
        </Collapsible>
      </div>
    </div>
  )
}