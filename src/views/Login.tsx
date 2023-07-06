import { Button, Form, Input } from 'antd';
import React from 'react';
import axios from 'axios';
import { redirect } from 'react-router-dom';

class Login extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
  }

  render() {
    const handleLogin = () => {
      if (this.state.username && this.state.password) {
        axios.post('http://localhost:3000/login', { username: this.state.username, password: this.state.password })
          .then((response) => {
            if (response.status === 200) {
              console.log(response);
              redirect("/")
            } else if (response.status === 401) {
              window.location.reload();
            }
          })
          .catch((error) => {
            console.log(error);
          });

      }
    };
    return (
      <div style={{ textAlign: 'center', width: '300px', height: '300px', margin: 'auto', border: '1px solid', borderRadius: '5px', padding: '10px', marginTop: '200px', backgroundColor: '#fff' }}>
        <h2 style={{ color: 'black' }}>用户登录</h2>
        <Form>
          <Form.Item
            name="username"
            rules={[
              { required: true, message: '请输入用户名' },
              { max: 6, message: '用户名不能超过6位数' },
              { pattern: /^[a-zA-Z0-9]+$/, message: '用户名只能为纯数字或纯英文字母' },
              { pattern: /^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]+$/, message: '用户名必须为数字与英文字母组合' }
            ]}
          >
            <Input type="text" id="username" name="username" placeholder="请输入用户名" value={this.state.username} onChange={(e) => this.setState({ username: e.target.value })} />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              { required: true, message: '请输入密码' },
              { min: 6, message: '密码最少6位' },
              { pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/, message: '密码必须包括至少1个大写字母，1个小写字母，1个数字，1个特殊字符' }
            ]}
          >
            <Input.Password type="password" id="password" name="password" placeholder="请输入密码" value={this.state.password} onChange={(e) => this.setState({ password: e.target.value })} />
          </Form.Item>
          <Button style={{ width: '100%' }} type="primary" htmlType="submit" onClick={handleLogin}>登录</Button>

          <Form.Item>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <a href="/register">快速注册</a>
              <a href="/forgot-password">忘记密码</a>
            </div>
          </Form.Item>

        </Form>
      </div>
    );
  }
}

export default Login;