import React from "react"
import { Link } from "gatsby"

import {
  StyledBurgerMenu,
  StyledButton,
  StyledSpan,
  StyledNavigation,
  StyledList,
} from "./BurgerMenu.style"

class BurgerMenu extends React.Component {
  state = {
    IsBurgerActive: false,
  }

  handleClick = () => {
    this.setState(prevState => ({
      IsBurgerActive: !prevState.IsBurgerActive,
    }))
  }

  render() {
    return (
      <StyledBurgerMenu className={this.props.className}>
        <StyledButton
          onClick={this.handleClick}
          isActive={this.state.IsBurgerActive}
        >
          <div>
            <StyledSpan isActive={this.state.IsBurgerActive} />
          </div>
        </StyledButton>
        <StyledNavigation isActive={this.state.IsBurgerActive}>
          <StyledList>
            <li>
              <Link to="/">główna</Link>
            </li>
            <li>
              <Link to="/news">aktualności</Link>
            </li>
            <li>
              <Link to="/contact">kontakt</Link>
            </li>
          </StyledList>
        </StyledNavigation>
      </StyledBurgerMenu>
    )
  }
}

export default BurgerMenu