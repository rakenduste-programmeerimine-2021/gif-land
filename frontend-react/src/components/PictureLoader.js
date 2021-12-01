import {useState, useContext, useEffect} from "react"
import {Context} from "../store"
import {updatePosts} from "../store/actions"
import './Pictures.css'
  
const postData = []
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

function PictureLoader(){

    const [state, dispatch] = useContext(Context)
    const [isLoading, setIsLoading] = useState(true)
    
        useEffect(() =>{
            fetch('http://localhost:8081/api/post/').then(res => {
    
                return res.json()
    
            }).then(data => {
    
                for (i; i < data.length; i++) {
    
                    postData.push({
                      id: data[i]._id,
                      image: imageLoad[i],
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
            </div>)
        }

        return(
            <div className="post-grid">
            {
            postData.map((post) => 
            <div className={post.id}>
            <p>
            {post.image}<br/><br/>
            <b>User:</b> {post.firstName +" "+ post.lastName}<br/>
            <b>Description:</b> {post.text}<br/>
            <b>Posted at:</b> {post.createdAt}</p>
            </div>)
            } 
            </div>
        )
    }
    
    export default PictureLoader;