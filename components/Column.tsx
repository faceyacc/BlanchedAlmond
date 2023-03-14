import { AddNewItem } from "@/components/AddNewItem";
import { Card } from "./Card";
import { ColumnContainer, ColumnTitle, CardContainer } from "../styles/sharedStyles";
import { useAppState } from "@/pages/api/state/AppStateContext";
import { addTask } from "@/pages/api/state/actions";

type ColumnProps = {
    text: string
    id: string
}

export const Column = ({ text, id }: ColumnProps) => {
    const { getTasksByListId, dispatch } = useAppState()
    const tasks = getTasksByListId(id)


    return (
        <ColumnContainer>
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

