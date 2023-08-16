import { Card, CardBody, Heading, HStack, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { Book } from '../hooks/useBooks'
import getCroppedImageUrl from '../services/image-url'
import CriticScore from './CriticScore'
import Emoji from './Emoji'
import PlatformIconList from './PlatformIconList'

interface Props {
  book: Book
}

const BookCard = ({ book }: Props) => {
  return (
    <Card>
      <Image src={getCroppedImageUrl(book.background_image)} />
      <CardBody>
        <HStack justifyContent='space-between' marginBottom={3}>
          <PlatformIconList platforms={book.parent_platforms?.map(p => p.platform)} />
          <CriticScore score={book.metacritic} />
        </HStack>
        <Heading fontSize='2xl'>{book.name}<Emoji rating={book.rating_top}/></Heading>
      </CardBody>
    </Card>
  )
}

export default BookCard