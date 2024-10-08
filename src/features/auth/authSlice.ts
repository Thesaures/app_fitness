import { createSlice} from "@reduxjs/toolkit";
import Pancake from '../../../assets/images/pancakes.svg'
// const arrayNoti =[
//     {
//         header:'hello one',
//         time:'haii one',
//         svg:Pancake
//     },
//     {
//         header:'hello two',
//         time:'haii two',
//         svg:Pancake
//     }

// ]
const authSlice = createSlice({
    name: 'authentication',
    initialState: {isAuth:false},
    reducers:{
        login:(state)=>{
            console.log('this is login')
             state.isAuth=true;
        },
        logout:(state)=>{
             state.isAuth=false;
        },
    }
})
export const {login,logout}= authSlice.actions;
export default authSlice.reducer;