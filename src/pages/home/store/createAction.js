import { actionType } from './index' 
import { fromJS } from 'immutable'
import axios from 'axios'
const changeHomeData = (list)=>({
    type:actionType.CHANGE_HOMR_DATA,
    list:fromJS(list)
})

const addList = (list)=>({
    type:actionType.ADD_LIST,
    list:list
})
export  const handleSpinAction =(page)=>{
    return{
        type:actionType.CHANGE_HOT_AUTHOR,
        page
    }
}

export const getHomeDataAction = ()=>{
    return (dispatch)=>{
        axios.get('/api/homeData.json').then((value)=>{
            let result = value.data.data
            result.authorListpageTotal =Math.ceil(result.authorList.length / 5)
            dispatch(changeHomeData(result))
        })
    }
}

export const getMoreDataAction =()=>{
    return (dispatch)=>{
        axios.get('/api/getMoreArcticle.json').then((value)=>{
            let result = value.data.data
            dispatch(addList(result.articleList))
        })
    }
}