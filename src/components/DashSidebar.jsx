import { Sidebar } from 'flowbite-react'
import { HiArrowSmRight, HiUSer } from 'react-icons/hi'

export default function DashSidebar() {
    return (
        <Sidebar>
            <Sidebar.Items>
                <Sidebar.ItemGroup>
                    <Sidebar.Item active icon={HiUSer} label={'User'} labelColor='dark'>Profile</Sidebar.Item>
                    <Sidebar.Item active icon={HiArrowSmRight} label={'User'} labelColor='dark'>Sign Out</Sidebar.Item>
                </Sidebar.ItemGroup>
            </Sidebar.Items>
        </Sidebar>
    )
}
