import { Sidebar } from 'flowbite-react'

export default function DashSidebar() {
    return (
        <Sidebar>
            <Sidebar.Items>
                <Sidebar.ItemGroup>
                    <Sidebar.Item href='/dashboard' icon={true}>Dashboard</Sidebar.Item>
                    <Sidebar.Item href='/dashboard?tab=profile' icon={true}>Profile</Sidebar.Item>
                </Sidebar.ItemGroup>
            </Sidebar.Items>
        </Sidebar>
    )
}
