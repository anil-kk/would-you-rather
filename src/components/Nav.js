import React, { Component } from "react";
import { Menu, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";

class Nav extends Component {
  state = { activeItem: "home" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Menu secondary>
        <Menu.Item
          name="home"
          active={activeItem === "home"}
          onClick={this.handleItemClick}
          as={Link}
          to="/"
        />
        <Menu.Item
          name="newQuestion"
          active={activeItem === "newQuestion"}
          onClick={this.handleItemClick}
          as={Link}
          to="/question"
        />
        <Menu.Item
          name="leaderBoard"
          active={activeItem === "leaderBoard"}
          onClick={this.handleItemClick}
          as={Link}
          to="/leaderboard"
        />
        <Menu.Menu position="right">
          <Menu.Item name="user">
            User
            <Icon name="user" size="large" />
          </Menu.Item>
          <Menu.Item name="logout" onClick={this.handleItemClick} />
        </Menu.Menu>
      </Menu>
    );
  }
}

export default Nav;
