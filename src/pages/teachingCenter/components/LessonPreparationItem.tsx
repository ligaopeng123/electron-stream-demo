/**********************************************************************
 *
 * @模块名称: LessonPreparationItem
 *
 * @模块用途: LessonPreparationItem
 *
 * @创建人: pgli
 *
 * @date: 2021/10/9 19:16
 *
 **********************************************************************/
import React, {useState, useEffect} from 'react';
import styles from './LessonPreparationItem.module.less';
import ppt from '../../../assets/lessonItem/ppt.png';
import {randomInt} from "@gaopeng123/utils";

type LessonPreparationItemProps = {};
const LessonPreparationItem: React.FC<LessonPreparationItemProps> = (props) => {
	return (
		<div className={styles.item}>
			<div><img src={ppt}/></div>
			<div className={styles.content}>
				<span className={styles.title}>我的备课教案名称备份 {randomInt(0, 100)}</span>
				<span className={styles.text}>我的备课教案名称备份 {randomInt(0, 100)}</span>
			</div>
		</div>
	)
};

export default LessonPreparationItem;
