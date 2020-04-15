import * as actionType from './actionType'
import axios from 'axios'
import { fromJS } from 'immutable'

const changeList = (data,totalPage) =>{
    return {
        type:actionType.CHANGE_LIST,
        data:fromJS(data),
        totalPage:fromJS(totalPage)
    }
}

export const searchFocusAction = ()=>{
    return {
        type:actionType.SEARCH_FOCUS
    }
}

export const searchBlurAction = ()=>{
    return {
        type:actionType.SEARCH_BLUR
    }
}

export const mouseEnterAction = ()=>{
    return {
        type:actionType.MOUSE_ENTER
    }
}

export const mouseLeaveAction = ()=>{
    return {
        type:actionType.MOUSE_LEAVE
    }
}

export const changeHotAction =(page)=>{
    return {
        type:actionType.CHANGE_HOT,
        page
    }
}
export const getHotDataAction= ()=>{
    return (dispatch)=>{
        axios.get('/api/hotlist.json').then((value)=>{
            const result = value.data
            const totalPage =Math.ceil(result.data.length / 5)
            dispatch(changeList(result.data,totalPage))
        })
        .catch(()=>{
            console.log("error")
        })
        
    }
}