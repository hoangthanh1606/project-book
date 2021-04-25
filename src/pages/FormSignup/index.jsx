import React from "react";
import { Form, Input, Button } from "antd";
import {
  MailOutlined,
  LockOutlined,
  UserOutlined,
  MobileOutlined,
} from "@ant-design/icons";
import "./styles.css";
import { Link } from "react-router-dom";

const layout = {
  labelCol: { span: 0 },
  wrapperCol: { span: 24 },
};
const tailLayout = {
  wrapperCol: { offset: 0, span: 24 },
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
      <div className="signup" style={{ padding: '10px' }}>
        <h2 className="signup-heading">REGISTER</h2> <br />
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
            name="email"
            rules={[
              { required: true, message: "Please input your email!" },
              { type: "email", message: "The input is not valid E-mail!" },
            ]}
          >
            <Input prefix={<MailOutlined className="site-form-item-icon" />} placeholder='Nhập email...' />
          </Form.Item>

          <Form.Item
            name="name"
            rules={[{ required: true, message: "Please input your Name!" }]}
          >
            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder='Nhập tên...' />
          </Form.Item>

          <Form.Item
            name="phone"
            rules={[{ required: true, message: "Please input your Phone!" }]}
          >
            <Input
              prefix={<MobileOutlined className="site-form-item-icon" />} placeholder='Nhập Số điện thoại...'
            />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
            hasFeedback
          >
            <Input.Password
              prefix={<LockOutlined className="site-form-item-icon" />} placeholder='Nhập password...'
            />
          </Form.Item>

          <Form.Item
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
              prefix={<LockOutlined className="site-form-item-icon" />} placeholder='Xác Nhận lại password...'
            />
          </Form.Item>

          <Form.Item {...tailLayout}>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Register
            </Button>
            Already have an account? <Link to='/login'>Sign in now!</Link>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default FormSignup;
