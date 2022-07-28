import { Col, message, Row } from "antd";
import { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import {useAuth} from "../../AuthProvider/useAuth";
import {RecoveryPasswordComponent} from "../../Components/RecoveryPassword";

export const RecoveryPassword = () => {

    const auth = useAuth();
    const history = useNavigate();

    async function onFinish(values: {email: string, password: string }) {
        let autho;
        try {
            autho = await auth.recovery(values.email, values.password);
            message.success("Cadastro Efetuado com sucesso!");
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
                        <h1 style={{ color: '#067bee' }}>Alterar senha</h1>
                        <RecoveryPasswordComponent onFinish={(e) => onFinish(e)} />
                    </Row>
                </Col>
            </Row>
        </Fragment>
    )
}