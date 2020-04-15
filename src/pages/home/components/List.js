import React,{ Component } from 'react'
import {
    ArticleItem,
    ArticleInfo,
    ActicleIcon
} from '../style'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'


class List extends Component {
    render(){
        return (
            <div>
            {
                this.props.articleList.map((item,index) =>{
                    return(
                        <ArticleItem key={index}>
                            <div className='article-right'>
                                <img className='article-right' alt='this' src={item.get("imgUrl")}/>
                            </div>
                            <ArticleInfo>
                                <Link to="detail">
                                    <h1 className="title">{item.get("title")}</h1>
                                </Link>
                            <p className='des'>{item.get("des")}</p>
                                <ActicleIcon>
                                    <i className="iconfont test-color iconicon-test"></i>
                                    <span className='test-color'>{item.get("test")}</span>
                                    <span className='author'>{item.get("author")}</span>
                                    <i className="iconfont iconpinglun"></i>
                                    <span>{item.get("commend")}</span>
                                    <i className="iconfont iconxihuan"></i>
                                    <span>{item.get("like")}</span>
                                </ActicleIcon>
                            </ArticleInfo>
                        </ArticleItem>)
                })
            }
            </div>
        )
    }
}
const mapStateToProps = (state)=>{
    return {
        articleList:state.getIn(['home','articleList'])
    }
}
export default connect(mapStateToProps,null)(List)