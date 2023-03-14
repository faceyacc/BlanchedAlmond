import { AddNewItem } from "@/components/AddNewItem";
import { Card } from "./Card";
import { ColumnContainer, ColumnTitle, CardContainer } from "../styles/sharedStyles";
import { useAppState } from "@/pages/api/state/AppStateContext";
import { addTask, moveList } from "@/pages/api/state/actions";
import { useRef } from "react";
import { useItemDrag } from "./utils/useItemDrag";
import { useDrop } from "react-dnd";
import { throttle } from "throttle-debounce-ts";
import { isHidden } from "./utils/isHidden";

type ColumnProps = {
    text: string
    id: string
    isPreview?: boolean
}

export const Column = ({ text, id, isPreview }: ColumnProps) => {
    const { draggedItem, getTasksByListId, dispatch } = useAppState()
    const tasks = getTasksByListId(id)
    const { drag } = useItemDrag({type: "COLUMN", id, text})
    const ref = useRef<HTMLDivElement>(null)
    const [, drop] = useDrop({
        accept: "COLUMN",
        hover: throttle(200, () => {
            if(!draggedItem){
                return
            }
            if(draggedItem.type === "COLUMN") {
                if(draggedItem.id === id) {
                    return 
                }
                dispatch(moveList(draggedItem.id, id))
            }
        })
    })

    drag(drop(ref))


    return (
        <ColumnContainer ref={ref} isPreview={isPreview} isHidden={isHidden(draggedItem, "COLUMN", id, isPreview)}>
            <ColumnTitle>{text}</ColumnTitle>
            {
                tasks.map(task => (
                    <Card text={task.text} key={task.id} id={task.id}/>
                ))
            }
            <AddNewItem toggleButtonText='+ Add another todo' onAdd={(text) => dispatch(addTask(text, id))} />
        </ColumnContainer>
    )
}

