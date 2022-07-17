import { Col, Image, message, Row } from "antd";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/logo.png";
import { LoginComponent } from "../../Components/Login";
import { Fragment } from "react";
import {useAuth} from "../../AuthProvider/useAuth";

export function Login() {
    const auth = useAuth();
    const history = useNavigate();

    async function onFinish(values: any) {
        try {
            await auth.authenticate(values.email, values.password);
            history('/profile');
        } catch (error) {
            message.error("Email e/ou senha inválidos!");
        }
    }

    const onForgot = () => {
        history('/forgot');
    }

    const onSignUp = () => {
        history('/profile');
    }

    return (
        <Fragment>
            <Row align='middle' justify='center' style={{ height: '100vh', backgroundColor: '#067bee' }}>
                <Col flex="0 1 500px" style={{ backgroundColor: '#faf7f5', minWidth: '30%', height: '100vh' }}>
                    <Row align='middle' justify='center' style={{ padding: '20px', height: '100%' }}>
                        <LoginComponent
                            onFinish={(e) => onFinish(e)}
                            onForgot={(e) => onForgot()}
                            onSignUp={(e) => onSignUp()}
                        />
                    </Row>
                </Col>
            </Row>
        </Fragment>

    )
}