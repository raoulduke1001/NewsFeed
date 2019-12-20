import React, { useState } from "react";
import ReactDOM from 'react-dom';
import { NewsAdd } from "./newsadd"
import { NewsFeeds } from "./newsfeeds"


export function User() {
    const [feeds, setFeeds] = useState([])
    function callback123(feed){
        setFeeds([...feeds, feed])
    }
    return (
        <div>
            <NewsFeeds feeds={feeds} />
            <NewsAdd newsAddCallBack={callback123} />
        </div>
    )
}