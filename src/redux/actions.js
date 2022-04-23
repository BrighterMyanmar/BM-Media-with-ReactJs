export const setLogin = (con) => {
   return {
      type: 'login',
      payload: con
   }
}
export const setLogout = (con) => {
   return {
      type: 'logout',
      payload: con
   }
}
export const setUser = (payload) => {
   return {
      type: 'add',
      payload: payload
   }
}
export const removeUser = (payload) => {
   return {
      type: 'remove',
      payload: payload
   }
}

export const setCategory = (payload) => {
   return {
      type: 'addCategory',
      payload: payload
   }
}
export const setTag = (payload) => {
   return {
      type: 'addTag',
      payload: payload
   }
}

const actions = {
   setLogin, setLogout, setUser, removeUser, setCategory,setTag
}
export default actions;