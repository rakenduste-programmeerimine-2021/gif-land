import { useHistory } from "react-router-dom";
import {useState, useContext, useEffect} from "react"
import {Context} from "../store"
import {updatePosts} from "../store/actions"
import Navbar from "../components/Navbar"

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

function OtherProfilePage(){

    const history = useHistory()
    const [item, setItem] = useState(null);
    const [state, dispatch] = useContext(Context)
    const [isLoading, setIsLoading] = useState(true)

    const handler = () => {
        //Redirect to another route
        history.push("/postsAll") 
    }

    if (!state.auth.token) {
        handler();
    }
    
    useEffect(()=> {
        const PostID = window.location.href.split("/posts/")[1];

        //console.log(myArray);


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


        setItem(PostID);
    } ,[isLoading])


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
                <button onClick={()=>itemEditHandler(post.key, post.likeAmount)}>Add UpVote</button>
                <br/>
                <br/>
                <button onClick={()=>toProfileHandler(post.firstName, post.lastName)}>To ProfilePage</button>
            </div>)

            }

        </div>
        </div>
    )




}

export default OtherProfilePage;