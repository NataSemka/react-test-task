import React from "react";
import { Toast, Form, Row, Col, Container } from 'react-bootstrap';

class AlertThresholdComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      threshold: "",
      show: false
    };
  }
  componentDidUpdate(prevProps) {
    const { show, threshold } = this.state;
    const { number } = this.props;
    if (prevProps.number !== number && show) {
      this.setState({ show: false });
    }
  }
  handleChange = e => {
    const { number } = this.props;
    this.setState({
      threshold: e.target.value,
      show: number > parseInt(e.target.value),
    })
  }
  render() {
    const { threshold, show } = this.state;
    const { number } = this.props;
    return (
      <Container>
        <Row>
          <Col md={{ span: 4, offset: 4 }}>
            <Form.Group>
              <Form.Label>Alert threshold</Form.Label>
              <Form.Control type="text" value={threshold} onChange={this.handleChange} />
            </Form.Group>
            <Toast show={show} autohide>
              <Toast.Body>
                {typeof number === 'number' && Math.round(number)}
              </Toast.Body>
            </Toast>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default AlertThresholdComponent;
