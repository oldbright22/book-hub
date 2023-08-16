import { Heading } from '@chakra-ui/react'
import { BookQuery } from '../App'

interface Props {
  bookQuery: BookQuery
}

const BookHeading = ({ bookQuery }: Props) => {
  const heading = `${bookQuery.platform?.name || ''} ${bookQuery.genre?.name || ''} Books`;

  return (
    <Heading as='h1' marginY={5} fontSize='5xl'>{heading}</Heading>
  )
}

export default BookHeading