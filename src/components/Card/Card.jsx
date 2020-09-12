import React from 'react'
import { StyledCard } from './Card.styled'

export const Card = ({ item }) => (
  <StyledCard>
    <img alt="monster" src={`https://robohash.org/${item.id}?set=set2&size=180x180`}/>
    <h2>{item.name}</h2>
    <p>{item.email}</p>
  </StyledCard>
)