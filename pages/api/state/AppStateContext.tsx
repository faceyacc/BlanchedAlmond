
import { createContext, FC, useContext } from "react";

type Task = {
    id: string
    text: string
}

type List = {
    id: string
    text: string
    tasks: Task[]
}

export type AppState = {
    lists: List[]
}

const appData: AppState = {
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
        },        {
            id: '2',
            text: 'Done',
            tasks: [{ id: 'c2', text: 'Have a lot of ***!' }]
        }
    ]
}

type AppStateContextProps = {
    lists: List[]
    getTasksByListId(id: string): Task[]
}

const AppStateContext = createContext<AppStateContextProps>(
    {} as AppStateContextProps
)

type AppStateProviderProps = {
    children: React.ReactNode
    // initialState: AppState
  }


export const AppStateProvider: FC<AppStateProviderProps> =  ({ children }) => {
    const {lists} = appData

    const getTasksByListId = (id: string) => {
        return lists.find((list) => list.id === id)?.tasks || []
    }
    return (
        <AppStateContext.Provider value={{ lists, getTasksByListId }}>
            { children }
        </AppStateContext.Provider>
    )
}

export const useAppState = () => {
    return useContext(AppStateContext)
}