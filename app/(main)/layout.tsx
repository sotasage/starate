interface MainLayoutProps {
    children: React.ReactNode
}
  
export default function MainLayout({ children }: MainLayoutProps) {
    return <div className="mx-auto max-w-screen-lg px-2 my-10">{children}</div>
}
