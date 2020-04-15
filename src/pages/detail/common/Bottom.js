import React,{ Component } from 'react'
import {
    BottomAll
} from '../style'
class Bottom extends Component {
    render(){
        return(
            <BottomAll>
                <input placeholder="写下你的评论"/>
                <i className="iconfont iconpinglun"></i>
                <span>评论{this.props.Bottom && this.props.Bottom.get("comment")}</span>
                <i className="iconfont iconxihuan"></i>
                <span>赞{this.props.Bottom && this.props.Bottom.get("like")}</span>
            </BottomAll>
        )
    }
}

export default Bottom