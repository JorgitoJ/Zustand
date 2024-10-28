import React from 'react'
import { create } from 'zustand'


    const usePersonStore = create((set) => ({
    firstName: '',
    lastName: '',
    updateFirstName: (firstName) => set({ firstName }),
    updateLastName: (lastName) => set({ lastName }),
    }));

    export default usePersonStore
