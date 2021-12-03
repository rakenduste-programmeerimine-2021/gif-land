import {useState, useContext, useEffect} from "react"
import {Context} from "../store"
import {updatePosts} from "../store/actions"
import './Pictures.css'
import { Button } from 'antd'
import { LikeOutlined } from '@ant-design/icons'  
let postData = []
let i = 0
const cache = {};

function importAll(r) {
    r.keys().forEach((key) => (cache[key] = r(key)));
}
importAll(require.context("../../image_uploads", false, /.(png|jpe?g|svg|gif)$/))

const images = Object.entries(cache).map(module => module[1].default)

let imageLoad = images.map(image => (
    <img style={{width: 250,height: 250}} src={image}/>
))

function ProfilePictureLoader(){

    const [state, dispatch] = useContext(Context)
    const [isLoading, setIsLoading] = useState(true)
    
        useEffect(() =>{
            postData = []
            fetch('http://localhost:8081/api/post/').then(res => {
    
                return res.json()
    
            }).then(data => {
                let m =data.length - 1
                
                for (m; 0 <= m; m--) {
                    if(state.auth.firstName===data[m].firstName){
                        postData.push({
                            key: data[m]._id,
                            image: imageLoad[m],
                            text: data[m].text,
                            firstName: data[m].firstName,
                            lastName: data[m].lastName,
                            likeAmount: data[m].likeAmount,
                            createdAt: data[m].createdAt,
                        })
                    }
                }
                
                dispatch(updatePosts(data))
                setIsLoading(false)
            
            })
        
        },[isLoading])

        function itemEditHandler(ID, Likes){
            console.log(ID);
            console.log(Likes);

            let liida = Likes+1
            const itemSubmitted={
                id: ID,
                likeAmount: liida

            }
            //console.log(itemSubmitted);
            fetch('http://localhost:8081/api/post/update/' + ID.toString(), {
                method: 'PUT',
                body: JSON.stringify(itemSubmitted),
                headers: {
                    'Content-Type':'application/json'
                }
            });
            setIsLoading(true)
        }
    
        if(isLoading === true){
            return(
            <div>
                Loading...
            </div>)
        }

        return(
            <div className="post-grid">
                {
                postData.map((post) => 
                <div className={post.key}>
                    <p>
                    {post.image}<br/><br/>
                    <b>User:</b> {post.firstName +" "+ post.lastName}<br/>
                    <b>Description:</b> {post.text}<br/>
                    <b>Posted at:</b> {post.createdAt}<br/>
                    <b>Upvote amount:</b> {post.likeAmount}</p>
                    <Button type="default" onClick={()=>itemEditHandler(post.key, post.likeAmount)}><LikeOutlined/>Add Upvote</Button>
                </div>)

                }

            </div>
        )
    }
    
    export default ProfilePictureLoader;