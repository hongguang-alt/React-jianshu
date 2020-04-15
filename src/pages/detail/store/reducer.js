import {fromJS} from 'immutable'
import { actionType } from '../store'
const defaultState = fromJS({
    RightBottom:{list:[]},
    Bottom:{},
    content:{},
    RightTop:{list:[],author:{}}
})

export default (state=defaultState,action)=>{
    switch(action.type){
        case actionType.CHANGE_DETAIL:
            return fromJS(action.data)
        default:
        return state
    }
}