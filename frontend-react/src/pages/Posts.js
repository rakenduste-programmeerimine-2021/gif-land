import {useState, useContext, useEffect} from "react"
import {Context} from "../store"
import {updatePosts} from "../store/actions"
import {Table, Input, InputNumber, Button, Form, Typography} from 'antd'
import {Link} from 'react-router-dom';
import Navbar from "../components/Navbar"

const postData = []
let i = 0
const cache = {};

function importAll(r) {
    r.keys().forEach((key) => (cache[key] = r(key)));
}
importAll(require.context("../../image_uploads", false, /.(png|jpe?g|svg)$/));

const images = Object.entries(cache).map(module => module[1].default);

let imageLoad = images.map(image => (
    <img style={{width: 100,height: 100}} src={image} />
))
function Posts(){

const [state, dispatch] = useContext(Context)
const [isLoading, setIsLoading] = useState(true)

  
    useEffect(() =>{
        fetch('http://localhost:8081/api/post/').then(res => {

            return res.json()

        }).then( data => {


            for (i; i < data.length; i++) {

                postData.push({
                  key: data[i]._id,
                  file: imageLoad,
                  text: data[i].text,
                  firstName: data[i].firstName,
                  lastName: data[i].lastName,
                  createdAt: data[i].createdAt,
                })

            }
            
            dispatch(updatePosts(data))
            setIsLoading(false)
        
        })
    
    },[isLoading])


    if(isLoading === true){
        return(
        <div>
            Loading...
        </div>);
    }
    
    const EditableCell = ({

        editing,
        dataIndex,
        filename,
        inputType,
        record,
        index,
        children,
        ...restProps

    }) => {

    const inputNode = inputType === 'number' ? <InputNumber/> : <Input/>

        return (

            <td {...restProps}>
            {editing ? (
                <Form.Item name={dataIndex} style={{margin: 0,}} 
                rules={[{required: true,
                message: `Please Input ${filename}!`,},]}>
                {inputNode}
                </Form.Item>
            ) : (children)}
            </td>
        )
    }
    
    const EditPosts = () => {

        const [form] = Form.useForm()
        const [dataforTable, setData] = useState(postData)
        
        
            const columns = [

            {
            title: 'file',
            dataIndex: 'file',
            width: '15%',
            editable: false,
            },
            {
            title: 'Text',
            dataIndex: 'text',
            width: '20%',
            editable: true,
            },
            {
            title: 'Firstname',
            dataIndex: 'firstName',
            width: '10%',
            editable: true,
            },
            {
            title: 'Lastname',
            dataIndex: 'lastName',
            width: '10%',
            editable: true,
            },
            {
            title: 'Date',
            dataIndex: 'createdAt',
            width: '15%',
            editable: false,
            },

        ]

        const mergedColumns = columns.map((col) => {
            if (!col.editable) {
            return col
            }
        
            return {

                ...col,
                onCell: (record) => ({
                    record,
                    inputType: col.dataIndex === 'age' ? 'number' : 'text',
                    dataIndex: col.dataIndex,
                    title: col.title,
                }),
            }
        })

        return (

            <Form form={form} component={false}>

                <Table components={{
                    body: {cell: EditableCell,},}}
                    bordered
                    dataSource={dataforTable}
                    columns={mergedColumns}
                    rowClassName="editable-row"
                    pagination={{
                }}/>
            </Form>
        )
        
    }
    
    return(
        <div>
            <Navbar/>
            <Link to="/addPost">
                <Button type="primary">Piltide laadimine</Button>
            </Link>
            <h1>New Gifs Feed</h1>
            <EditPosts/>
        </div>
    )
}

export default Posts