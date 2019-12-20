import React from 'react'
import ReactDOM from 'react-dom';


export function NewsFeeds({feeds}){
    return (<ul>
        {feeds.map(function(v, k){
            return <li key={v.id}>{v.feedUrl}</li>
        })}
    </ul>)
}