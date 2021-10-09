/**********************************************************************
 *
 * @模块名称: ContentCard
 *
 * @模块用途: ContentCard  教学资源 内容卡片
 *
 * @创建人: pgli
 *
 * @date: 2021/10/2 12:25
 *
 **********************************************************************/
import React, {useState, useEffect} from 'react';
import {Button, Card, Dropdown, Menu} from 'antd';
import styles from './ContentCard.module.less';
import {MoreOutlined} from "@ant-design/icons/lib";
import Icon from "@components/Icon";
import exportImg from '../../../assets/teachingCenter/export.png';
// export.png
const {Meta} = Card;

type ContentCardProps = {
	action: 'add' | 'upload' | 'more'
}

const menu = (
	<Menu>
		<Menu.Item key="0">
			<img src={exportImg}/>导出课件
		</Menu.Item>
		<Menu.Item key="1">
			<Icon type={`icon-shoucang--`}/> 设为默认第一
		</Menu.Item>
		<Menu.Item key="3">
			<Icon type={`icon-shanchu`}/> 删除
		</Menu.Item>
	</Menu>
);

const ContentCard: React.FC<ContentCardProps> = (props) => {
	return (
		<React.Fragment>
			<Card
				hoverable
				className={styles.contentCard}
				style={{minWidth: 240}}
				cover={<img alt="example" src="/assets/teaching.png"/>}
			>
				<Meta title="资源名称" description="示范课｜视频"/>
				{
					props.action !== 'upload'
						? <React.Fragment><Button className={styles.bth}>+添加</Button>
							<Dropdown overlay={menu} trigger={['click']}>
								<MoreOutlined className={styles.more}/>
							</Dropdown>
						</React.Fragment>
						: null
				}
			</Card>
		</React.Fragment>
	)
};

export default ContentCard;
