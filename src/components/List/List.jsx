import React from 'react'
import { Card } from '../Card/Card'
import { StyledList } from './List.styled'

export const List = ({ children, items }) => {
  return (
    <StyledList>
      {items.map(item => (
        <Card key={item.id} item={item} />
      ))}
    </StyledList>
  )
}