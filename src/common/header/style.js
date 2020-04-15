import styled from 'styled-components'
import LOGO from '../../static/image/logo.png' 
export const HeaderAll = styled.div`
    width:100%;
    height:58px;
    border-bottom: 1px solid #e7e7e7;
    position:relative;
`
export const Logo  = styled.div`
    height:56px;
    width:100px;
    display:block;
    float:left;
    background:url(${LOGO});
    background-size: 100px;
`

export const Content = styled.div`
    height:100%;
    padding-left:100px;
    padding-right: 230px;
    .long-enter{
        transition: all .2s ease-out
    }
    .long-enter-active{
        width:200px
    }
    .long-exit{
        transition: all .2s ease-out
    }
    .long-exit-active{
        width:160px
    }
`

export const ContentItem = styled.div`
    font-size: 15px;
    line-height:56px;
    height:56px;
    margin-left: 80px;
    &.right{
        float:right;
        color:#969696;
    }
    &.active{
        color:#ea6f5a;
    }
    &.left{
        float:left;
    }
`
export const SearchAll = styled.div`
    height:56px;
    width:160px;
    float:left;
    margin-left:30px;
    margin-top:10px;
    position:relative;
    text-aligin:center;
    &.focus{
        width: 200px;
        .iconsousuo{
            background:rgba(0,0,0,.6);
            color:#fff;
        }
    }
    .iconsousuo{
        position:absolute;
        height: 30px;
        width: 30px;
        border-radius:15px;
        top:5px;
        right:5px;
    }
`
export const SearchHot = styled.div`
    width:200px;
    position:absolute;
    box-shadow: 1px 1px 5px rgba(0,0,0,.2);
    top:48px;
    background:white;
`

export const SearchHotTitle = styled.div`
    float:left;
    margin: 20px 20px;
    font-size:15px;
`

export const SearchHotChange = styled.a`
    display:block;
    float:right;
    margin: 20px 20px;
    font-size:14px;
    cursor:pointer;
    .spin{
        display:block;
        float:left;
        transform:rotate(0deg);
        transform-origin:center center;
        transition:all .2s ;
    }
`
export const SearchItem = styled.div`
    margin-top: -10px;
    float:left;
    width: 200px;
`
export const SearchTag = styled.a`
    display:block;
    float:left;
    color:rgba(0,0,0,.3);
    font-size: 13px;
    border:1px solid #eee;
    padding: 5px;
    border-radius:2px;
    margin: 5px 5px;
    cursor:pointer;
`

export const Search = styled.input.attrs({
    placeholder:'搜索'
})`
    height:38px;
    width:100%;
    line-height:38px;
    background:#eee;
    border-radius:20px;
    outline: none;
    border: none;
    box-sizing:border-box;
    padding: 20px 35px 20px 20px;
    color:#777;
`


export const Addition = styled.div`
    position:absolute;
    right:0;
    top:0;
    height: 56px;
`

export const Button = styled.a`
    float:right;
    line-height:24px;
    border-radius: 20px;
    display:block;
    text-align:center;
    box-sizing:border-box;
    font-size: 15px;
    border:1px solid rgba(236,97,73,.7);
    &.reg{
        width: 80px;
        height: 38px;
        line-height: 38px;
        margin: 9px 5px 0 15px;
        color: #ea6f5a;
    }
    &.title{
        width:100px;
        height: 40px;
        line-height: 40px;
        margin: 8px 12px 0;
        color: #fff;
        background-color: #ea6f5a;
    }
`