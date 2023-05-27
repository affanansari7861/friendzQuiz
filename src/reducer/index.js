 import {friends} from '../friends'
 function reducer(state,action){
    // console.log(state,action);
    switch (action.type){
        case ACTIONS.SEARCH:
            let name = action.payload.name
            let conclusion = friends.find((friend)=> friend.name.includes(name))
            if (!conclusion) 
                conclusion={msg:'nothing in here'};
                return {...state,conclusion,name};
        case ACTIONS.CHANGEINFO:
            let asked={...state.asked,[action.payload.property]:action.payload.value}
                return {...state,asked}
        break;

       default:  return state
    }
    return state

}
export const ACTIONS = {
    SEARCH:'searchfriend',
    CHANGEINFO:'changeinfo'
}

export default reducer