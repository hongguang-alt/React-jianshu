import { fromJS } from 'immutable'
import { actionType } from './index' 
const defalutState = fromJS({
    "topList":[],
    "articleList":[],
    "recommendList":[],
    "authorList":[],
    "authorListpage":1,
    "authorListpageTotal":2,
    "goTopShow":true
})

export default (state=defalutState,action)=>{
    switch(action.type){
        case actionType.CHANGE_HOT_AUTHOR :
            if(state.get("authorListpage")< state.get("authorListpageTotal")){
                return state.set("authorListpage",action.page+1)
            }else{
                return state.set("authorListpage",1)
            }
        case actionType.CHANGE_HOMR_DATA:
            return action.list
        case actionType.ADD_LIST:
            return state.set("articleList",state.get("articleList").concat(fromJS(action.list)))
        default:
            return state
    }
}
