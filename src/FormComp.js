import React from 'react'
import { Form, Input, Checkbox, Button } from 'antd';
import { Content } from 'antd/lib/layout/layout';
import axios from 'axios';
import { toast } from 'react-toastify';
import Mom from './mom';


const FormComp = () => {
  console.log(Mom);
  
  const onFinish = async (values) => {
    try {
      const result = await axios({
        url: "https://reqres.in/api/login",
        method: 'POST',
        data: values
      });
      if (result) {
        toast.success(`Token:: ${result.data.token}`)
      }
    } catch (err) {
      const { error } = err.response && err.response.data;
      if (error) toast.error(error);
    }
  };


  return <>
    <h1>Welcome Back</h1>
    <p>Lorem ipsum dolor sit amet.</p>

    <Form name="basic" autoComplete="off" onFinish={onFinish} className='form'>
      <Form.Item name="email">
        <Input placeholder='Email Address*' className='form-input' />
      </Form.Item>

      <Form.Item name="password">
        <Input placeholder='Password*' className='form-input' />
      </Form.Item>

      <Form.Item>
        <Button type="primary" className='btn submit-btn' htmlType="submit">
          Login
        </Button>
      </Form.Item>

      <Form.Item className='extras'>
        <Checkbox className='checkbx'> Remember Password</Checkbox>
        <Content className='forgot'>Forgot Password?</Content>
      </Form.Item>

    </Form>
  </>
}

export default FormComp;