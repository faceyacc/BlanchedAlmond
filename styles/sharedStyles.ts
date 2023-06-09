import styled from 'styled-components'


export const AppContainer = styled.div`
    align-items: flex-start;
    /* background-color: #171717; */
    display: flex;
    flex-direction: row;
    height: 100%;
    padding: 20px;
    width: 100%;
`

interface DragPreviewContainerProps {
  isHidden?: boolean 
  isPreview?: boolean
}

export const DragPreviewContainer = styled.div<DragPreviewContainerProps>`
transform: ${(props) => props.isPreview ? "rotate(5deg)" : undefined};
  opacity: ${(props) => (props.isHidden ? 0.3 : 1)};
`


export const ColumnContainer = styled(DragPreviewContainer)`
  width: 300px;
  min-height: 40px;
  margin-right: 20px;
  border-radius: 3px;
  border: 2px solid blanchedalmond;
  padding: 8px 8px;
  flex-grow: 0;
  background-color: black;

`

export const ColumnTitle = styled.div`
  padding: 6px 16px 12px;
  font-weight: bold;
  color: white;
`

export const CustomDragLayerContainer = styled.div`
  height: 100%;
  width: 100%;
  pointer-events: none;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
`

export const CardContainer = styled(DragPreviewContainer)`
  background-color: black;
  border: 2px solid blanchedalmond;
  color: white;
  cursor: pointer;
  margin-bottom: 0.5rem;
  padding: 0.5rem 1rem;
  max-width: 300px;
  border-radius: 3px;
  box-shadow: #091e4240 0px 1px 0px 0px;
`

type AddItemButtonProps = {
    dark?: boolean;
}

export const AddItemButton = styled.button<AddItemButtonProps>`
  background-color: black;
  border-radius: 3px;
  border: none;
  color: ${(props) => (props.dark ? "#000" : "#fff")};
  cursor: pointer;
  max-width: 300px;
  padding: 10px 12px;
  text-align: left;
  transition: background 85ms ease-in;
  width: 100%;
  &:hover {
    background-color: #ffffff52;
  }
`

export const NewItemFormContainer = styled.div`
    max-width: 300px;
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: flex-start;
`

export const NewItemButton = styled.button`
    background-color: #171717;
    border-radius: 3px;
    border: none;
    box-shadow: none;
    color: #fff;
    padding: 6px 12px;
    text-align: center;
`

export const NewItemInput = styled.input`
  border-radius: 3px;
  border: none;
  /* border: 2px solid blanchedalmond; */
  box-shadow: #091e4240 0px 1px 0px 0px;
  margin-bottom: 0.5rem;
  background-color: #171717;
  padding: 0.5rem 1rem;
  width: 100%;    
`;

type DragPreviewWrapperProps = {
  position: {
    x: number
    y: number
  }
}

export const DragPreviewWrapper = styled.div.attrs<DragPreviewWrapperProps>(
  ({position: {x, y} }) => ({
  style: {
    transform: `translate(${x}px, ${y}px)`
  }
}))<DragPreviewWrapperProps>``