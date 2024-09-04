import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    preview: true,
}

export const preview = createSlice({
    name: 'preview',
    initialState,
    reducers: {
        togglePreview: (state) => {
            console.log('callTogglePreview');
            state.preview = !state.preview
            console.log(state.preview)
        },
        hidePreview: (state) => {
            console.log('callHidePreview');
            state.preview = false;
        }
    }
})

export const { togglePreview, hidePreview } = preview.actions
export default preview.reducer