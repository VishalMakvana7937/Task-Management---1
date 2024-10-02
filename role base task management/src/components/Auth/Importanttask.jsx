import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, ProgressBar, Button, Form, Dropdown, Badge } from 'react-bootstrap';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom';
import { FaAngleDown, FaEdit, FaExpandArrowsAlt, FaHeart, FaTimes, FaTrashAlt } from 'react-icons/fa';

// Register the necessary components with Chart.js
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const Importanttask = () => {
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
          <h4><NavLink to="/">Admin Dashboard</NavLink></h4>
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

        <Card className="task-card">
          <Card.Body>
            <div className="task-header d-flex justify-content-between">
              <Card.Title className="task-title">My Task</Card.Title>
              <div className="task-actions">
                <FaExpandArrowsAlt className="icon-action" />
                <FaAngleDown className="icon-action" />
                <FaTimes className="icon-action" />
              </div>
            </div>
            <Card.Subtitle className="task-subtitle">Role Base Task Management</Card.Subtitle>
            <div className="task-status d-flex align-items-center mt-2">
              <Badge pill bg="success" className="status-badge">Pending</Badge>
              <Badge pill bg="primary" className="status-badge">High</Badge>
              <Badge pill bg="warning" className="status-badge">New</Badge>
              <span className="task-date ml-auto"><i className="far fa-clock"></i> 17th Sep</span>
              <br />
              <div className="task-icons mt-3 d-flex justify-content-end">
                <FaEdit className="icon-update" title="Edit Task" />
                <FaTrashAlt className="icon-delete" title="Delete Task" />
                <FaHeart className="icon-favorite" title="Mark as Favorite" />
              </div>
            </div>
          </Card.Body>
        </Card>
        <br />
        <Card className="task-card">
          <Card.Body>
            <div className="task-header d-flex justify-content-between">
              <Card.Title className="task-title">My Task</Card.Title>
              <div className="task-actions">
                <FaExpandArrowsAlt className="icon-action" />
                <FaAngleDown className="icon-action" />
                <FaTimes className="icon-action" />
              </div>
            </div>
            <Card.Subtitle className="task-subtitle">Role Base Task Management</Card.Subtitle>
            <div className="task-status d-flex align-items-center mt-2">
              <Badge pill bg="success" className="status-badge">Pending</Badge>
              <Badge pill bg="primary" className="status-badge">High</Badge>
              <Badge pill bg="warning" className="status-badge">New</Badge>
              <span className="task-date ml-auto"><i className="far fa-clock"></i> 18th Sep</span>
              <br />
              <div className="task-icons mt-3 d-flex justify-content-end">
                <FaEdit className="icon-update" title="Edit Task" />
                <FaTrashAlt className="icon-delete" title="Delete Task" />
                <FaHeart className="icon-favorite" title="Mark as Favorite" />
              </div>
            </div>
          </Card.Body>
        </Card>
        <br />
        <Card className="task-card">
          <Card.Body>
            <div className="task-header d-flex justify-content-between">
              <Card.Title className="task-title">My Task</Card.Title>
              <div className="task-actions">
                <FaExpandArrowsAlt className="icon-action" />
                <FaAngleDown className="icon-action" />
                <FaTimes className="icon-action" />
              </div>
            </div>
            <Card.Subtitle className="task-subtitle">Role Base Task Management</Card.Subtitle>
            <div className="task-status d-flex align-items-center mt-2">
              <Badge pill bg="success" className="status-badge">Pending</Badge>
              <Badge pill bg="primary" className="status-badge">High</Badge>
              <Badge pill bg="warning" className="status-badge">New</Badge>
              <span className="task-date ml-auto"><i className="far fa-clock"></i> 19th Sep</span>
              <br />
              <div className="task-icons mt-3 d-flex justify-content-end">
                <FaEdit className="icon-update" title="Edit Task" />
                <FaTrashAlt className="icon-delete" title="Delete Task" />
                <FaHeart className="icon-favorite" title="Mark as Favorite" />
              </div>
            </div>
          </Card.Body>
        </Card>

        {/* Dashboard content */}
        {/* <Container fluid>
          <Row className="mb-4">
            <Col md={3}>
              <Card className="dashboard-card">
                <Card.Body>
                  <Card.Title>Earnings (Monthly)</Card.Title>
                  <Card.Text>$40,000</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3}>
              <Card className="dashboard-card">
                <Card.Body>
                  <Card.Title>Earnings (Annual)</Card.Title>
                  <Card.Text>$215,000</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3}>
              <Card className="dashboard-card">
                <Card.Body>
                  <Card.Title>Tasks</Card.Title>
                  <ProgressBar now={50} label="50%" />
                </Card.Body>
              </Card>
            </Col>
            <Col md={3}>
              <Card className="dashboard-card">
                <Card.Body>
                  <Card.Title>Pending Requests</Card.Title>
                  <Card.Text>18</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col lg={8}>
              <Card className="dashboard-card">
                <Card.Body>
                  <Card.Title>Earnings Overview</Card.Title>
                  <Line data={earningsData} />
                </Card.Body>
              </Card>
            </Col>
            <Col lg={4}>
              <Card className="dashboard-card">
                <Card.Body>
                  <Card.Title>Revenue Sources</Card.Title>
                  <Line data={revenueData} />
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container> */}
      </div>
    </div>
  );
};

export default Importanttask;
