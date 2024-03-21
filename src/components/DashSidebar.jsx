import { Sidebar } from 'flowbite-react'
import { HiUSer } from 'react-icons/hi'

export default function DashSidebar() {
    return (
        <Sidebar>
            <Sidebar.Items>
                <Sidebar.ItemGroup>
                    <Sidebar.Item active icon={HiUSer}>Dashboard</Sidebar.Item>
                    <Sidebar.Item href='/dashboard?tab=profile' icon={true}>Profile</Sidebar.Item>
                </Sidebar.ItemGroup>
            </Sidebar.Items>
        </Sidebar>
    )
}
