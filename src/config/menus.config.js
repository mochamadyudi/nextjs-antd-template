import {
    DashboardOutlined
} from '@ant-design/icons';

export const NavigationMenus = [
    {
        key: 'home',
        permissions:[1],
        path: `/`,
        title: 'home',
        icon: DashboardOutlined,
        breadcrumb: false,
        submenu: []
    },
    {
        key: 'themes',
        permissions:[1],
        path: `/themes`,
        title: 'Themes',
        icon: DashboardOutlined,
        breadcrumb: false,
        submenu: [
            {
                key: 'themes-documentation',
                permissions:[1],
                path: `/themes/documentation`,
                title: 'Documentation',
                icon: DashboardOutlined,
                breadcrumb: false,
                submenu: []
            },
        ]
    },

]
