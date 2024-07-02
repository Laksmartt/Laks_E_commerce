import { createSlice } from "@reduxjs/toolkit";

export const searchSlice = createSlice({
    name:'search',
    initialState:[],
    reducers:{
        searchAdd:(state, actions)=>{
            let input = actions.payload.string;
            let data = actions.payload.data;
            if(input === ''){
                return [];
            }
            const result = data.filter((item) =>( item.title.includes(input)));
            
            return[...result];
          
        },
        remove:()=>{

        }
    }
});

export default searchSlice.reducer;
export const{searchAdd, remove} = searchSlice.actions;


