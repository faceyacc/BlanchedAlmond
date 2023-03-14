import {AppContainer}  from '../styles/sharedStyles'
import { Column } from '@/components/Column';
import { AddNewItem } from '../components/AddNewItem';
import { useAppState } from './api/state/AppStateContext';


export default function Home() {
  const { lists } = useAppState()
  return (

      <AppContainer>
        {lists.map(list => (
          <Column text={list.text} key={list.id} id={list.id}/>
        ))}
        <AddNewItem 
          toggleButtonText='+ Add another list' 
          onAdd={() => console.log('hej hej')} 
        />
      </AppContainer>
  )
}
