import { setDraggedItem } from "@/pages/api/state/actions"
import { useAppState } from "@/pages/api/state/AppStateContext"
import { DragItem } from "@/pages/api/state/DragItem"
import { useEffect } from "react"
import { useDrag } from "react-dnd"
import { getEmptyImage } from "react-dnd-html5-backend"

export const useItemDrag = (item: DragItem) => {
    const { dispatch } = useAppState()
    const [, drag, preview] = useDrag({
        type: item.type,
        item: () => {
            dispatch(setDraggedItem(item))
            return item
        },
        end: () => dispatch(setDraggedItem(null))
    })
    
    useEffect(() => {
        preview(getEmptyImage(), { captureDraggingState: true })
    }, [preview])
    return { drag }
}