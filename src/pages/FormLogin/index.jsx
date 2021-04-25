import React from "react";
import { connect } from 'react-redux'

import { Form, Input, Button, Checkbox } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import "./styles.css";
import { Link } from "react-router-dom";


import { loginAction } from '../../redux/actions'

const layout = {
  labelCol: { span: 0 },
  wrapperCol: { span: 24 },
};
const tailLayout = {
  wrapperCol: { offset: 0, span: 24 },
};

function FormLogin(props) {

  const { login, } = props

  return (

    <div className="container1">
      <div className="signup" style={{ padding: '10px' }}>
        <h2 className="signup-heading">LOGIN</h2> <br />
        <Form
          {...layout}
          name="basic"
          initialValues={{ email: "", password: "", remember: true }}
          onFinish={(values) => login(values)}
        >
          <Form.Item

            name="email"
            rules={[
              { required: true, message: "Please input your email!" },
              { type: "email", message: "The input is not valid E-mail!" },
            ]}
          >
            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder='Nhập email' />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password
              prefix={<LockOutlined className="site-form-item-icon" />} placeholder='Nhập password'
            />
          </Form.Item>

          <Form.Item {...tailLayout} name="remember" valuePropName="checked">
            <Checkbox>Remember me</Checkbox>
          </Form.Item>
          <Form.Item {...tailLayout}>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Login
            </Button>
            Do not have an account ? <Link to='/register' >register now!</Link>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

// const mapStateToProps = (state) => {
//   const { user } = state.userReducer
//   return {
//     user: user
//   }
// }

const mapDispatchToProps = (dispatch) => {
  return {
    login: (params) => dispatch(loginAction(params))
  }
}

export default connect(null, mapDispatchToProps)(FormLogin);
