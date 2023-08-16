import { BookQuery } from "../App";
import useData from "./useData";
import { Genre } from "./useGenres";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Book {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}

const useBooks = (bookQuery: BookQuery) =>
  useData<Book>(
    "/books",
    {
      params: {
        genres: bookQuery.genre?.id,
        platforms: bookQuery.platform?.id,
        ordering: bookQuery.sortOrder,
        search: bookQuery.searchText
      },
    },
    [bookQuery]
  );

export default useBooks;
