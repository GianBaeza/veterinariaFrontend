export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <main className="w-full min-h-screen scroll-smooth ">{children}</main>
    )
}
