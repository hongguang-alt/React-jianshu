import React,{Component} from 'react'
import { connect } from 'react-redux'
import {
    DetailAll,
    DetailContent,
    DetailLeft,
    DetailRight
} from './style'
import Content from './common/Content'
import Bottom from './common/Bottom'
import RightBottom from './common/RightBottom'
import RightTop from './common/RightTop'
import { createAction } from './store'

class Detail extends Component{
    componentDidMount(){
        this.props.getDatalist()
    }
    render(){
        return(
            <DetailAll>
                <DetailContent>
                    <DetailLeft>
                        <Content Content = {this.props.Content}></Content>
                    </DetailLeft>
                    <DetailRight>
                        <RightTop RightTop={this.props.RightTop}></RightTop>
                        <RightBottom></RightBottom> 
                    </DetailRight>
                </DetailContent>
                <Bottom Bottom={this.props.Bottom}/>
            </DetailAll>
        )
    }
}
const mapStateToProps = (state)=>{
    return {
        Bottom:state.getIn(['detail','Bottom']),
        Content:state.getIn(['detail',"content"]),
        RightTop:state.getIn(['detail','RightTop'])
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        //获取总的数据
        getDatalist(){
            dispatch(createAction.getDataInfo())
        }
    }
} 
export default connect(mapStateToProps,mapDispatchToProps)(Detail)