import React, { Component } from 'react'

export default class List extends Component {

    state = {
        // tags: ["tag1", "tag2", "tag3", "tag4",]
        tags:[]
    }

    tagsRender () {
        // if (this.state.tags.length === 0) 
        //     return <h2>Taglar yo'q</h2>;
        
        // return this.state.tags.map((tag) => <li key={tag}>{tag}</li>)
    }
    render() {
        return (
            <div>
                <ul>
                    {this.state.tags.length === 0 ? <h2>Taglar yo'q</h2> : this.state.tags.map((tag) => <li key={tag}>{tag}</li>)}
                </ul>
            </div>
        )
    }
}
