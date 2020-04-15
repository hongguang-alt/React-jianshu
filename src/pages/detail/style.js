import styled from 'styled-components'

export const DetailAll = styled.div`
    width:100%;
    height:100%;
    background:#f9f9f9;
    padding-top: 5px;
    padding-bottom: 60px;
`

export const DetailContent = styled.div`
    width:75%;
    margin:auto;
    height:100%;
    padding:10px 0 0 15px;
    overflow:hidden;
`
export const ContentTitle = styled.div`
    width:100%;
    font-size:30px;
    font-weight:700;
    word-break:break-word;
`
export const DetailLeft = styled.div`
    width:66.6%;
    float:left;
    background:#fff;
    box-shadow: 5px 5px 10px rgba(0,0,0,.2);
`
export const DetailRight = styled.div`
    float:right;
    width:30%;
`
export const ContentAll = styled.div`
    padding: 20px;
        .pic{
            width:100%;
            dispaly:block;
            height:270px;
            margin-top: 20px;
        }
   
    .content{
        margin-top: 50px;
    }
    h1{
        font-size: 20px;
        font-weight:600;
        margin: 10px 0;
    }
    p{
        margin: 10px;
        font-weight: 400;
        line-height: 1.8
    }
`

export const RightTopAll = styled.div`
    width:100%;
    height:337px;
    background:#fff;
    box-shadow: 5px 5px 10px rgba(0,0,0,.2);
    padding:10px;
` 
export const RightTopTitle = styled.div`
    height:50px;
    border-bottom:1px solid #eee;
    overflow:hidden;
    padding:10px 0;
    position:relative;
    .pic{
        float:left;
        width:45px;
        height:45px;
        border-radius:50%;
    }
    .right{
        margin-top:10px;
        margin-right:40px;
        line-height:15px;
        float:right;
        text-align:left;
        font-size:12px;
        color:#969696;
        p{
            color:black;
            font-size: 14px;
            font-weight:500;
        }
    }
    .con{
        position:absolute;
        width:50px;
        height:23px;
        line-height:23px;
        text-align:center;
        top:5px;
        right:30px;
        color:#ec7259;
        border:1px solid #ec7259;
        border-radius:12px;
        font-size:14px;
    }
`
export const RightTopItem = styled.div`
    margin-top:10px;
    height:50px;
    padding: 15px;
    line-height: 18px;
    span{
        display:block;
        margin-top:5px;
        font-size:12px;
        color:#969696;
    }
`
export const RightBottomItem = styled.div`
    margin-top:10px;
    height:50px;
    padding: 15px;
    line-height: 18px;
    span{
        display:block;
        margin-top:5px;
        font-size:12px;
        color:#969696;
    }
`
export const RightBottomAll = styled.div`
    width:100%;
    height:330px;
    margin-top:10px;
    background:#fff;
    box-shadow: 5px 5px 10px rgba(0,0,0,.2);
` 
export const RightBottomTitle = styled.div`
    font-size:16px;
    font-weight:bold;
    padding:20px 20px 0 20px;
    p{
        padding-left:10px;
        border-left:4px solid #ec7259;
    }
`
export const BottomAll =styled.div`
    position:fixed;
    background:#fff; 
    bottom:0;
    width:100%;
    height:56px;
    border-top:1px soild #ccc;
    text-align:center;
    input{
        width:400px;
        height:36px;
        border:none;
        border-radius:18px;
        background-color:#f2f2f2;
        outline:none;
        padding:0 30px;
        vertical-align: middle;
    }
    span{
        line-height:56px;
        vertical-align: middle;
        color:#969696;
        font-size:14px;
    }
    i{
        font-size:20px;
        vertical-align:middle;
        margin: 0 10px;
    }
`