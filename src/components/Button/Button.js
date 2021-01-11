import React from "react"
import styled from "styled-components"
import Link from "gatsby"

const StyledButton = styled(Link)`
  color: white;
`

const Button = ({ children, className }) => (
  <>
    <StyledButton className={className}>{children}</StyledButton>
  </>
)

export default Button
