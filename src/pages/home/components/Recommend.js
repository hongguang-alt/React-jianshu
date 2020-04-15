import React,{ Component } from 'react'
import {
    RecommendAll,
    RecommendItem
} from '../style'
import { connect } from 'react-redux'
class Recommend extends Component {
    render(){
        return (
            <RecommendAll>
                {
                    this.props.recommendList.map(item=>{
                        return (<RecommendItem key={item.get("id")} src={item.get("src")}></RecommendItem>)
                    })
                }
            </RecommendAll>
        )
    }
}
const mapStateToProps = (state)=>{
    return {
        recommendList:state.getIn(['home','recommendList'])
    }
}
export default  connect(mapStateToProps,null)(Recommend)