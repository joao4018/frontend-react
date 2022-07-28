import { Button, Col, Form, Input, Row, message } from "antd";
import {EditOutlined, MailOutlined} from '@ant-design/icons';
import { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import {useAuth} from "../../AuthProvider/useAuth";

export const ValidateCode = () => {
    const auth = useAuth();
    const history = useNavigate();

    async function onFinish(values: { code: string }) {
        try {
            await auth.codeValidate(values.code);
            // history('/login');
        } catch (error) {
            message.error("Código errado");
        }
    }

    return (
        <Fragment>
            <Row align='middle' justify='center' style={{ height: '100vh', backgroundColor: '#067bee' }}>
                <Col flex="0 1 500px" style={{ backgroundColor: '#faf7f5', minWidth: '30%' }}>
                    <Row align='middle' justify='center' style={{ padding: '20px', height: '100%' }}>
                        <Form name="normal_forgot" initialValues={{ remember: true }} onFinish={onFinish} style={{ width: '100%', }}>
                            <h2>Insira o código que recebeu no email</h2>
                            <Form.Item name="code" rules={[{ required: true, message: 'Entre com seu codigo.' }]}>
                                <Input prefix={<EditOutlined  className="site-form-item-icon" />} placeholder="Código..." />
                            </Form.Item>
                            <Form.Item>
                                <Row>
                                    <Button type="primary" htmlType="submit" style={{ width: '100%' }}>Validar</Button>
                                </Row>
                            </Form.Item>
                        </Form>
                    </Row>
                </Col>
            </Row>
        </Fragment>
    )
}