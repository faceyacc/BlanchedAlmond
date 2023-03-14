import { AddNewItem } from "@/components/AddNewItem";
import { Card } from "./Card";
import { ColumnContainer, ColumnTitle, CardContainer } from "../styles/sharedStyles";

type ColumnProps = {
    text: string
}

export const Column = ({ text }: ColumnProps) => {
    return (
        <ColumnContainer>
            <ColumnTitle>{text}</ColumnTitle>
            <Card text="Build BlanchedAlmond"/>
            <Card text="Eat salmon"/>
            <Card text="Have a lot of ***!"/>
            <AddNewItem toggleButtonText='+ Add another todo' onAdd={() => console.log('hej hej')} />
        </ColumnContainer>
    )
}

