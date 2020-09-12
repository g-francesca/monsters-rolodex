import React from 'react'
import { StyledSearchBox } from './SearchBox.styled'

export const SearchBox = ({ placeholder, handleChange }) => (
  <StyledSearchBox
    type='search'
    placeholder={placeholder}
    onChange={handleChange}
  />
)