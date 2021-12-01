import { Form, Input, Button } from 'antd'
import {UserAddOutlined} from '@ant-design/icons'
import '../pages/Register.css'


function RegisterForm(props) {

  const [form] = Form.useForm()
    const onFinish = (values) => {
      console.log(values.email);
      let text = {"email" : values.email}
      console.log(text);
        try{
          fetch('http://localhost:8081/api/auth/registerEmailCheck', {
              method: 'POST',
              body: JSON.stringify(text),
              headers: {'Content-Type':'application/json'}
          }).then(response => response.json())
          .then(data => isEmailAlreadyUsed(data, values))
      
        }catch (error) {
            console.error(error)
        }
      }
      function isEmailAlreadyUsed(data, values){
        if(data.hasOwnProperty('error')){
          //console.log(data);
          props.onAddUser(0);
          document.getElementById("paroolconfirm").innerHTML = "Email on juba kasutusel";
        }else{
          completeRegistration(values);
        }

      }
      function completeRegistration(values){
        console.log(values);
        if(values.password === values.confirmPassword){
          console.log('Success:', values)
          try{
            fetch('http://localhost:8081/api/auth/signup', {
                method: 'POST',
                body: JSON.stringify(values),
                headers: {'Content-Type':'application/json'}
                
            });

          }catch (error) {
            console.error(error)
          }
          form.resetFields();
          props.onAddUser(1);
          document.getElementById("paroolconfirm").innerHTML = "";

        } else {

          document.getElementById("paroolconfirm").innerHTML = "Please Match the passwords!";
          form.resetFields();
          props.onAddUser(0);
        }
      }


    const onFailed = (errorInfo) => {
      console.log('Failed: ' + errorInfo);
      props.onAddUser(0);
    }

  return (
    <div className="grid-item">
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
          <label id="paroolconfirm"></label>
          <br></br>
          <br></br>
          <Form.Item style={{display: "flex", flexDirection: "center", justifyContent:"center" }}>
          <Button type="default" id="regalehenupp1" htmlType="submit"><UserAddOutlined/>Register</Button>
          </Form.Item>
        
      </Form>
      </div>
  )

}

export default RegisterForm