import Header from "./Components/header";
import SideNavigation from "./Components/navigation";
import { Col, Row } from "reactstrap";
import Profile from "./Components/profile";
import Employee from "./Components/Employee";
// import { Link, Switch, Route } from "react-router";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  const styles = {
    contentDiv: {
      display: "flex"
    },
    contentMargin: {
      marginLeft: "10px",
      width: "100%"
    }
  };
  return (
    <>
      <Row>
        <Col lg={3}>
          <div style={styles.contentDiv}>
            <SideNavigation></SideNavigation>
          </div>
        </Col>
        <Col lg={9}>
          <Header></Header>
          <Row>
            <Router>
              <Switch>
                <Route path="/employees">
                  <Employee />
                </Route>
                <Route path="/profile">
                  <Profile />
                </Route>
              </Switch>
            </Router>
            {/* <Employee /> */}
          </Row>
        </Col>
      </Row>
    </>
  );
}
export default App;
