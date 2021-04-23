import React from "react";
import { Form, Input, Button } from "antd";
import {
  MailOutlined,
  LockOutlined,
  UserOutlined,
  MobileOutlined,
} from "@ant-design/icons";
import "./styles.css";

const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 4, span: 16 },
};

function FormSignup() {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="container1">
      <div className="signup">
        <h2 className="signup-heading">Sign Up</h2> <br />
        <Form
          {...layout}
          name="basic"
          initialValues={{
            email: "",
            name: "",
            phone: "",
            password: "",
            password2: "",
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label="Email"
            name="email"
            rules={[
              { required: true, message: "Please input your email!" },
              { type: "email", message: "The input is not valid E-mail!" },
            ]}
          >
            <Input prefix={<MailOutlined className="site-form-item-icon" />} />
          </Form.Item>

          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: "Please input your Name!" }]}
          >
            <Input prefix={<UserOutlined className="site-form-item-icon" />} />
          </Form.Item>

          <Form.Item
            label="Phone"
            name="phone"
            rules={[{ required: true, message: "Please input your Phone!" }]}
          >
            <Input
              prefix={<MobileOutlined className="site-form-item-icon" />}
            />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
            hasFeedback
          >
            <Input.Password
              prefix={<LockOutlined className="site-form-item-icon" />}
            />
          </Form.Item>

          <Form.Item
            label="Re-Password"
            name="password2"
            dependencies={["password"]}
            hasFeedback
            rules={[
              { required: true, message: "Please input Confirm Password!" },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }

                  return Promise.reject(
                    new Error(
                      "The two passwords that you entered do not match!"
                    )
                  );
                },
              }),
            ]}
          >
            <Input.Password
              prefix={<LockOutlined className="site-form-item-icon" />}
            />
          </Form.Item>

          <Form.Item {...tailLayout}>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Sign up
            </Button>
            Already have an account? <a href="">Sign in now!</a>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default FormSignup;
