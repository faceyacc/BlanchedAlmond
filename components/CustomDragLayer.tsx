import { useAppState } from "@/pages/api/state/AppStateContext";
import {
  CustomDragLayerContainer,
  DragPreviewWrapper,
} from "@/styles/sharedStyles";
import { useDragLayer } from "react-dnd";
import { Card } from "./Card";
import { Column } from "./Column";

export const CustomDragLayer = () => {
    const { draggedItem } = useAppState()
    const { currentOffset } = useDragLayer((monitor) => ({
      currentOffset: monitor.getSourceClientOffset()
    }))
  
    return currentOffset && draggedItem ? (

      <CustomDragLayerContainer>
        <DragPreviewWrapper position={currentOffset}>
          { draggedItem.type === "COLUMN" ? (
              <Column
              id={draggedItem.id}
              text={draggedItem.text}
              isPreview
            />
          ) : (
            <Card
            columnId={draggedItem.columnId}
            id={draggedItem.id}
            text={draggedItem.text}
            isPreview
          />
          )}
          </DragPreviewWrapper>
      </CustomDragLayerContainer>
    ) : null
  }
