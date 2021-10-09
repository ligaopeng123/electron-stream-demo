/**********************************************************************
 *
 * @模块名称: MyTable
 *
 * @模块用途: MyTable
 *
 * @创建人: pgli
 *
 * @date: 2021-08-26 16:20:21
 *
 **********************************************************************/
import React, {useReducer} from 'react';
import MyTableTable from "./components/MyTableTable";
import MyTableModal from "./components/MyTableModal";
import {reducer, init, State} from "./Store";
import {Props} from "./typing";
import {Card, Col, Row, Tabs} from "antd";
import styles from './styles.module.less';
import TabTitle from "@pages/personalCenter/components/TabTitle";
import ColTitles from "@components/Title/ColTitles";
import logout from '../../assets/personalCenter/logout.png';
import useResize from "@hooks/useResize";
import BasicInfo from "@pages/personalCenter/components/BasicInfo";

const {TabPane} = Tabs;
const MyTable: React.FC<Props> = () => {
	const [state, dispatch] = useReducer(reducer, State, init);
	const conentHeight = useResize();
	const bodyHeight = conentHeight - 76 - 16 - 45;
	return (
		<React.Fragment>
			<div className={styles.title}>
				<ColTitles style={{padding: 0}}>个人中心</ColTitles>
				<span className={styles.logout}><img src={logout}/>退出登录</span>
			</div>
			<div className={styles.content} style={{height: bodyHeight}}>
				<Tabs tabPosition={`left`} className={styles.tabs}>
					<TabPane tab={<TabTitle icon={`basic`} title={`基础资料`}/>} key="basic">
						<BasicInfo />
					</TabPane>
					<TabPane tab={<TabTitle icon={`changePassword`} title={`修改密码`}/>} key="changePassword">
						Content of Tab 2
					</TabPane>
					<TabPane tab={<TabTitle icon={`mySettings`} title={`基础资料`}/>} key="mySettings">
						Content of Tab 3
					</TabPane>
					<TabPane tab={<TabTitle icon={`myCollection`} title={`我的收藏`}/>} key="myCollection">
						Content of Tab 3
					</TabPane>
					<TabPane tab={<TabTitle icon={`watchHistory`} title={`观看记录`}/>} key="watchHistory">
						Content of Tab 3
					</TabPane>
					<TabPane tab={<TabTitle icon={`aboutUs`} title={`关于我们`}/>} key="aboutUs">
						Content of Tab 3
					</TabPane>
				</Tabs>
			</div>
		</React.Fragment>
	)
};

export default MyTable;
