import { create } from 'zustand'
import { GlobalContext } from './interface/interface'

const useGlobalContext = create<GlobalContext>((set) => ({
    colorNavbar: false,

    setColorNavbar: (colorNavbar: boolean) => set(() => ({ colorNavbar })),
}))

export default useGlobalContext
