import { SimpleGrid, Text } from "@chakra-ui/react";
import { BookQuery } from "../App";
import useBooks, { Platform } from "../hooks/useBooks";
import { Genre } from "../hooks/useGenres";
import BookCard from "./BookCard";
import BookCardContainer from "./BookCardContainer";
import BookCardSkeleton from "./BookCardSkeleton";

interface Props {
  bookQuery: BookQuery;
}

const BookGrid = ({ bookQuery }: Props) => {
  const { data, error, isLoading } = useBooks(bookQuery);
  const skeletons = [1, 2, 3, 4, 5, 6];

  if (error) return <Text>{error}</Text>;

  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
      padding="10px"
      spacing={6}
    >
      {isLoading &&
        skeletons.map((skeleton) => (
          <BookCardContainer key={skeleton}>
            <BookCardSkeleton />
          </BookCardContainer>
        ))}
      {data.map((book) => (
        <BookCardContainer key={book.id}>
          <BookCard book={book} />
        </BookCardContainer>
      ))}
    </SimpleGrid>
  );
};

export default BookGrid;
