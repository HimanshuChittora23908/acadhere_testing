import React, { useState } from 'react'
import './Admin.css'
import axios from 'axios'
import { filterData } from './filterData'
import { gapi } from 'gapi-script'

export default function Admin() {
    const [user, setuser] = useState(false)
    const [error, seterror] = useState(false)
    const [username, setusername] = useState("")
    const [password, setpassword] = useState("")
    const [message, setmessage] = useState("")
    const [url, seturl] = useState("")
    const [code, setcode] = useState("")
    const [id, setid] = useState(1)

    const checkUser = async (event) => {
        event.preventDefault();
        seterror(false)
        const article = {
            "username": username,
            "password": password
        };

        axios.post('https://backend-clg-app.herokuapp.com/admin/login', article)
            .then(response => {
                response.status === "ok!" ? setuser(true) : seterror(true)
            })
            .catch((e) => seterror(true));
    }

    const putNotice = (event) => {
        event.preventDefault();
        const item = {
            "Url": url,
            "Subject_Code": code,
            "Message": message,
        };
        axios.post('https://backend-clg-app.herokuapp.com/admin/notice_board/', item).then(response => console.log(response));
    }

    const putNotes = (event) => {
        event.preventDefault();
        const item = {
            "Url": url,
            "Subject_Code": code,
            "Message": message,
            "Resources_Type": "Notes",
        };
        axios.post('https://backend-clg-app.herokuapp.com/admin/resources/notes/', item).then(response => console.log(response));
        reset()
    }

    const putVideos = (event) => {
        event.preventDefault();
        const item = {
            "Url": url,
            "Subject_Code": code,
            "Message": message,
            "Resources_Type": "Video",
        };
        axios.post('https://backend-clg-app.herokuapp.com/admin/resources/videos/', item).then(response => console.log(response));
        reset()
    }

    const putBooks = (event) => {
        event.preventDefault()
        const item = {
            "Url": url,
            "Subject_Code": code,
            "Message": message,
            "Resources_Type": "Ebook",
        };
        axios.post('https://backend-clg-app.herokuapp.com/admin/resources/ebooks/', item).then(response => console.log(response));
        reset()
    }

    const reset = () => {
        setmessage('')
        seturl('')
        setcode('')
    }

    const renderForm = () => {
        switch (id) {
            case 1:
                return <div className="items_admin">
                    <h4>Notice Board</h4>
                    <form action="" className="userForm">
                        <select
                            name="code"
                            id="code"
                            onChange={(e) => setcode(e.currentTarget.value)}
                            value={code}>
                            <option value="Important">Important</option>
                            <option value="Very Important">Very Important</option>
                            <option value="Casual">Casual</option>
                        </select><br />
                        <textarea
                            value={message}
                            onChange={(e) => setmessage(e.target.value)} name="message"
                            id=""
                            placeholder="Message"
                            cols="50"
                            rows="5" />
                        <br />
                        <input
                            value={url}
                            onChange={(e) => seturl(e.target.value)}
                            type="date"
                            placeholder="Date"
                        /><br />
                        <input type="submit" onClick={putNotice} value="Submit" /><br /><br />
                    </form>
                </div>

            case 2:
                return <div className="items_admin">
                    <h4>Videos</h4>
                    <form action="" className="userForm">
                        <select
                            name="code"
                            id="code"
                            onChange={(e) => setcode(e.currentTarget.value)}
                            value={code}
                        >
                            {filterData.map((item, index) => {
                                return <option key={index} value={item.text}>
                                    {item.name}
                                </option>
                            })}
                        </select><br />
                        <input
                            value={url}
                            onChange={(e) => seturl(e.target.value)}
                            type="url"
                            placeholder="Url"
                            size="80" />
                        <br />
                        <textarea
                            value={message}
                            onChange={(e) => setmessage(e.target.value)} name="message"
                            id=""
                            placeholder="Message"
                            cols="50"
                            rows="5" />
                        <br />
                        <input
                            type="submit"
                            onClick={putVideos}
                            value="Submit" />
                        <br />
                    </form>
                </div>

            case 3:
                return <div className="items_admin">
                    <h4>Notes</h4>
                    <form action="" className="userForm">
                        <select
                            name="code"
                            id="code"
                            onChange={(e) => setcode(e.currentTarget.value)}
                            value={code}
                        >
                            {filterData.map((item, index) => {
                                return <option key={index} value={item.text}>
                                    {item.name}
                                </option>
                            })}
                        </select><br />
                        <input
                            value={url}
                            onChange={(e) => seturl(e.target.value)}
                            type="url"
                            placeholder="Url"
                            size="80" />
                        <br />
                        <textarea
                            value={message}
                            onChange={(e) => setmessage(e.target.value)} name="message"
                            id=""
                            placeholder="Message"
                            cols="50"
                            rows="5" />
                        <br />
                        <input
                            type="submit"
                            onClick={putNotes}
                            value="Submit" />
                        <br />
                    </form>
                </div>

            case 4:
                return <div className="items_admin">
                    <h4>Books</h4>
                    <form action="" className="userForm">
                        <select
                            name="code"
                            id="code"
                            onChange={(e) => setcode(e.currentTarget.value)}
                            value={code}
                        >
                            {filterData.map((item, index) => {
                                return <option key={index} value={item.text}>
                                    {item.name}
                                </option>
                            })}
                        </select><br />
                        <input
                            value={url}
                            onChange={(e) => seturl(e.target.value)}
                            type="url"
                            placeholder="Url"
                            size="80" />
                        <br />
                        <textarea
                            value={message}
                            onChange={(e) => setmessage(e.target.value)} name="message"
                            id=""
                            placeholder="Message"
                            cols="50"
                            rows="5" />
                        <br />
                        <input
                            type="submit"
                            onClick={putBooks}
                            value="Submit" />
                        <br />
                    </form>
                </div>

            default: return null
        }
    }

    axios.get("https://backend-clg-app.herokuapp.com/admin/login").then(response => {
        if(response.status === "200"){
            renderForm();
    }
        if(response.status === "401"){
        return (<div className="userbox">
            <form action="" className="userForm">
                <input className="userItem" value={username} onChange={(e) => setusername(e.target.value)} type="text" placeholder="Username" /><br />
                <input className="userItem" value={password} onChange={(e) => setpassword(e.target.value)} type="password" placeholder="Password" /><br />
                <input className="userItem" onClick={checkUser} type="submit" value="Submit" /><br /><br />
                {error ? <h3>Enter Right Credentials</h3> : null}
            </form>
        </div>)
    }
})

    return (
        <div className="container_admin">
            <div className="listContainer">
                <h3
                    className='listText'
                    onClick={() => {
                        setid(1)
                        reset()
                    }}>Notice Board</h3>
                <h3
                    className='listText'
                    onClick={() => {
                        setid(2)
                        reset()
                    }}>Videos</h3>
                <h3
                    className='listText'
                    onClick={() => {
                        setid(3)
                        reset()
                    }}>Notes</h3>
                <h3
                    className='listText'
                    onClick={() => {
                        setid(4)
                        reset()
                    }}>Books</h3>
            </div>
            {renderForm()}
        </div>
    )
}
