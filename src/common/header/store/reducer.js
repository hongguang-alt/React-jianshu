import * as actionType from './actionType'
import { fromJS } from 'immutable'
const defaultState = fromJS({
    focused:false,
    list:[],
    mouseIn:false,
    page:1,
    totalPage:1
})

export default (state = defaultState , action)=>{
    switch(action.type){
        case actionType.SEARCH_FOCUS:
            //这里的set方法会重新比较之前的state，并且产生一个新的state
            return state.set("focused",true)
        case actionType.SEARCH_BLUR:
            return state.set("focused",false)
        case actionType.CHANGE_LIST:
            // return state.set('list',action.data)
            return state.merge({
                list:action.data,
                totalPage:action.totalPage
            })
        case actionType.MOUSE_ENTER:
            return state.set("mouseIn",true)
        case actionType.MOUSE_LEAVE:
            return state.set('mouseIn',false)
        case actionType.CHANGE_HOT:
            if(state.get('page')<state.get('totalPage')){
                return state.set('page',action.page+1)
            }else{
                return state.set("page",1)
            }
        default:
            return state
    }
}