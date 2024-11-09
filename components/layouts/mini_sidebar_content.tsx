import {
  LayoutGrid,
  ChevronDown,
  Github,
  Inbox,
  Layers,
  Plus,
  Users,
} from 'lucide-react'

import { SidebarContent, SidebarMenu, SidebarMenuItem, SidebarMenuButton, SidebarGroup, SidebarGroupLabel, SidebarGroupContent, SidebarProvider } from '../ui/sidebar';
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from '@radix-ui/react-collapsible';

export default function MiniSidebarContent(){
  return (
    <SidebarProvider>
      <SidebarContent>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <a href="#inbox">
                <Inbox className="h-4 w-4" />
                <span>Inbox</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <a href="#issues">
                <Layers className="h-4 w-4" />
                <span>My issues</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>

        <Collapsible defaultOpen>
          <SidebarGroup>
            <CollapsibleTrigger asChild>
              <SidebarGroupLabel className="flex items-center">
                Workspace
                <ChevronDown className="h-4 w-4" />
              </SidebarGroupLabel>
            </CollapsibleTrigger>
            <CollapsibleContent>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <a href="#projects">
                        <Layers className="h-4 w-4" />
                        <span>Projects</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <a href="#views">
                        <LayoutGrid className="h-4 w-4" />
                        <span>Views</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <a href="#teams">
                        <Users className="h-4 w-4" />
                        <span>Teams</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </CollapsibleContent>
          </SidebarGroup>
        </Collapsible>

        <Collapsible defaultOpen>
          <SidebarGroup>
            <CollapsibleTrigger asChild>
              <SidebarGroupLabel className="flex items-center gap-2">
                Your teams
                <ChevronDown className="h-4 w-4" />
              </SidebarGroupLabel>
            </CollapsibleTrigger>
            <CollapsibleContent>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <a href="#minitasks">
                        <div className="flex h-4 w-4 items-center justify-center rounded bg-green-500 text-[10px] text-white">
                          M
                        </div>
                        <span>MiniTasks</span>
                        <ChevronDown className="ml-auto h-4 w-4" />
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </CollapsibleContent>
          </SidebarGroup>
        </Collapsible>

        <Collapsible>
          <SidebarGroup>
            <CollapsibleTrigger asChild>
              <SidebarGroupLabel className="flex items-center gap-2">
                Try
                <ChevronDown className="h-4 w-4" />
              </SidebarGroupLabel>
            </CollapsibleTrigger>
            <CollapsibleContent>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <a href="#import">
                        <Layers className="h-4 w-4" />
                        <span>Import issues</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <a href="#invite">
                        <Plus className="h-4 w-4" />
                        <span>Invite people</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <a href="#github">
                        <Github className="h-4 w-4" />
                        <span>Link GitHub</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </CollapsibleContent>
          </SidebarGroup>
        </Collapsible>
      </SidebarContent>
    </SidebarProvider>
  )
}