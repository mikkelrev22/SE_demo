import React from 'react'
import { render, screen } from '@testing-library/react'
import Home from '../pages/index'

describe('Home', () => {
  it('renders a heading', () => {
    render(<Home />)
    const heading = screen.getByText('Welcome to IBM Product Search')
    expect(heading).toBeInTheDocument()
  })
})