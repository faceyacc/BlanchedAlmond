import { Action } from "./actions"
import { nanoid } from "nanoid"
import { findItemIndexById, moveItem } from "@/components/utils/arrayUtils"
import { DragItem } from "./DragItem"

export type Task = {
    id: string
    text: string
}

export type List = {
    id: string
    text: string
    tasks: Task[]
}

export type AppState = {
    lists: List[]
    draggedItem: DragItem | null
}


export const appStateReducer = (draft: AppState, action: Action): AppState | void => {
    switch(action.type) {
        case 'ADD_LIST': {
            // Do Action to add column
            draft.lists.push({ // Update AppSate with new empty List
                id: nanoid(),
                text: action.payload,
                tasks:[]
            })
            break
        }
        case 'ADD_TASK': {
            const { text, listId } = action.payload 
            const targetListIndex = findItemIndexById(draft.lists, listId)

            // Do Action to add card to column
            draft.lists[targetListIndex].tasks.push({ // Push taks to target list
                id: nanoid(),
                text
            })
            break
        }

        case 'MOVE_LIST': {
            const { draggedId, hoverId } = action.payload
            const dragIndex = findItemIndexById(draft.lists, draggedId)
            const hoverIndex = findItemIndexById(draft.lists, hoverId)

            // Do Action to move list
            draft.lists = moveItem(draft.lists, dragIndex, hoverIndex)
            break
        }

        case 'SET_DRAGGED_ITEM': {
            draft.draggedItem = action.payload
            break 
        }

        case "MOVE_TASK" : {
            const {
                draggedItemId,
                hoveredItemId,
                sourceColumnId,
                targetColumnId
            } = action.payload

            const sourceListIndex = findItemIndexById(
                draft.lists,
                sourceColumnId
            )
            
            const targetListIndex = findItemIndexById(
                draft.lists, 
                targetColumnId
            )

            const dragIndex = findItemIndexById(
                draft.lists[sourceListIndex].tasks,
                draggedItemId
            )

            // Find the indices of the dragged and hover Tasks
            const hoverIndex = hoveredItemId 
            ? findItemIndexById(
                draft.lists[targetListIndex].tasks,
                hoveredItemId
            ) : 0

            const item = draft.lists[sourceListIndex].tasks[dragIndex]

            draft.lists[sourceListIndex].tasks.splice(dragIndex, 1)
            draft.lists[targetListIndex].tasks.splice(hoverIndex, 0, item)            
            break
        }




        default: {
            break
        }
    }
}