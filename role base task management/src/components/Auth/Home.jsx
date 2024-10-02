import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, ProgressBar, Button, Form, Dropdown } from 'react-bootstrap';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom';

// Register the necessary components with Chart.js
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const Home = () => {
  const [darkMode, setDarkMode] = useState(false);

  // Load dark mode preference from local storage
  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode') === 'true';
    setDarkMode(savedMode);
    if (savedMode) {
      document.documentElement.classList.add('dark-mode');
    }
  }, []);

  // Toggle dark mode
  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    document.documentElement.classList.toggle('dark-mode', newMode);
    localStorage.setItem('darkMode', newMode);
  };

  const earningsData = {
    labels: ['Jan', 'Mar', 'May', 'Jul', 'Sep', 'Nov'],
    datasets: [
      {
        label: 'Earnings',
        data: [0, 10000, 20000, 30000, 40000, 50000],
        borderColor: 'rgba(78, 115, 223, 1)',
        backgroundColor: 'rgba(78, 115, 223, 0.05)',
      },
    ],
  };

  const revenueData = {
    labels: ['Direct', 'Social', 'Referral'],
    datasets: [
      {
        label: 'Revenue Sources',
        data: [55, 30, 15],
        backgroundColor: ['#4e73df', '#1cc88a', '#36b9cc'],
      },
    ],
  };

  return (
    <div className={`dashboard ${darkMode ? 'dark' : ''}`}>
      {/* Sidebar */}
      <div className={`sidebar ${darkMode ? 'sidebar-dark' : ''}`}>
        <div className="sidebar-header">
          <h4>Admin Dashboard</h4>
        </div>
        <ul className="nav flex-column">
        <li className="nav-item">
            <NavLink to="/taskManager" className="nav-link" href="#">
              <i className="fas fa-table"></i> All Tasks
            </NavLink>
          <li className="nav-item">
            <NavLink to="/importanttask" className="nav-link" href="#">
              <i className="fas fa-cogs"></i> Important Task
            </NavLink>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <i className="fas fa-wrench"></i> Completed task
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <i className="fas fa-chart-bar"></i> Incomplete Task
            </a>
          </li>
          
          </li>
        </ul>
      </div>

      {/* Main content */}
      <div className="content">
        {/* Navbar */}
        <div className="navbar d-flex justify-content-between align-items-center">
          <h1 className="dashboard-title">Dashboard</h1>

          {/* Profile Dropdown */}
          <div className="d-flex align-items-center">
            <Form.Check
              type="switch"
              id="dark-mode-switch"
              label="Dark Mode"
              checked={darkMode}
              onChange={toggleDarkMode}
              className="mr-3"
            />
            <Dropdown align="end">
              <Dropdown.Toggle variant="light" id="dropdown-profile" className="d-flex align-items-center">
                <img
                  src="https://avatar.iran.liara.run/public/boy?username=Ash"  // Replace with actual image URL
                  alt="Profile"
                  className="rounded-circle"
                  width="40"
                  height="40"
                />
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#profile">Profile</Dropdown.Item>
                <Dropdown.Item href="#settings">Settings</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="#logout">Logout</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>

        {/* Dashboard content */}
        <Container fluid>
          <Row className="mb-4">
            <Col md={3}>
              <Card className="dashboard-card">
                <Card.Body>
                  <Card.Title>Total Task</Card.Title>
                  <Card.Text>3</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3}>
              <Card className="dashboard-card">
                <Card.Body>
                  <Card.Title>Pending task</Card.Title>
                  <Card.Text>2</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3}>
              <Card className="dashboard-card">
                <Card.Body>
                  <Card.Title>Task Resio</Card.Title>
                  <ProgressBar now={35} label="35%" />
                </Card.Body>
              </Card>
            </Col>
            <Col md={3}>
              <Card className="dashboard-card">
                <Card.Body>
                  <Card.Title>Favorite Task</Card.Title>
                  <Card.Text>3</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col lg={8}>
              <Card className="dashboard-card">
                <Card.Body>
                  <Card.Title>Task Overview</Card.Title>
                  <Line data={earningsData} />
                </Card.Body>
              </Card>
            </Col>
            <Col lg={4}>
              <Card className="dashboard-card">
                <Card.Body>
                  <Card.Title>Task Revenue</Card.Title>
                  <Line data={revenueData} />
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Home;
