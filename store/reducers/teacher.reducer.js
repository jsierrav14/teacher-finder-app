import {GET_ALL_TEACHERS} from '../actions/teacher.action'
const initialState = {
    teachers:[]
}

export default(state=initialState, action)=>{
    switch(action.type){
        case GET_ALL_TEACHERS:
            return{
                teachers:action.teachers
            }
        default :
         return state
    }
}