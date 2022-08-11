import { Button, Col, Form, Input, Row, message } from "antd";
import {Fragment, useEffect} from "react";
import {useNavigate, useSearchParams} from "react-router-dom";
import {useAuth} from "../../AuthProvider/useAuth";

export const ValidateEmail = () => {
    const auth = useAuth();
    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        // declare the data fetching function
        const fetchData = async () => {
            let email = searchParams.get("email");
            const data = await auth.emailValidate(email);
        }
        // call the function
        fetchData()
            // make sure to catch any error
            .catch(console.error);
    }, [])


    return (
        <Fragment>
            <Row align='middle' justify='center' style={{ height: '100vh', backgroundColor: '#067bee' }}>
                <Col flex="0 1 500px" style={{ backgroundColor: '#faf7f5', minWidth: '30%' }}>
                    <Row align='middle' justify='center' style={{ padding: '20px', height: '100%' }}>
                        <h1 style={{ color: '#067bee' }}>Validação de email concluída</h1>
                        <p style={{ color: '#067bee' }}>{'Parabéns por fazer parte da nossa plataforma ' + searchParams.get("email")} </p>
                    </Row>
                </Col>
            </Row>
        </Fragment>
    )
}