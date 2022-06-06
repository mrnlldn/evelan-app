import { GridItem, Grid } from '@chakra-ui/react'
import { GetServerSideProps, NextPage } from 'next'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import BaseButton from '../../components/buttons'
import Card from '../../components/card'
import { fetchUsers, PaginatedResponse } from '../../lib/user'

interface Props {
  paginated: PaginatedResponse
}

const Users: NextPage<Props> = ({ paginated: initialPaginated }) => {
  const buttonRef = useRef<HTMLButtonElement>(null)

  const [paginated, setPaginated] = useState(initialPaginated)
  const [isLoading, setIsLoading] = useState(false)

  const isDisabled = paginated.page === paginated.total_pages

  const onLoadMore = useCallback(async () => {
    setIsLoading(true)
    const newPaginated = await fetchUsers(paginated.page + 1)

    setPaginated((current) => {
      return {
        ...current,
        ...newPaginated,
        data: [...current.data, ...newPaginated.data],
      }
    })
    setIsLoading(false)
  }, [paginated.page])

  useEffect(() => {
    buttonRef.current?.scrollIntoView()
  }, [buttonRef, paginated.page])

  return (
    <>
      <Grid templateColumns={{base:"repeat(1, 1fr)", md:"repeat(3, 1fr)"}} gap={6}>
        {paginated.data.map((d, index) => (
          <GridItem colSpan={1} key={index}>
            <Card
              email={d.email}
              id={d.id}
              name={`${d.first_name} ${d.last_name}`}
              link={d.avatar}
            />
          </GridItem>
        ))}
      </Grid>
      <BaseButton
        colorScheme="teal"
        onClick={onLoadMore}
        isDisabled={isDisabled}
        isLoading={isLoading}
        ref={buttonRef}
        mb='5rem'
      >
        Load more
      </BaseButton>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const paginated = await fetchUsers(1)

  return {
    props: {
      paginated,
    },
  }
}
export default Users
