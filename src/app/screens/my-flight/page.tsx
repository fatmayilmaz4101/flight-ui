
import React from 'react'; 
import { Menubar } from 'primereact/menubar';
import { MenuItem } from 'primereact/menuitem';
import "./style.css"
import { Card } from 'primereact/card';
export default function BasicDemo() {
    const items: MenuItem[] = [
        {
            label: 'Projects',
            icon: 'pi pi-search',
        },
        {
            label: 'Contact',
            icon: 'pi pi-envelope'
        }
    ];
    
    return (
        <>
        <div className="card custom-menubar">
            <Menubar model={items} />
        </div>
        <div className="card">
            <Card title="BOOK YOUR FLIGHT">
            </Card>
        </div>

        </>
    )
}
        