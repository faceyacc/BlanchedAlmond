
import { createContext, FC, useContext, Dispatch } from "react";
import { appStateReducer, Task, List, AppState } from "./appStateReducer";
import { Action } from "./actions";
import { useImmerReducer } from "use-immer";
import { DragItem } from "./DragItem";


const appData: AppState = {
    draggedItem: null,
    lists: [
        {
            id: '0',
            text: 'To Do',
            tasks: [{ id: 'c0', text: 'Build App' }]
        },
        {
            id: '1',
            text: 'In Progress',
            tasks: [{ id: 'c1', text: 'Eat Salmon' }]
        }, {
            id: '2',
            text: 'Done',
            tasks: [{ id: 'c2', text: 'Have a lot of ***!' }]
        }
    ]
}

type AppStateContextProps = {
    lists: List[]
    getTasksByListId(id: string): Task[]
    dispatch: Dispatch<Action>
    draggedItem: DragItem | null    
}

const AppStateContext = createContext<AppStateContextProps>(
    {} as AppStateContextProps
)

type AppStateProviderProps = {
    children: React.ReactNode
    // initialState: AppState
  }


export const AppStateProvider: FC<AppStateProviderProps> =  ({ children }) => {
    const [ state, dispatch ] = useImmerReducer(appStateReducer, appData)
    const {lists, draggedItem } = state

    const getTasksByListId = (id: string) => {
        return lists.find((list) => list.id === id)?.tasks || []
    }
    return (
        // Provides value to whole Application 
        <AppStateContext.Provider value={{ lists, getTasksByListId, dispatch, draggedItem }}> 
            { children }
        </AppStateContext.Provider>
    )
}

export const useAppState = () => {
    return useContext(AppStateContext)
}