import {Input, Button, Layout} from 'antd'

function AddPostForm(){

    function TryToUpload(){
        console.log(document.getElementById("Desc_input").value);
        console.log(document.getElementById("image_input").value);
        let descpritiontext = document.getElementById("Desc_input").value;
        let imageinformation = document.getElementById("image_input").value;
        if(!imageinformation){
            imageinformation = "Puudub"
        }
        let firstNameVariable = "Jan";
        let lastNameVariable = "Laan";

        const Post= {
            filename: imageinformation,
            text: descpritiontext,
            firstName: firstNameVariable,
            lastName: lastNameVariable
        };
        onFinish(Post);
    }

    const onFinish = (values) => {
        console.log('Success:', values)
        try{
            fetch('http://localhost:8081/api/post/create', {
                method: 'POST',
                body: JSON.stringify(values),
                headers: {'Content-Type':'application/json'}
            })

        }catch (error) {
            console.error(error)
        }
    }

    return(
        <div>
            <input type="text" id="Desc_input" placeholder="Description" required></input>
            <br></br><br></br>
            <input type="file" id="image_input" required ></input>
            <br></br><br></br>
            <div className="Submit">
            <Button style={{color:'#FFFFFF', backgroundColor: '#1890ff'}} 
            onClick={() => TryToUpload()}>Submit</Button>
            </div>
        </div>
    )
}

export default AddPostForm