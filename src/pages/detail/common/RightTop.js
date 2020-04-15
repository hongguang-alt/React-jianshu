import React,{ Component } from 'react'
import { 
    RightTopAll,
    RightTopTitle,
    RightTopItem
} from '../style'

class RightTop extends Component {
    getReadList=()=>{
        let readList = this.props.RightTop.get('list')
        return (
            readList.map((item,index)=>{
                return(
                    <RightTopItem key={index}>
                    <p>{item.get("title")}</p>
                    <span>阅读{item.get("read")}</span>   
                    </RightTopItem>
                )
            })
        )
    }
    render(){
        return(
            <RightTopAll>
                <RightTopTitle>
                    <img className='pic' src='https://b-ssl.duitang.com/uploads/item/201704/10/20170410095843_SEvMy.thumb.700_0.jpeg' alt=''/>
                    <div className='right'>
                    <p>{this.props.RightTop.get('author').get('name')}</p>
                        <span>{this.props.RightTop.get('author').get('money')}</span>
                    </div>
                    <div className='con'>关注</div>
                </RightTopTitle>
                {this.getReadList()}
            </RightTopAll>
        )
    }
}

export default RightTop