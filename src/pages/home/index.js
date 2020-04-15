import React,{Component} from 'react'
import { 
    HomeAll,
    HomeLeft,
    HomeRight,
    GetMoreList,
    GoTop
} from './style'
import  List  from './components/List'
import  Recommend  from './components/Recommend'
import  Topic  from './components/Topic'
import  Writer  from './components/Writer'
import { connect } from 'react-redux'
import { createAction } from './store'


class Home extends Component{
    constructor(props){
        super(props)
        this.state = {
            goTopShow:false
        }
        this.changeShow = this.changeShow.bind(this)
    }
    componentDidMount(){
        this.props.getHomeData()
        this.eventScroll()
    }
    componentWillUnmount(){
        //在组件销毁的时候记得将state的数据清空
        this.setState = ()=>{
            return
        }
    }
    eventScroll(){
        window.addEventListener("scroll",this.changeShow)
    }
    changeShow(){
        if(document.documentElement.scrollTop>200){
            if(!this.state.goTopShow){
                this.setState({goTopShow:true})
            }
        }else{
            if(this.state.goTopShow){
                this.setState({goTopShow:false})
            }
        }
    }
    getTop(){
        window.scroll(0,0)
    }
    render(){
        return(
            <HomeAll>
                <HomeLeft>
                    <img className="pic" alt='this is pic' src="http://img0.imgtn.bdimg.com/it/u=3386247472,87720242&fm=26&gp=0.jpg"/>
                    <Topic/>
                    <List/>
                    <GetMoreList onClick={this.props.getMoreList}>阅读更多</GetMoreList>
                </HomeLeft>
                <HomeRight>
                    <Recommend/>
                    <Writer/>
                </HomeRight>
                {this.state.goTopShow && (<GoTop onClick={this.getTop}>返回</GoTop>)}
            </HomeAll>
        )
    }
}
const mapStateToProps = (state)=>{
    return{
       
    }
}
const mapDispatchToPros = (dispatch) =>{
    return {
        getHomeData(){
            dispatch(createAction.getHomeDataAction())
        },
        getMoreList(){
            dispatch(createAction.getMoreDataAction())
        }
    }
}
export default connect(mapStateToProps,mapDispatchToPros)(Home)