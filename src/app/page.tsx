import Auth from '@/feature/auth/Auth'
import { Fragment } from 'react'

export default function Home() {
    return (
        <main className="flex min-h-screen w-full  items-start justify-center ">
            <Auth />
        </main>
    )
}
