import React from "react";
import 'antd/dist/antd.min.css';
import "./Login.css";
import { Form, Input, Button } from "antd";
import { Link } from 'react-router-dom';

const Login = () => {
  const [form] = Form.useForm();

  return (
    <div className="login">
      <div className="container">
        <div className="cont1">
          <p className="log">Log In</p>
          <p>Enter your email and password below</p>
        </div>
        <div className="cont2">
        <Form
      form={form}
      layout="vertical"
    >
      
      <Form.Item label="EMAIL">
        <Input type='email' placeholder="Email address" />
      </Form.Item>
      <Form.Item  
      > <div className="password">
        <label>Password</label>
        <Link to='/'>Forgot password?</Link>
      </div>
        <Input type='password' placeholder="password" />
      </Form.Item>
      <Form.Item>
        <Button className="login-button" type="primary">Log In</Button>
      </Form.Item>
    </Form>
        </div>
        <div className="account">
            <p>Don’t have an account? <Link to={'/'} style={{color: 'blue'}}>Sign up</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
