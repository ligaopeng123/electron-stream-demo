/**
 * 布局管理
 */
import React, {useState, createElement, useEffect, useRef} from 'react';
import {Link, withRouter} from 'react-router-dom';
import ProLayout from '@ant-design/pro-layout';
import proSettings from "@/defaultSettings" ;
import BackUp from './BackTop';
import RightLayout from '../RightLayout';
import useOEM from "@/hooks/useOEM";
import {RouteWithModuleRoutes} from '@gaopeng123/hoc';
import {MenuDataItem} from "@ant-design/pro-layout/lib/typings";
import {menuData} from "@store/Menus";
import {LeftOutlined, RightOutlined} from "@ant-design/icons/lib";
import delayClass from '../../assets/menus/delayClass.png';
import personalCenter from '../../assets/menus/personalCenter.png';
import teacherTraining from '../../assets/menus/teacherTraining.png';
import teachingCenter from '../../assets/menus/teachingCenter.png';
import delayClass_selected from '../../assets/menus/delayClass_selected.png';
import personalCenter_selected from '../../assets/menus/personalCenter_selected.png';
import teacherTraining_selected from '../../assets/menus/teacherTraining_selected.png';
import teachingCenter_selected from '../../assets/menus/teachingCenter_selected.png';
import './styles.less';

const IOCN: any = {
	delayClass,
	personalCenter,
	teacherTraining,
	teachingCenter,
	delayClass_selected,
	personalCenter_selected,
	teacherTraining_selected,
	teachingCenter_selected
};

/**
 * 图标样式
 */
const ICON_SL = {
	width: 16,
	height: 8,
	color: '#000',
	cursor: 'pointer',
	marginRight: 12
};

/**
 * 创建icon图标
 * @param icon
 */
const createIcon = (icon: string) => {
	return <React.Fragment>
		<img className={`noselected`} style={{height: 32, paddingRight: 8}} src={IOCN[icon]}/>
		<img className={`selected`} style={{height: 32, paddingRight: 8}} src={IOCN[`${icon}_selected`]}/>
	</React.Fragment>
};

const BasicLayout = (props: any) => {
	/**
	 * 设置重定向数据 默认的加载页面
	 */
	const [pathname, setPathname] = useState<string>(props.history.location.pathname);
	/**
	 * 路由管理
	 */
	const [router, setRouter] = useState<Array<any>>([]);
	/**
	 * OEM数据
	 */
	const menusLogo = useOEM('menusLogo');
	/**
	 * 项目名称
	 */
	const menusName = useOEM('menusName');
	
	/**
	 * 重定向到第一页
	 */
	const redirect = (menuData: MenuDataItem) => {
		if (pathname === '/') {
			setTimeout(() => {
				const firstPath = menuData[0].path as string;
				setPathname(firstPath);
				props.history.push({
					pathname: firstPath
				})
			});
		}
	};
	
	/**
	 * 加载数据
	 */
	useEffect(() => {
		menuData.then((res: Array<any>) => {
			const menuData = res[0];
			setRouter(menuData as Array<any>);
			redirect(menuData);
		});
	}, [menuData]);
	
	/**
	 *  修改路由
	 **/
	const changeRouter = (direction: 'up' | 'down') => {
		const _pathname = props.history.location.pathname;
		for (let i = 0; i < router.length; i++) {
			const route = router[i];
			if (_pathname === route.path) {
				if (direction === 'up') {
					for (let j = i - 1; j >= 0; j--) {
						const routerE = router[j];
						if (!routerE.hideInMenu) {
							document.getElementById(routerE.path)?.click();
							break;
						} else {
							// 当前分支 则表示前进回退是路由触发的 此处通过push来控制前进后退
							if (routerE.hideInMenu && _pathname !== pathname) {
								props.history.push({
									pathname: routerE.path
								});
								break;
							}
						}
					}
				} else if (direction === 'down') {
					for (let j = i + 1; j < router.length; j++) {
						const routerE = router[j];
						if (!routerE.hideInMenu) {
							document.getElementById(routerE.path)?.click();
							break;
						}
					}
				}
				break;
			}
		}
	};
	
	return (
		<React.Fragment>
			<ProLayout
				{...proSettings}
				// @ts-ignore
				location={{pathname}}
				logo={<div className={`logo-region`}><img src={menusLogo}/></div>}
				title={false}
				route={{routes: router, path: "/"}}
				postMenuData={(menuData: any) => {
					return menuData;
				}}
				// menu={{request: loadMenus, defaultOpenAll: true}}
				menuItemRender={({path, icon, name}: MenuDataItem, defaultDom) => {
					// 渲染菜单项
					return (<div className={`layoutMenuItem`} onClick={() => {
						setPathname(path as string);
					}}>
						<Link to={path as string}>
							{createIcon(icon as string)}
							<span id={path} className={`ant-pro-menu-item-title`}>{name}</span>
						</Link>
					</div>);
				}}
				breadcrumbRender={(routes: any) => {
					// 面包屑
					return routes;
				}}
				itemRender={(route: any, params: any, routes: any, paths: Array<string>) => {
					return null;
				}}
				onPageChange={(location: any) => {
					// 頁面跳轉是觸法
					// setPathname(location.pathname);
				}}
				menuDataRender={(menuList: any) => {
					// menuData 的 render 方法，用来自定义 menuData
					return menuList
				}}
				onMenuHeaderClick={(menu: any) => {
					//      {/*menu 菜单的头部点击事件*/}
				}}
				headerContentRender={(props: any) => {
					// 路由操作
					return <div className={`change-router`}>
						<LeftOutlined onClick={() => changeRouter('up')} style={ICON_SL}/>
						<RightOutlined onClick={(_) => changeRouter('down')} style={ICON_SL}/>
					</div>
				}}
				rightContentRender={() => (<RightLayout/>)}
			>
				<RouteWithModuleRoutes routers={router}/>
			</ProLayout>
			{/*<BackUp/>*/}
		</React.Fragment>
	);
};

export default withRouter(BasicLayout);
