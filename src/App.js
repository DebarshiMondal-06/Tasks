import React from 'react'
import { Button, Layout } from 'antd';
import { Header } from 'antd/lib/layout/layout';
import "./index.css";
import FormComp from './FormComp';


const App = () => {

  return <>
    <Layout>
      <Header className='navbar shadow-sm'>
        <div className='text'>
          ATools
        </div>
        <div className='nav-btn'>
          <Button className='btn btn-startfreetrail'>StartFree Trail</Button>
          <Button className='btn btn-login'>Login</Button>
        </div>
      </Header>
    </Layout>
    <Layout>
      <div className='row login-section'>
        <section className='col-md-5 login'>
          <FormComp />
        </section>
        <section className='col-md-7 sideimage'>
          <p className='image'></p>
        </section>
      </div>
    </Layout>
  </>
}

export default App;