import {NavigationMenus} from "../../../config/menus.config";
import {Menu} from "antd";
import {useRouter} from "next/router";
import Link from "next/link";
import {Layout} from "antd";
import Icon from "@ant-design/icons";
import {Scrollbars} from 'react-custom-scrollbars';

const {Sider} = Layout
const {SubMenu} = Menu;


export default function SideNavMenus(props) {
    let {navCollapsed} = props
    const Router = useRouter()?.asPath
    const setDefaultOpen = (key) => {
        let keyList = [];
        let keyString = "";
        if (key) {
            const arr = key.split("-");
            for (let index = 0; index < arr.length; index++) {
                const elm = arr[index];
                index === 0 ? (keyString = elm) : (keyString = `${keyString}-${elm}`);
                keyList.push(keyString);
            }
        }
        return keyList;
    };
    return (
        <Sider
            className={`side-nav`}
            width={250}
            collapsed={navCollapsed}
        >
            <Scrollbars autoHide>
                <Menu
                    theme={'light'}
                    mode={'inline'}
                    style={{height: "100%", borderRight: 0}}
                    defaultSelectedKeys={['/']}
                    defaultOpenKeys={setDefaultOpen(Router)}
                    className={"hide-group-title"}
                >
                    {
                        NavigationMenus.map((menu) =>
                                menu.submenu.length > 0 ? (
                                    <SubMenu
                                        key={menu.key}
                                        popupClassName="top-nav-menu"
                                        title={
                                            <span>{menu.icon ? <Icon type={menu?.icon}/> : null}<span>{menu.title}</span></span>
                                        }
                                    >
                                        {menu.submenu.map((subMenuFirst) =>
                                            subMenuFirst.submenu.length > 0 ? (
                                                <SubMenu
                                                    key={subMenuFirst.key}
                                                    popupClassName="top-nav-menu"
                                                    icon={
                                                        subMenuFirst.icon ? (
                                                            <Icon type={subMenuFirst?.icon}/>
                                                        ) : null
                                                    }
                                                    title={subMenuFirst.title}
                                                >
                                                    {subMenuFirst.submenu.map((subMenuSecond) => (
                                                        <Menu.Item key={subMenuSecond.key}>
                                                            <Link href={subMenuSecond.path}>
                                                                <span>{subMenuSecond.title}</span>
                                                            </Link>
                                                        </Menu.Item>
                                                    ))}
                                                </SubMenu>
                                            ) : (
                                                <Menu.Item key={subMenuFirst.key}>
                                                    <Link href={subMenuFirst.path}>
                                                        <div className="flex items-center">
                                                            {subMenuFirst.icon ? (
                                                                <Icon type={subMenuFirst?.icon}/>
                                                            ) : null}
                                                            <span>{subMenuFirst.title}</span>
                                                        </div>
                                                    </Link>
                                                </Menu.Item>
                                            )
                                        )}
                                    </SubMenu>
                                ) : (
                                    <Menu.Item key={menu.key}>
                                        <Link href={menu.path}>
                                            <div className={'d-flex'}>
                                                {menu.icon ? <Icon type={menu?.icon}/> : null}
                                                <span>{menu?.title}</span>
                                            </div>
                                        </Link>
                                    </Menu.Item>
                                )
                        )
                    }
                </Menu>
            </Scrollbars>

        </Sider>

    )
}
