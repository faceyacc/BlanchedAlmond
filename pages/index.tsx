import {AppContainer}  from '../styles/sharedStyles'
import { Column } from '@/components/Column';
import { AddNewItem } from '../components/AddNewItem';
import { useAppState } from './api/state/AppStateContext';
import { addList } from './api/state/actions';


export default function Home() {
  const { lists, dispatch } = useAppState()
  return (

      <AppContainer>
        {lists.map((list) => (
          <Column text={list.text} key={list.id} id={list.id}/>
        ))}
        <AddNewItem 
          toggleButtonText='+ Add another list' 
          onAdd={(text) => dispatch(addList(text))} 
        />
      </AppContainer>
  )
}
