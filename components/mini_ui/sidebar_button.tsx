import { PanelLeftDashed } from 'lucide-react'
import { useDispatch, useSelector } from 'react-redux'
import { selectHiddenSidebar, setHidden } from '@/store/slices/sidebarSlice'
import { Button } from '@/components/ui/button'

export default function SidebarButton() {
  const isHiddenSidebar = useSelector(selectHiddenSidebar)
  const dispatch = useDispatch()

  return (
    <Button
      style={{ display: isHiddenSidebar ? 'block' : '' }}
      variant="ghost"
      className={"hidden max-lg:block text-sm font-medium "}
      onClick={() => dispatch(setHidden(false))}
      >
      <PanelLeftDashed className="w-5 h-5 text-muted-foreground" />
    </Button>
  )
}