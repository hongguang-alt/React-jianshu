import styled  from 'styled-components'

export const HomeAll = styled.div`
    width:75%;
    margin:auto;
    height:100%;
    padding:30px 0 0 15px;
    overflow:hidden;
`
export const HomeLeft = styled.div`
    float:left;
    width:66.6%;
    .pic{
        width:100%;
        dispaly:block;
        height:270px;
    }
`
export const HomeRight = styled.div`
    float:right;
    width:33%;
    padding-left: 32px;
    box-sizing:border-box;
`
export const TopicAll = styled.div`
    width:100%;
    padding:10px;
    margin-left:-15px;
    overflow:hidden;
    .hotShow{
        float:left;
        height:32px;
        line-height:32px;
        margin-left:30px;
        font-size:14px;
    }
    border-bottom:1px solid #dedede;
`
export const TopicItem = styled.div`
    float:left;
    margin-left:15px;
    margin-bottom:10px;
    padding-right:5px;
    height:32px;
    line-height:32px;
    overflow:hidden;
    border-radius:4px;
    border:1px solid #dedede;
    font-size:14px;
    text-align:center;
    .topic-img{
        width:32px;
        height:32px;
        display:block;
        float:left;
        margin-right:5px;
    }
`
export const ArticleItem = styled.div`
    padding: 20px 0;
    text-align:left;
    width:100%;
    min-height:112px;
    border-bottom:1px solid #dedede;
    overflow:hidden;
    .article-right{
        float:right;
        img{
            display:block;
            width:100%;
        }
        width:30%;
    }
` 
export const ArticleInfo = styled.div`
    float:left;
    width:65%;
    .title{
        font-size:25px;
    }
    .des{
        margin-top:10px;
        font-size:12px;
        color:#999;
        line-height:24px;
    }
`
export const ActicleIcon = styled.div`
    font-size: 13px;
    margin-top: 10px;
    color:#999;
    margin-left:-10px;
    i{
        vertical-align: middle;
        margin-left:10px;
        &.test-color{
            color:red;
        }
    }
    span{
        vertical-align: middle;
        margin-left:5px;
        &.author{
            margin-left:10px;
        }
        &.test-color{
            color:red;
        }
    }   
`
export const RecommendAll = styled.div`
    width:100%;
`
export const RecommendItem = styled.div`
    margin-bottom:5px;
    width:100%;
    height:40px;
    background-image:url(${props=>props.src});
    background-size:contain;
`
export const WriteAll = styled.div`
    width:100%;
    margin-top:50px;
`
export const WriteTitle = styled.div`
    font-size:15px;
    color:#969696;
    .hot-author:{
        float:left;
    }
    .change{
        cursor:pointer;
        float:right;
    }
    .iconspin{
        transition:all .2s ease-out;
    }
`
export const WriteItem = styled.div`
    margin-top:25px;
    width:100%;
    .write-img{
        float:left;
        width:50px;
        height:50px;
        border-radius:50%;
        overflow:hidden;
        img{
            width:100%;
            display:block;
            height:50px;
        }
    }
    .text{
        padding-top:10px;
        .text-author{
            overflow:hidden;
            span{
                padding-left:10px;
                line-height:20px;
                float:left;
                display:block;
                width:60%;
                color:#333;
            }
            .text-con{
                float:right;
                color:green;
                cursor:pointer;
            }
        }
        .text-bottom{
            padding-left:60px;
            margin-top:10px;
            font-size:12px;
            color:#969696;
        }
    }
`
export const WirteShow = styled.div`
    margin-top:25px;
    width:95%;
    height:34px;
    color:#787878;
    background-color:#f7f7f7;
    border:1px solid #dcdcdc;
    border-radius:4px;
    line-height:34px;
    font-size:14px;
    text-align:center;
    cursor:pointer;
`
export const GetMoreList = styled.div`
    width:100%;
    margin: 10px 0;
    background-color:#a5a5a5;
    border-radius:20px;
    height:40px;
    text-align:center;
    line-height:40px;
    font-size:15px;
    color:white;
    cursor:pointer;
`
export const GoTop = styled.div`
    width: 60px;
    height: 60px;
    font-size: 20px;
    border-radius:4px;
    border:1px solid #ededed;
    text-align:center;
    line-height:60px;
    position:fixed;
    background:white;
    right:50px;
    bottom:50px;
    cursor:pointer;
`