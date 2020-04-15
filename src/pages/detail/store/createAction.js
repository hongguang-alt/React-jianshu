import axios from 'axios'
import {actionType} from '../store'

const changeDatilInfo = (data) =>{
    return {
        type:actionType.CHANGE_DETAIL,
        data
    }
}


export const getDataInfo = () =>{
    return (dispatch)=>{
        axios.get('/api/detailInfo.json').then(value=>{
            const result = value.data.data
            dispatch(changeDatilInfo(result))
        })
    }
}