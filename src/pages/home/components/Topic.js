import React,{Component} from 'react'
import { connect } from 'react-redux'
import {
    TopicAll,
    TopicItem
} from '../style'
class Topic extends Component {
    render(){
        return (
            <TopicAll>
                {
                    this.props.topList.map((item)=>{
                        return (<TopicItem key={item.get("id")}>
                                    <img src={item.get("imgUrl")} alt='this is a pic' className='topic-img'/>
                                    {item.get("title")}
                                </TopicItem>)
                    })
                }
                <div className='hotShow'>更多热门焦点>></div>
            </TopicAll>
        )
    }
}
const mapStateToProps = (state)=>{
    return{
        topList:state.getIn(['home','topList'])
    }
}
export default connect(mapStateToProps,null)(Topic)