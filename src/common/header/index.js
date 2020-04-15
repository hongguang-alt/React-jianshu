import React,{ Component } from 'react'
import { 
    HeaderAll,
    Logo,
    Addition,
    Button,
    Content,
    ContentItem,
    Search,
    SearchAll,
    SearchHot,
    SearchHotTitle,
    SearchHotChange,
    SearchItem,
    SearchTag
 } from './style'
import { CSSTransition } from 'react-transition-group'
import { connect } from 'react-redux'
import { createAction } from './store'
import { NavLink } from 'react-router-dom'


class Header extends Component{
    getHotSearch = () =>{
        const { focused,list ,mouseIn,page,handleMouseEnter,handleMouseLeave,handleChangeHot} = this.props
        // 1 0 4  2 5 10 3 10 15 
        const newList = list.toJS().splice((page-1)*5,5)
        if(focused || mouseIn){
            return(
                <SearchHot 
                    onMouseEnter = {handleMouseEnter}
                    onMouseLeave = {handleMouseLeave}
                >
                    <SearchHotTitle>热门搜索</SearchHotTitle>
                    <SearchHotChange
                        onClick={()=>handleChangeHot(page,this)}
                    >
                         <span ref={ (icon)=>{this.iconSpin = icon } } className="iconfont iconspin spin"></span>
                        换一批
                    </SearchHotChange>
                    <SearchItem>
                        {newList.map((item,index)=>{
                            return <SearchTag key={index}>{item}</SearchTag>
                        })}
                    </SearchItem>
                </SearchHot>
            )
        }
    }
    render(){
        const { focused,handleFocus,handleBlur,list } = this.props
        return(
        <HeaderAll>
            <NavLink to="/">
                <Logo/>
            </NavLink>
            <Content>
                <ContentItem className="left active">首页</ContentItem>
                <ContentItem className='left'>下载APP</ContentItem>
                <CSSTransition
                    in={focused}
                    timeout={300}
                    classNames = 'long'
                >
                    <SearchAll className={focused ? 'focus' : ''}>
                        <Search onFocus = {()=>handleFocus(list)} onBlur = {handleBlur}/>
                        <span className="iconfont iconsousuo"></span>
                        {this.getHotSearch()}
                    </SearchAll>
                </CSSTransition>
                <ContentItem className='right'>登陆</ContentItem>
                <ContentItem className='right'>
                    <span className="iconfont iconAa"></span>
                </ContentItem>
            </Content>
            <Addition>
                <Button className='reg'>注册</Button>
                <Button className='title'>
                <span className="iconfont iconyumaobi"></span>
                    写文章
                </Button>
            </Addition>
        </HeaderAll>
        )
    }
}

const mapStateToProps = (state) =>{
    return {
        focused: state.get('header').get('focused'),
        list:state.getIn(['header','list']),
        mouseIn:state.getIn(['header','mouseIn']),
        page:state.getIn(['header','page'])
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        handleFocus(list){
            (list.size===0) && dispatch(createAction.getHotDataAction())
            dispatch(createAction.searchFocusAction())
        },
        handleBlur(){
            dispatch(createAction.searchBlurAction())
        },
        handleMouseEnter(){
            dispatch(createAction.mouseEnterAction())
        },
        handleMouseLeave(){
            dispatch(createAction.mouseLeaveAction())
        },
        handleChangeHot(page,_this){
            let spainNumber = _this.iconSpin.style.transform.replace(/[^0-9]/g,"")
            if(spainNumber===''){
                spainNumber = '360'
            }else{
                spainNumber = (spainNumber === '0') ? '360' : '0'
            }
            _this.iconSpin.style.transform = `rotate(${parseInt(spainNumber)}deg)`
            dispatch(createAction.changeHotAction(page))
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Header)