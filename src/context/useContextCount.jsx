import {create} from 'zustand'
  
    const Counter = create((set)=> ({
        count:1,
        inc: () => set((state) => ({count: state.count + 1})),
        dec: () => set((state) => ({count: state.count - 1}))
    }))

    export default Counter
