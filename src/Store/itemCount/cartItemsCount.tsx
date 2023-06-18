'use client'

import {createSlice} from '@reduxjs/toolkit'
import { extractCjsExports } from 'next/dist/build/webpack/loaders/get-module-build-info'

const initialState = {
    value : 0
}

export const cartCounter = createSlice ({
    name : 'cartCounter' ,
    initialState ,
    reducers :{
        addToCart : (state) =>{
            state.value += 1
        },
       
    }
})

export const {addToCart } = cartCounter.actions
export default cartCounter.reducer