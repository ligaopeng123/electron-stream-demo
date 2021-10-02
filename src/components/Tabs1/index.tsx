/**********************************************************************
 *
 * @模块名称: index
 *
 * @模块用途: index
 *
 * @创建人: pgli
 *
 * @date: 2021/10/2 12:11
 *
 **********************************************************************/
import React from 'react';
import styles from "./index.module.less";
import {Card, Tabs} from "antd";

const {TabPane} = Tabs;

type Tabs1Props = {
	height?: number | string
}
const Tabs1: React.FC<Tabs1Props> = (props) => {
	return (
		<React.Fragment>
			<Card bordered={false} className={styles.tabs} bodyStyle={{padding: 0, height: props.height || '100%'}}>
				<Tabs centered={true} style={{height: '100%'}}>
					{
						props.children
					}
				</Tabs>
			</Card>
		</React.Fragment>
	)
}

export default Tabs1;
