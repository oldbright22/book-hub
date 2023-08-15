
import './App.css'
import { Grid, GridItem, Show } from '@chakra-ui/react'

function App() {
return <Grid templateAreas={{   //handle mobile or web app display
    base: '"nav" "main"', 
    lg:'"nav nav" "aside main"' //devices larger than 1024px
    }}>
    <GridItem area='nav' bg='coral'>Nav</GridItem>                               
    <Show above="lg">          
        <GridItem area='aside' bg='gold'>Aside</GridItem>
    </Show>
    <GridItem area='main' bg='dodgerblue'>Main</GridItem>
</Grid>;
}

export default App