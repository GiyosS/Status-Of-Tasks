import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    todos: [],
    modalVisible: false,
    title:'',
    edit: false,
    EditID: null,
    SelectedStatus: ['Open', 'InProgress', 'Completed']
}
const Slice_Open = createSlice({
    name: 'card',
    initialState,
    reducers: {
        ToggleModal: (state,action)=>{
            state.modalVisible = !state.modalVisible
            state.edit = true
        },
        EDIT_USER: (state, action) => {
            state.modalVisible = !state.modalVisible
            state.edit = false
            state.title = action.payload.title
            state.EditID= action.payload.id
        },
        SaveUser:(state, action)=>{
            if(state.edit){
                state.todos.push(action.payload)
            }
            else{
               state.todos = state.todos.map((item, index)=>{
                   if(item.id === state.EditID){
                       return{
                           ...item,
                           status: action.payload.status,
                           title: action.payload.title
                       }
                   }
                   return item
               })
            }
        },
        Delete: (state, action) => {
            const todo = action.payload
            state.todos = state.todos.filter((item) => item.id !== todo.id)
        },
    }
})


export const {ToggleModal, SaveUser, Delete, EDIT_USER} = Slice_Open.actions;
export default Slice_Open.reducer