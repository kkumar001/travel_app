import { Header } from "components"

const Dashboard = () => {
    const user = {
        name: 'Kailash Kumar',
        email: 'kk@ss.com',
        imageUrl: '/assets/images/david.webp'
    }
    return (
        <main className="dashboard wrapper">
            <Header
                title={`Welcome ${user?.name ?? "Guest"} 👋`}
                description="Track activity, trends and popular destinations in real time"
            />

            Dasboard Page Contents
        </main>
    )
}

export default Dashboard
