import { LoginInfo } from "../components/LoginInfo";
import { LoginForm } from "../components/LoginForm";
import { Col, Container, Row } from "react-bootstrap";



export const Login = () => {
    return (
        <main className="vh-100 py-5" style={{boxSizing: 'border-box'}}>
            <Container className="container-pag-login h-100">
                <Row className="row-pag-login h-100 w-100">
                    <Col lg={6} className="d-none d-lg-block">
                        <LoginInfo/>
                    </Col>
                    <Col lg={6} className="container-login-form d-flex justify-content-center align-items-center">
                        <LoginForm/>
                    </Col>
                </Row>
            </Container>
        </main>
    )
}