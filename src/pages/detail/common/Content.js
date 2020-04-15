import React,{ Component } from 'react'
import {
    ContentAll,
    ContentTitle
} from '../style'
class Content extends Component {
    render(){
        return (
            <ContentAll>
                <ContentTitle>{this.props.Content.get("title") }</ContentTitle>
                <div className="adddouble" dangerouslySetInnerHTML={{__html:this.props.Content.get("content")}}></div>
            </ContentAll>
        )
    }
}

export default Content