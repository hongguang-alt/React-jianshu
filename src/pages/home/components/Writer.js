import React,{Component} from 'react'
import {
    WriteAll,
    WriteTitle,
    WriteItem,
    WirteShow
} from '../style'
import {connect} from 'react-redux'
import { fromJS } from 'immutable'
import {createAction } from '../store/index'
class Write extends Component {
    getAuthorList = ()=>{
        const newList = fromJS(this.props.authorList.toJS().splice((this.props.page-1)*5,5))
        return(
            <div>
            {newList.map(item=>{
                return(
                    <WriteItem key={item.get("id")}>
                        <div className='write-img'>
                            <img src={item.get("imgUrl")} alt=''/>
                        </div>
                        <div className="text">
                            <div className="text-author">
                                <span>{item.get("author")}</span>
                                <div className="text-con">+关注</div>
                            </div>
                            <div className="text-bottom">写了{item.get("write")}k·{item.get("like")}喜欢</div>
                        </div>
                    </WriteItem>
                )
            })}
            </div>
        )
    }
    render(){
        return (
            <WriteAll>
                <WriteTitle>
                    <span className="hot-author">推荐作者</span>
                    <span className='change' onClick={()=>this.props.handleSpinAndChange(this,this.props.page)}>换一批</span>
                    <span ref={ (Authoricon)=>{this.AuthorIconSpin = Authoricon } } className="iconfont change iconspin"></span>
                </WriteTitle>
                {this.getAuthorList()}
                <WirteShow>查看全部 ></WirteShow>
            </WriteAll>
        )
    }
}
const mapStateToProps = (state)=>{
    return {
        authorList:state.getIn(['home','authorList']),
        page:state.getIn(['home',"authorListpage"])
    }
}
const mapDispatchToProps = (dispatch)=>{
    return {
        handleSpinAndChange(_this,page){
            //第一件要做的事情，旋转
           let spin = _this.AuthorIconSpin.style.transform.replace(/[^0-9]/ig,"")
           spin = (spin === "180" ? "0" : "180")
           _this.AuthorIconSpin.style.transform=`rotate(${spin}deg)`
           dispatch(createAction.handleSpinAction(page))
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Write)