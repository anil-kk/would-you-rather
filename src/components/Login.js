import React, { Component } from "react";
import {
  Header,
  Button,
  Icon,
  Grid,
  List,
  Segment,
  Dropdown,
} from "semantic-ui-react";

const users = [
  {
    key: "Jenny Hess",
    text: "Jenny Hess",
    value: "Jenny Hess",
    image: { avatar: true, src: "https://i.pravatar.cc/150?img=3" },
  },
  {
    key: "Elliot Fu",
    text: "Elliot Fu",
    value: "Elliot Fu",
    image: { avatar: true, src: "https://i.pravatar.cc/150?img=1" },
  },
  {
    key: "Stevie Feliciano",
    text: "Stevie Feliciano",
    value: "Stevie Feliciano",
    image: { avatar: true, src: "https://i.pravatar.cc/150?img=2" },
  },
  {
    key: "Christian",
    text: "Christian",
    value: "Christian",
    image: { avatar: true, src: "https://i.pravatar.cc/150?img=4" },
  },
  {
    key: "Matt",
    text: "Matt",
    value: "Matt",
    image: { avatar: true, src: "https://i.pravatar.cc/150?img=6" },
  },
  {
    key: "Justen Kitsune",
    text: "Justen Kitsune",
    value: "Justen Kitsune",
    image: { avatar: true, src: "https://i.pravatar.cc/150?img=7" },
  },
];

class Login extends Component {
  render() {
    const gridStyle = {
      height: "60vh",
    };
    const columnWidth = { maxWidth: "450px" };
    const classNames = "center aligned middle aligned";

    const { history } = this.props;
    return (
      <Grid style={gridStyle} className={classNames}>
        <Grid.Column style={columnWidth}>
          <Header as="h2" icon textAlign="center">
            <Icon name="sign-in" circular />
            <Header.Content>Login</Header.Content>
          </Header>

          <Segment basic>
            <Dropdown
              placeholder="Select Friend"
              fluid
              selection
              options={users}
            />
          </Segment>

          <Button
            size="huge"
            primary
            onClick={() => history.push("/")}
          >
            <Icon name="send"></Icon>Login
          </Button>
        </Grid.Column>
      </Grid>
    );
  }
}

export default Login;
