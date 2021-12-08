import { useHistory } from "react-router-dom"
import { useState, useContext, useEffect } from "react"
import { Context } from "../store"
import { updatePosts } from "../store/actions"
import Navbar from "../components/Navbar"
import { LikeOutlined, UserOutlined, CommentOutlined } from '@ant-design/icons'
import { Button } from 'antd'

let postData = []
let commentData = []
const cache = {};

function importAll(r) {
    r.keys().forEach((key) => (cache[key] = r(key)));
}
importAll(require.context("../../image_uploads", false, /.(png|jpe?g|svg|gif)$/))

const images = Object.entries(cache).map(module => module[1].default)

let imageLoad = images.map(image => (
    <img style={{width: 250,height: 250}} src={image}/>
));

function PostDetailedView(){

    const history = useHistory();
    const [item, setItem] = useState(null);
    const [state, dispatch] = useContext(Context);
    const [isLoading, setIsLoading] = useState(true);

    const handler = () => {
        //Redirect to another route
        history.push("/postsAll") 
    }

    if (!state.auth.token) {
        handler();
    }
    
    useEffect(()=> {
        const PostID = window.location.href.split("/posts/")[1];

        postData = []
        fetch('http://localhost:8081/api/post/').then(res => {

            return res.json()

        }).then(data => {
            let m =data.length - 1
            
            for (m; 0 <= m; m--) {
                
                if(data[m]._id===PostID){
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
        
        commentData = []
        fetch('http://localhost:8081/api/comment/').then(res => {

            return res.json()

        }).then(data => {

            let m = data.length - 1
            for (m; 0 <= m; m--) {
                
                if(data[m].postId===PostID){
                    commentData.push({
                        key: data[m]._id,
                        postId: data[m].postId,
                        commentUser: data[m].commentUser,
                        comment: data[m].comment,
                        createdAt: data[m].createdAt,
                    })
                }
            }
            
        })

        setItem(PostID);
    } ,[isLoading]);

    function itemEditHandler(ID, Likes){

        let numberOfLikes = Likes + 1
        const itemSubmitted={
            id: ID,
            likeAmount: numberOfLikes

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
    function itemCommentHandler(ID){

        let commentText = document.getElementById("comment_input").value;

        if(commentText.length < 1){
            console.log("Error posting comment!")

        }else{
            const commentSubmitted={
                postId: ID,
                commentUser: state.auth.firstName +" "+ state.auth.lastName,
                comment: commentText      
            }

        //console.log(itemSubmitted);
        fetch('http://localhost:8081/api/comment/create/', {
            method: 'POST',
            body: JSON.stringify(commentSubmitted),
            headers: {
                'Content-Type':'application/json'
            }
        });
        setIsLoading(true)

        }
    }

    function toProfileHandler(firstName, lastName){

        const handler = () => {
            //Redirect to another route
            history.push("/profilepage/"+firstName +"/"+ lastName) 
        }
        handler();
    }

    if(isLoading === true){
        return(
        <div>
            Loading...
        </div>)
    }

    if(item == null){
        return "Loading...";
    }

    return(
        <div>
            <Navbar/>
            <br />
            <h1 id="tervitus">Detailed post view</h1>
            <div className="detailed-post-grid">
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
                    <br/>
                    <br/>
                    <Button type="default" onClick={()=>toProfileHandler(post.firstName, post.lastName)}><UserOutlined/>Back to profile page</Button>
                    <br/>
                    <br/>
                    <br/>
                    <textarea id="comment_input" rows="3" cols="40" placeholder="Add comment"/>
                    <br/>
                    <br/>
                    <Button type="default" onClick={()=>itemCommentHandler(post.key)}><CommentOutlined/>Add comment</Button>
                </div>)
                }
            </div>
            <br/>
            <h1>Comments:</h1>
            <div className="comment-grid">
                {
                commentData.map((comment) => 
                <div className={comment.key}>
                    <p>
                    <b>User:</b> {comment.commentUser}<br/>
                    <b>Comment:</b> {comment.comment}<br/>
                    <b>Posted at:</b> {comment.createdAt}<br/>
                    </p>
                </div>)
                }
            </div>
        </div>
    )

}

export default PostDetailedView;