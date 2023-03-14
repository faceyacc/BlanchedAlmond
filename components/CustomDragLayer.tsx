import { useAppState } from "@/pages/api/state/AppStateContext"
import { CustomDragLayerContainer, DragPreviewWrapper } from "@/styles/sharedStyles"
import { useDragLayer } from "react-dnd"
import { Column } from "./Column"

export const CustomDragLayer = () => {
    const { draggedItem } = useAppState()
    const { currentOffset } = useDragLayer((mointor) => ({
        currentOffset: mointor.getSourceClientOffset()
    }))

    return draggedItem && currentOffset ? (
        <CustomDragLayerContainer>
            <DragPreviewWrapper position={currentOffset}>
                <Column id={draggedItem.id} text={draggedItem.text} isPreview />
            </DragPreviewWrapper>
        </CustomDragLayerContainer>
    ) : null
} 