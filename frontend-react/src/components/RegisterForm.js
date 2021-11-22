import { Form, Input, Button, Layout } from 'antd'
import {UserAddOutlined} from '@ant-design/icons'

function RegisterForm() {

  const [form] = Form.useForm()
    const onFinish = (values) => {

      if(values.password === values.confirmPassword){
          console.log('Success:', values)
          try{
            fetch('http://localhost:8081/api/auth/signup', {
                method: 'POST',
                body: JSON.stringify(values),
                headers: {'Content-Type':'application/json'}
                
            }).then(data => isAccepted(data))

          }catch (error) {
            console.error(error)
          }
          form.resetFields()

      } else {

        console.log("The passwords must match!")

      }
    }

    function isAccepted(data) {

      if(data.hasOwnProperty('error')){

        console.log("Error registering!")

      } else {

        console.log("Register succeeded!")

      }
   }
    const onFailed = (errorInfo) => {
        console.log('Failed:', errorInfo)
    }

  return (

    <Layout className="container" type="flex" justify="center" align="middle">

      <Form form={form} labelCol={{span: 8}} wrapperCol={{span: 8}} initialValues={{remember: true,}}
       labelAlign="center" name="register" onFinish={onFinish} onFailed={onFailed}>

          <Form.Item label="E-mail" name="email" rules={[{required: true, 
          message: 'Please enter your Email!', },]}>
          <Input placeholder="email@email.com" type="email" required></Input>
          </Form.Item>

          <Form.Item label="First name" name="firstName" rules={[{required: true, 
          message: 'Please enter your Firstname!', },]}>
          <Input required placeholder="First Name" rules={[{required: true, 
          message: 'Please enter your Firstname!', },]}></Input>
          </Form.Item>

          <Form.Item label="Last name" name="lastName" rules={[{required: true, 
          message: 'Please enter your Lastname!', },]}>
          <Input required placeholder="Last Name"></Input>
          </Form.Item>

          <Form.Item label="Password" name="password" rules={[{required: true, 
          message: 'Please enter your password!', },]}>
          <Input type="password" placeholder="*********" required></Input>
          </Form.Item>

          <Form.Item label="Confirm password" name="confirmPassword" rules={[{required: true, 
          message: 'Please re-enter your password!', },]}>
          <Input type="password" placeholder="*********" required></Input>
          </Form.Item>
          
          <Form.Item style={{display: "flex", flexDirection: "center", justifyContent:"center" }}>
          <Button type="primary" htmlType="submit"><UserAddOutlined/>Register</Button>
          </Form.Item>
        
      </Form>
    </Layout>
  )

}

export default RegisterForm