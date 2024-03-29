import { Col, message, Row } from "antd";
import { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import {useAuth} from "../../AuthProvider/useAuth";
import {ProfileComponent} from "../../Components/Profile";

export const Profile = () => {

    const auth = useAuth();
    const history = useNavigate();

    async function onFinish(values: { name: string, email: string, password: string }) {
        let autho;
        try {
            autho = await auth.create(values.name, values.email, values.password);
            await auth.emailValidateSend(values.email)
            message.success("Cadastro Efetuado com sucesso!, Válide sua conta no email e evite que ela expire");
        } catch (error) {
            // @ts-ignore
            message.error(`Erro: ${error.detail}`);
        }
    }

    return (
        <Fragment>
            <Row align='middle' justify='center' style={{ height: '100vh', backgroundColor: '#067bee' }}>
                <Col flex="0 1 500px" style={{ backgroundColor: '#faf7f5', minWidth: '30%' }}>

                    <Row align='middle' justify='center' style={{ padding: '20px', height: '100%' }}>
                        <h1 style={{ color: '#067bee' }}>Registre-se</h1>
                        <ProfileComponent onFinish={(e) => onFinish(e)} />
                    </Row>
                </Col>
            </Row>
        </Fragment>
    )
}