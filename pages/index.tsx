import {AppContainer}  from '../styles/sharedStyles'
import { Column } from '@/components/Column';
import { AddNewItem } from '../components/AddNewItem';



export default function Home() {
  return (

      <AppContainer>
        <Column text='Shit todo:'></Column>
        <AddNewItem 
          toggleButtonText='+ Add another list' 
          onAdd={() => console.log('hej hej')} 
        />
      </AppContainer>
  )
}
