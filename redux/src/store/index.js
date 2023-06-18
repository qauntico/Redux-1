import {createSlice, configureStore} from '@reduxjs/toolkit'
const initialCounterState =  { counter: 0, showCounter: true}
//now let's create a slice of our global objects 
const counterSlice = createSlice({
   name: 'counter',
   initialState: initialCounterState,
   //this is a map of all this methods needed by our slides
   reducers: {
        //we don't need actions because this methods will automatically be called dependind on which action was triggered not like we had to specify in the store
        increment(state){
            //we are allow to mutate states in createSlice
            state.counter++
        },
        decrement(state){
            state.counter--
        },
        toggleCounter(state){
            state.showCounter = !state.showCounter
        }
   } 
});
const initialAuthState = {isAuthenticated: true}
const authSlice = createSlice({
    name: 'auth',
    initialState: initialAuthState,
    reducers: {
        login(state){
            state.isAuthenticated = true
        },
        logout(state){
            state.isAuthenticated = !state.isAuthenticated
        }
    }
})

const store = configureStore({
    reducer: {counter: counterSlice.reducer, auth: authSlice.reducer}
});
export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;
export default store;


