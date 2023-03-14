import { AddNewItem } from "@/components/AddNewItem";
import { Card } from "./Card";
import { ColumnContainer, ColumnTitle, CardContainer } from "../styles/sharedStyles";
import { useAppState } from "@/pages/api/state/AppStateContext";

type ColumnProps = {
    text: string
    id: string
}

export const Column = ({ text, id }: ColumnProps) => {
    const { getTasksByListId } = useAppState()
    const tasks = getTasksByListId(id)


    return (
        <ColumnContainer>
            <ColumnTitle>{text}</ColumnTitle>
            {
                tasks.map(task => (
                    <Card text={task.text} key={task.id} id={task.id}/>
                ))
            }
            <AddNewItem toggleButtonText='+ Add another todo' onAdd={() => console.log('hej hej')} />
        </ColumnContainer>
    )
}

