import { Box, Flex, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import { useState } from "react";
import BookGrid from "./components/BookGrid";
import BookHeading from "./components/BookHeading";
import GenreList from "./components/GenreList";
import NavBar from "./components/NavBar";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";
import { Platform } from "./hooks/useBooks";
import { Genre } from "./hooks/useGenres";


export interface BookQuery { 
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
  searchText: string;
}

function App() {
  const [bookQuery, setBookQuery] = useState<BookQuery>({} as BookQuery);
  
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: '1fr',
        lg: '250px 1fr'
      }}
    >
      <GridItem area="nav">
        <NavBar onSearch={(searchText) => setBookQuery({ ...bookQuery, searchText })} />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenreList selectedGenre={bookQuery.genre} onSelectGenre={(genre) => setBookQuery({ ...bookQuery, genre})} />
        </GridItem>
      </Show>
      <GridItem area="main">
        <Box paddingLeft={2}>
          <BookHeading bookQuery={bookQuery} />
          <Flex marginBottom={5}>
            <Box marginRight={5}>
              <PlatformSelector selectedPlatform={bookQuery.platform} onSelectPlatform={(platform) => setBookQuery({ ...bookQuery, platform}) } />
            </Box>
            <SortSelector sortOrder={bookQuery.sortOrder} onSelectSortOrder={(sortOrder) => setBookQuery({ ...bookQuery, sortOrder })} />
          </Flex>
        </Box>
        <BookGrid bookQuery={bookQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
