import React, { useState } from "react";
import { signUp } from "../services/user-service";
import { toast } from "react-toastify";
import {
  Container,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Alert,
  Card,
  CardBody,
  CardHeader,
  Row,
  Col,
  FormFeedback,
  Spinner
} from "reactstrap";
import Base from "../components/Base";

const Signup = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    
  });

  const [error, setError] = useState({
    errors: {},
    isError: false,
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (event, property) => {
    setData({ ...data, [property]: event.target.value });
  };

  const resetData = () => {
    setData({
      name: "",
      email: "",
      password: "",
      about: "",
    });
  };

  const submitForm = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError({ errors: {}, isError: false });

    if (error.isError) {
      toast.error("Form data is invalid. Please correct all errors before submitting.");
      return;
    }

    try {
      const resp = await signUp(data);
      toast.success("User registered successfully! User ID: " + resp.id);
      resetData();
    } catch (err) {
      setError({ errors: err.response?.data || {}, isError: true });
      toast.error("Registration failed. Please check the details.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Base>
      <Container className="mt-5">
        <Row className="justify-content-center">
          <Col md={6}>
            <Card className="shadow-lg rounded p-4" >
             
              <h2 className="text-center mb-4 text-black pt-2">Signup</h2>
             

              <CardBody>
                {error.isError && <Alert color="danger">Please correct the highlighted fields.</Alert>}

                <Form onSubmit={submitForm}>
                  <FormGroup>
                    <Label for="name" className="fw-bold">Full Name</Label>
                    <Input
                      type="text"
                      placeholder="Enter your name"
                      id="name"
                      onChange={(e) => handleChange(e, "name")}
                      value={data.name}
                      invalid={!!error.errors?.name}
                    />
                    <FormFeedback>{error.errors?.name}</FormFeedback>
                  </FormGroup>

                  <FormGroup>
                    <Label for="email" className="fw-bold">Email Address</Label>
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      id="email"
                      onChange={(e) => handleChange(e, "email")}
                      value={data.email}
                      invalid={!!error.errors?.email}
                    />
                    <FormFeedback>{error.errors?.email}</FormFeedback>
                  </FormGroup>

                  <FormGroup>
                    <Label for="password" className="fw-bold">Password</Label>
                    <Input
                      type="password"
                      placeholder="Enter your password"
                      id="password"
                      onChange={(e) => handleChange(e, "password")}
                      value={data.password}
                      invalid={!!error.errors?.password}
                    />
                    <FormFeedback>{error.errors?.password}</FormFeedback>
                  </FormGroup>

                  

                  <div className="text-center mt-4">
                    <Button color="primary" className="px-4" disabled={loading}>
                      {loading ? <Spinner size="sm" /> : "Register"}
                    </Button>
                    <Button onClick={resetData} color="danger" className="ms-3 px-4" disabled={loading}>
                      Reset
                    </Button>
                  </div>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Base>
  );
};

export default Signup;
