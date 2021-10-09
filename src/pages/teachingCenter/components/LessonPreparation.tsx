/**********************************************************************
 *
 * @模块名称: LessonPreparation
 *
 * @模块用途: LessonPreparation  本课备课
 *
 * @创建人: pgli
 *
 * @date: 2021/9/29 21:17
 *
 **********************************************************************/
import React, {useState, useEffect} from 'react';
import {Button, Card} from "antd";
import DragList from "@components/DragList";
import LessonPreparationItem from "@pages/teachingCenter/components/LessonPreparationItem";
import emptyIcon from '../../../assets/teachingCenter/empty2.png';
import lrIcon from '../../../assets/teachingCenter/lesson _reparation.png';
import Empty1 from "@components/Empty1";
import styles from './LessonPreparation.module.less';

const LessonPreparation: React.FC<any> = (props: any) => {
	return (
		<Card bordered={false} style={{height: '100%'}} title={
			<React.Fragment>
				<img src={lrIcon}/>
				<span className={styles.title}>本课备课</span>
			</React.Fragment>
		}
		      extra={<Button className={styles.bth} shape="round">开始上课</Button>}
		      bodyStyle={{height: 'calc(100% - 109px)', overflowY: 'auto', padding: 12}}
		      actions={[
			      <div>点击 给上课课件排序</div>
		      ]}
		>
			<DragList itemContent={<LessonPreparationItem/>}/>
			{/*<Empty1 imageStyle={{height: '100%'}} empty={emptyIcon}>暂无备课记录 请前往左侧添加</Empty1>*/}
		</Card>
	)
};

export default LessonPreparation;
