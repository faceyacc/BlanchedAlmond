import { CardContainer } from "../styles/sharedStyles"

type CardProps = {
    text: string
}

export const Card = ({ text }: CardProps) => {
    return <CardContainer> { text } </CardContainer>
}