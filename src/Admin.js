import React from 'react'
import './Admin.css'

export default function Admin() {
    return (
        <div className="container_admin">
            <div className="items_admin">
            <h4>Notice Board</h4>
            <form action="">
                <input type="text" placeholder="Message" /><br />
                <input type="text" placeholder="Date" /><br />
                <input type="text" placeholder="Status" /><br />
                <input type="submit" value="Submit" /><br /><br />
            </form>
            </div>
            <div className="items_admin">
            <h4>Videos</h4>
            <form action="">
                <input type="text" placeholder="_id" /><br />
                <input type="text" placeholder="Url" /><br />
                <input type="text" placeholder="Subject_Code" /><br />
                <input type="text" placeholder="Message" /><br />
                <input type="text" placeholder="Resource_Type" /><br />
                <input type="text" placeholder="Post_Time" /><br />
                <input type="text" placeholder="__v" /><br />
                <input type="submit" value="Submit" /><br /><br />
            </form>
            </div>
            <div className="items_admin">
            <h4>Notes</h4>
            <form action="">
                <input type="text" placeholder="_id" /><br />
                <input type="text" placeholder="Url" /><br />
                <input type="text" placeholder="Subject_Code" /><br />
                <input type="text" placeholder="Message" /><br />
                <input type="text" placeholder="Resource_Type" /><br />
                <input type="text" placeholder="Post_Time" /><br />
                <input type="text" placeholder="__v" /><br />
                <input type="submit" value="Submit" /><br /><br />
            </form>
            </div>
            <div className="items_admin">
            <h4>Books</h4>
            <form action="">
                <input type="text" placeholder="_id" /><br />
                <input type="text" placeholder="Url" /><br />
                <input type="text" placeholder="Subject_Code" /><br />
                <input type="text" placeholder="Message" /><br />
                <input type="text" placeholder="Resource_Type" /><br />
                <input type="text" placeholder="Post_Time" /><br />
                <input type="text" placeholder="__v" /><br />
                <input type="submit" value="Submit" /><br /><br />
            </form>
            </div>
        </div>
    )
}
