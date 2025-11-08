
import { Nav, Navbar, Container, NavbarBrand, Row, Col } from "react-bootstrap";
import { BrowserRouter, NavLink, Link, Route, Routes } from "react-router-dom";

import CreateStudent from "./components/CreateStudent";
import EditStudent from "./components/edit-student";
import StudentList from "./components/student-list";

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Navbar bg="dark" variant="dark">
            <Container>
              <NavbarBrand>
                <NavLink as={Link} to={"/CreateStudent"} className="nav-link">
                  React MERN STACK
                </NavLink>
              </NavbarBrand>
              <NavbarBrand className="justify-content-end">
                <NavLink as={Link} to={"/CreateStudent"} className="nav-link">
                  Create Student
                </NavLink>
              </NavbarBrand>
              <NavbarBrand>
                <NavLink as={Link} to={"/StudentList"} className="nav-link">
                  Student List
                </NavLink>
              </NavbarBrand>
            </Container>
          </Navbar>
        </header>

        <Container>
          <Row>
            <Col md={12} className="mt-4">
              <div className="wrapper">
                <Routes>
                  <Route path="/"  element={<CreateStudent/>} />
                  <Route path="/CreateStudent"  element={<CreateStudent/>} />
                  <Route path="/edit-student/:id" element={<EditStudent/>} />
                  <Route path="/StudentList" element={<StudentList/>} />
                </Routes>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </BrowserRouter>
  )
}

export default App
