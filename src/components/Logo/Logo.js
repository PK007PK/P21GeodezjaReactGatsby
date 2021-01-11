import React from "react"
import { LogoStyle } from "./Logo.style"

const Logo = ({ className, style }) => (
  <LogoStyle style={style} className={className}>
    <i class="fas fa-drafting-compass"></i>GPI
  </LogoStyle>
)

export default Logo
