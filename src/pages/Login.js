import React, { useState } from "react";
import Base from "../components/Base";
import { login } from "../services/user-service";
import { 
    Container, 
    Form, 
    FormGroup, 
    Label, 
    Input, 
    Button, 
    Alert, 
    Spinner 
} from "reactstrap";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        try {
            const data = await login({ email, password });
            console.log("Login successful:", data);
            alert("Login successful!");
        } catch (err) {
            setError("Invalid email or password");
        } finally {
            setLoading(false);
        }
    };

    return (
        <Base>
            <Container className="mt-5">
                <div className="d-flex justify-content-center">
                    <div className="p-4 border rounded shadow-sm" style={{ width: "400px", background: "#fff" }}>
                        <h2 className="text-center mb-4">Login</h2>
                        
                        {error && <Alert color="danger">{error}</Alert>}

                        <Form onSubmit={handleSubmit}>
                            <FormGroup>
                                <Label for="email">Email</Label>
                                <Input
                                    type="email"
                                    id="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </FormGroup>

                            <FormGroup>
                                <Label for="password">Password</Label>
                                <Input
                                    type="password"
                                    id="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </FormGroup>

                            <Button color="primary" block disabled={loading}>
                                {loading ? <Spinner size="sm" /> : "Login"}
                            </Button>
                        </Form>
                    </div>
                </div>
            </Container>
        </Base>
    );
};

export default Login;
