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
import {Button, Card} from 'antd';
import styles from './ContentCard.module.less';

const {Meta} = Card;

type ContentCardProps = {
	action: 'add' | 'upload' | 'more'
}
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
					props.action !== 'upload' ? <Button className={styles.bth}>+添加</Button> : null
				}
			</Card>
		</React.Fragment>
	)
};

export default ContentCard;
