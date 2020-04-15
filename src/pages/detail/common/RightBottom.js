import React,{ Component } from 'react'
import {
    RightBottomAll,
    RightBottomItem,
    RightBottomTitle
} from '../style'
import { connect } from 'react-redux'


class RightBottom extends Component {
     getReadList=()=>{
        let readList = this.props.RightBottom.get('list')
        return (
            readList.map((item,index)=>{
                return(
                    <RightBottomItem key={index}>
                    <p>{item.get("title")}</p>
                    <span>阅读{item.get("read")}</span>   
                    </RightBottomItem>
                )
            })
        )
    }
    render(){
        return (
            <RightBottomAll>
                <RightBottomTitle>
                    <p>推荐阅读</p>
                </RightBottomTitle>
                {this.getReadList()}
            </RightBottomAll>
        )
    }
}
const mapStateToProps = (state)=>{
    return{
        RightBottom:state.getIn(['detail','RightBottom'])
    }
}

export default connect(mapStateToProps)(RightBottom)