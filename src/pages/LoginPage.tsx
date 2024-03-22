import { Button, Checkbox, CheckboxProps, Col, Form, Input, Row } from "antd";
import React from "react";
import "./index.scss";

function LoginPage() {
  const [form] = Form.useForm();
  const onFinish = (values: any) => {
    // handleLogin(values);
  };
  const onChange: CheckboxProps["onChange"] = (e: any) => {
    console.log(`checked = ${e.target.checked}`);
  };
  return (
    <Row className="login-container">
      <Col className="col-1" span={9}>
        {" "}
      </Col>
      <Col className="col-2" span={15}>
        <div className="wrapper-signIn-form">
          <Row>
            <h1>Sign In</h1>
          </Row>
          <Row>
            <Form
              form={form}
              onFinish={onFinish}
              className="auth-form px-4 py-5 px-md-5 bg-glass"
              style={{
                borderRadius: "0.35rem",
              }}
            >
              <div>
                <label className="bold">Email Address</label>
                <Form.Item
                  name="email"
                  rules={[
                    {
                      required: true,
                      message: "Please enter your email",
                    },
                  ]}
                >
                  <Input
                    type="email"
                    placeholder="Enter Your Email"
                    className=""
                  />
                </Form.Item>
              </div>

              <div>
                <label className="bold">Password</label>
                <Form.Item
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: "Please enter your password",
                    },
                  ]}
                >
                  <Input
                    type="password"
                    placeholder="Enter Password"
                    className=""
                  />
                </Form.Item>
              </div>

              <div>
                <Form.Item
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: "Please enter your password",
                    },
                  ]}
                >
                  <Checkbox onChange={onChange}>Show Password</Checkbox>
                </Form.Item>
              </div>

              <div>
                <Form.Item>
                  <Button
                    className="login-btn"
                    type="primary"
                    htmlType="submit"
                  >
                    Sign In
                  </Button>
                </Form.Item>
              </div>

              <div className="wrap-or">
                <div />
                OR
                <div />
              </div>
              <Button className="btn-google">
                <i className="icon-google" />
                <p>Continue with Google</p>
              </Button>
            </Form>
          </Row>
        </div>
      </Col>
    </Row>
  );
}

export default LoginPage;
