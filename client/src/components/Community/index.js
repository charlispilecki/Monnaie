import React, { useEffect, useState } from "react"
import API from "../../utils/API"
import moment from "moment"

export default function() {

    const [posts, setPosts] = useState([])
    const [showCreatePostForm, setShowCreatePostForm] = useState(false)
    const [showCreateCommentForm, setShowCreateCommentForm] = useState(false)
    const [commentPostID, setCommentPostID] = useState('')

    useEffect(() => {
        loadPosts()
    }, [])

    function loadPosts() {
        API.getPosts().then(resp => {
            console.log(resp.data)
            setPosts(resp.data)
        })
    }

    function savePost(post) {
        API.createPost(post).then(() => {
            setShowCreatePostForm(false)
            loadPosts()
        })
    }

    function saveComment(comment) {
        comment.postID = commentPostID
        API.createComment(comment).then(() => {
            setShowCreateCommentForm(false)
            loadPosts()
        })
    }

    function showCommentForm(postID) {
        setCommentPostID(postID)
        setShowCreateCommentForm(true)
    }

    return (
        <div className="">
        <div className="container">

            {showCreatePostForm && <CreatePostForm setShowCreatePostForm={setShowCreatePostForm} savePost={savePost}></CreatePostForm>}
            {showCreateCommentForm && <CreateCommentForm setShowCreateCommentForm={setShowCreateCommentForm} saveComment={saveComment}></CreateCommentForm>}

            {/* <h1 className="title mt-5">Community Page</h1> */}
            <div className="mt-6 is-size-5">
                <p className="px-6 has-text-centered">
                    This is our community page, where users can share their wedding details, help each other with wedding questions, or simply commiserate on all the highs and lows of wedding planning.
                </p>
                <p className="p-2 has-text-centered">
                    Please be kind, considerate, and have fun!
                </p>
            </div>
            <button onClick={() => setShowCreatePostForm(true)} className="button is-info is-outlined mb-4">
                Add Post
            </button>
            {
                posts.map(post => {
                    return (
                        <Post key={post._id} post={post} showCommentForm={showCommentForm}>
                        </Post>
                    )
                })
            }
        </div>
        </div>
    )
}

function Post({post, showCommentForm}) {
    const [showComments, setShowComments] = useState(false)
    return (
        <div className="mb-6">
        <div className="box">
            <div className="is-flex is-justify-content-flex-end">
                <small className="mr-6">Created by: {post.username}</small>
                <small className="mr-3">Posted: {moment(post.timestamp).format('MMMM Do YYYY, h:mm:ss a')}</small>
            </div>
            <h2 className="title is-size-4 mb-5">
                {post.title}
            </h2>
            <div className="mb-5">
                <p>{post.body}</p>
            </div>
            <div className="is-flex is-justify-content-flex-end">

                {
                    showComments ? 
                        <button onClick={() => setShowComments(false)} className="button is-info is-outlined mb-2" style={{width: '150px'}}>
                            Hide Replies
                        </button> :
                        <button onClick={() => setShowComments(true)} className="button is-info is-outlined mb-2" style={{width: '150px'}}>
                            Show Replies ({post.comments.length})
                        </button>
                }
                
                
                <button onClick={() => showCommentForm(post._id)} className="button is-info is-outlined mb-2 ml-3" style={{width: '150px'}}>
                    Reply
                </button>
            </div>
        </div>
        {
            showComments &&
                <div className="pb-6">
                    {
                        post.comments.map(comment => {
                            return <Comment key={comment._key} comment={comment}></Comment>
                        })
                    }
                </div>
        }
        
        </div>
    )
}

function Comment({comment}) {
    return (
        <div className="box ml-6 mr-3">
            <div className="is-flex is-justify-content-flex-end">
                <small className="mr-6">Created by: {comment.username}</small>
                <small className="mr-3">Posted: {moment(comment.timestamp).format('MMMM Do YYYY, h:mm:ss a')}</small>
            </div>
            <p className="p-2 mt-3">{comment.body}</p>
            
        </div>
    )
}

function CreatePostForm({setShowCreatePostForm, savePost}) {

    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')

    function save() {
        savePost({
            title,
            body,
            timestamp: Date.now(),
            comments: []
        })
    }

    return (
        <div className="modal is-active is">
            <div className="modal-background"></div>
            <div className="modal-card">
                <header className="modal-card-head">
                    <p className="modal-card-title">Create Post</p>
                    <button onClick={()=>setShowCreatePostForm(false)} className="delete" aria-label="close"></button>
                </header>
                <section className="modal-card-body">
                    <input value={title} onChange={e=>setTitle(e.target.value)} className="input" placeholder="Title" />
                    <textarea value={body} onChange={e=>setBody(e.target.value)} className="textarea mt-3" placeholder="Type your post here"></textarea>
                </section>
                <footer className="modal-card-foot">
                    <button onClick={save} className="button is-success">Save</button>
                    <button onClick={()=>setShowCreatePostForm(false)} className="button">Cancel</button>
                </footer>
            </div>
        </div>
    )
}

function CreateCommentForm({setShowCreateCommentForm, saveComment}) {

    const [body, setBody] = useState('')

    function save() {
        saveComment({
            body,
            timestamp: Date.now()
        })
    }

    return (
        <div className="modal is-active is">
            <div className="modal-background"></div>
            <div className="modal-card">
                <header className="modal-card-head">
                    <p className="modal-card-title">Comment</p>
                    <button onClick={()=>setShowCreateCommentForm(false)} className="delete" aria-label="close"></button>
                </header>
                <section className="modal-card-body">
                    <textarea value={body} onChange={e=>setBody(e.target.value)} className="textarea mt-3" placeholder="Type your post here"></textarea>
                </section>
                <footer className="modal-card-foot">
                    <button onClick={save} className="button is-success">Save</button>
                    <button onClick={()=>setShowCreateCommentForm(false)} className="button">Cancel</button>
                </footer>
            </div>
        </div>
    )
}