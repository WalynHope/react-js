import React from 'react';
import {
  Navbar,
  Nav,
  Container,
  Card,
  Button,
  Row,
  Col,
  Badge,
  Form
} from 'react-bootstrap';

function App() {
  return (
    <React.Fragment>
      <div className="App" style={{ backgroundColor: '#f8f9fa', minHeight: '100vh', paddingBottom: '3rem' }}>
        {/* Navbar Component */}
        <Navbar bg="dark" variant="dark" expand="lg" sticky="top" className="shadow-sm py-3">
          <Container>
            <Navbar.Brand href="#home" className="fw-bold fs-4 text-primary d-flex align-items-center gap-2">
              <span style={{ fontSize: '1.5rem' }}>🚀</span> TechSphere
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto ms-3">
                <Nav.Link href="#home" active>Home</Nav.Link>
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
                <Nav.Link href="#about">About</Nav.Link>
              </Nav>
              <Form className="d-flex me-2">
                <Form.Control
                  type="search"
                  placeholder="Search articles..."
                  className="me-2 rounded-pill border-0 shadow-sm"
                  aria-label="Search"
                />
              </Form>
              <Button variant="primary" className="rounded-pill px-4 font-weight-bold">
                Get Started
              </Button>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        {/* Hero / Heading Section */}
        <Container className="my-5 text-center">
          <Row className="justify-content-center">
            <Col md={8} lg={6}>
              <Badge bg="primary" className="mb-3 px-3 py-2 rounded-pill text-uppercase tracking-wider fw-semibold">
                React Bootstrap Checkpoint
              </Badge>
              <h1 className="display-4 fw-extrabold text-dark mb-3">
                Build Powerful Interfaces Rapidly
              </h1>
              <p className="lead text-muted mb-4">
                Welcome to our React Bootstrap showcase. Discover modern web development components crafted with precision, responsiveness, and performance in mind.
              </p>
              <div className="d-flex gap-3 justify-content-center">
                <Button variant="primary" size="lg" className="rounded-pill px-4 shadow-sm">
                  Explore Components
                </Button>
                <Button variant="outline-secondary" size="lg" className="rounded-pill px-4 shadow-sm">
                  Documentation
                </Button>
              </div>
            </Col>
          </Row>
        </Container>

        {/* 3 Cards Section */}
        <Container className="mt-5">
          <Row className="g-4">
            {/* Card 1 */}
            <Col md={4}>
              <Card className="h-100 border-0 shadow-sm rounded-4 overflow-hidden card-hover-effect">
                <Card.Img
                  variant="top"
                  src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&q=80"
                  alt="Modern Web Development"
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <Card.Body className="d-flex flex-column p-4">
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <Badge bg="info" className="text-white px-2 py-1">Development</Badge>
                    <small className="text-muted">5 min read</small>
                  </div>
                  <Card.Title className="fw-bold mb-2">Modern Web Development</Card.Title>
                  <Card.Text className="text-muted flex-grow-1">
                    Master modern frontend ecosystems using React, JSX, and component-driven architecture for robust user interfaces.
                  </Card.Text>
                  <Button variant="outline-primary" className="mt-3 rounded-pill fw-semibold w-100">
                    Read Article →
                  </Button>
                </Card.Body>
              </Card>
            </Col>

            {/* Card 2 */}
            <Col md={4}>
              <Card className="h-100 border-0 shadow-sm rounded-4 overflow-hidden card-hover-effect">
                <Card.Img
                  variant="top"
                  src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=600&q=80"
                  alt="UI/UX Design Systems"
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <Card.Body className="d-flex flex-column p-4">
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <Badge bg="success" className="px-2 py-1">Design</Badge>
                    <small className="text-muted">8 min read</small>
                  </div>
                  <Card.Title className="fw-bold mb-2">UI/UX Design Systems</Card.Title>
                  <Card.Text className="text-muted flex-grow-1">
                    Create cohesive visual experiences using atomic design principles, customizable themes, and React Bootstrap grids.
                  </Card.Text>
                  <Button variant="outline-success" className="mt-3 rounded-pill fw-semibold w-100">
                    Explore Design →
                  </Button>
                </Card.Body>
              </Card>
            </Col>

            {/* Card 3 */}
            <Col md={4}>
              <Card className="h-100 border-0 shadow-sm rounded-4 overflow-hidden card-hover-effect">
                <Card.Img
                  variant="top"
                  src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80"
                  alt="Cloud & Performance"
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <Card.Body className="d-flex flex-column p-4">
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <Badge bg="purple" style={{ backgroundColor: '#6f42c1' }} className="text-white px-2 py-1">Cloud</Badge>
                    <small className="text-muted">6 min read</small>
                  </div>
                  <Card.Title className="fw-bold mb-2">Cloud & Performance</Card.Title>
                  <Card.Text className="text-muted flex-grow-1">
                    Optimize web applications for maximum speed, seamless deployment pipelines, and global edge scalability.
                  </Card.Text>
                  <Button variant="outline-dark" className="mt-3 rounded-pill fw-semibold w-100">
                    Learn Cloud →
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
}

export default App;
