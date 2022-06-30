import React, {useState} from "react"
import ChildrenComponent from "./children";
import SideNavMenus from "./navigation-menu/SideNavMenus";
import {
    Layout,

    Grid,
} from "antd";
import {MenuFoldOutlined, MenuUnfoldOutlined} from "@ant-design/icons";
const { Content,Header } = Layout;
const { useBreakpoint } = Grid;
export default function ThemesWrapper(props) {
    const [navCollapsed,setNavCollapsed] = useState(false)
    const onToggle = ()=> {
        setNavCollapsed(!navCollapsed)
    }
    return (
        <Layout>
            <Header className={`app-header `} style={{backgroundColor: '#fff'}}>
                <div className={`app-header-wrapper layout-top-nav`}>
                    <div className="nav flex items-center justify-center" style={{width: `calc(100% - 250px)`}}>
                        <div style={{minWidth:`${!navCollapsed ? 280: 0}px`,transition:".2s",height:'40px','border':'1px solid red !important'}}/>
                        <div className="nav-left">
                            <ul className="ant-menu ant-menu-root ant-menu-horizontal">
                                <li className="ant-menu-item ant-menu-item-only-child" onClick={() => {onToggle()}}>
                                    {navCollapsed  ? <MenuUnfoldOutlined className="nav-icon" /> : <MenuFoldOutlined className="nav-icon" />}
                                </li>
                            </ul>
                        </div>
                        <div className="nav-right">
                            {/*<NavPanel direction={direction} />*/}
                        </div>
                        {/*<NavSearch active={searchActive} close={onSearchClose}/>*/}
                    </div>
                </div>
            </Header>
            <Layout className="app-container">
                <SideNavMenus navCollapsed={navCollapsed}/>
                <Layout className="app-layout">
                    <div className={`app-content ${navCollapsed ? "collapsed":""}`}>

                        <Layout.Content>
                            <ChildrenComponent children={props?.children ?? null}/>
                        </Layout.Content>
                    </div>
                </Layout>
            </Layout>

        </Layout>
    )
}
