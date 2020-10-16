import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Col, Container, Row,
} from 'react-bootstrap';
import Navigation from './components/navigation';
import Slider from './components/slider';

const App = () => (
  <div>
    <Navigation />
    <Container>
      <Row>
        <Col xs={8}>
          <Slider />
        </Col>
        1of1
        <Col />
      </Row>
    </Container>
  </div>
);

ReactDOM.render(<App />, document.getElementById('app'));
