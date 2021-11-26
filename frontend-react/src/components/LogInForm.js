import { Form, Input, Button } from 'antd'
import {UserAddOutlined} from '@ant-design/icons'

function LogInForm(props){    

    const [form] = Form.useForm()
    const onFinish = (values) => {
        console.log('Formi v22rtused:', values)
        try{
            fetch('http://localhost:8081/api/auth/login', {
                method: 'POST',
                body: JSON.stringify(values),
                headers: {'Content-Type':'application/json'}
            }).then(response => response.json())
            .then(data => isAccepted(data))
        
        }catch (error) {
            console.error(error)
        }

    }
    function isAccepted(data){
        //console.log(data);
        if(data.hasOwnProperty('error')){
            props.onLogInUser(0)
        }else{
            props.onLogInUser(1, data)
        }
    }
    
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo)
        props.onLogInUser(0)
    };

    return(
        <div class="grid-item">
        <Form form={form} name="basic" labelCol={{span: 8,}} wrapperCol={{span: 8,}}
        initialValues={{remember: true,}} onFinish={onFinish} onFinishFailed={onFinishFailed}
        autoComplete="off">

        <Form.Item label="Email" name="email" 
        rules={[{required: true, message: 'Please enter your e-mail!',},]}>
        <Input />

        </Form.Item>
        <Form.Item label="Password" name="password" 
        rules={[{ required: true, message: 'Please enter your password!',},]}>
        <Input.Password />
        </Form.Item>
	<br></br>
        <Form.Item style={{display: "flex", flexDirection: "center", justifyContent:"center" }}>
          <Button type="default" id="loginlehenupp1" htmlType="submit"><UserAddOutlined/>Login</Button>
          </Form.Item>

        </Form>

        </div>
    )
}

export default LogInForm