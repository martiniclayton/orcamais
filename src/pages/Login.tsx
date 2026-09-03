import { LoginInfo } from "../components/LoginInfo";
import { LoginForm } from "../components/LoginForm";
import { Col, Container, Row } from "react-bootstrap";

export const Login = () => {
    return (
        <main className="vh-100 py-5" style={{boxSizing: 'border-box'}}>
            <Container className=" h-100 ">
                <Row className="">
                    <Col md={6}>
                        <LoginInfo></LoginInfo>
                    </Col>
                    <Col md={6}>
                        <LoginForm></LoginForm>
                    </Col>
                </Row>
            </Container>
        </main>
    )
}