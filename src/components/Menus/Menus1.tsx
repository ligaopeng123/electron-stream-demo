/**********************************************************************
 *
 * @模块名称: Menus1
 *
 * @模块用途: Menus1
 *
 * @创建人: pgli
 *
 * @date: 2021/10/7 17:04
 *
 **********************************************************************/
import React, {useState, useEffect} from 'react';
import {Menu} from "antd";
import styles from './Menus1.module.less';

type MenuItem = {
	title: string;
	key: any;
}
type Menus1Props = {
	data: Array<MenuItem>;
}

const Menus1: React.FC<Menus1Props> = (props) => {
	const {data} = props;
	
	return (
		<React.Fragment>
			<Menu className={styles.menus1} defaultSelectedKeys={data ? [String(data[0].key)] : []}>
				{
					data?.map((item) => {
						return <Menu.Item key={item.key}>{item.title}</Menu.Item>
					})
				}
			</Menu>
		</React.Fragment>
	)
};

export default Menus1;
