/**********************************************************************
 *
 * @模块名称: EducationResourcesTabs
 *
 * @模块用途: EducationResourcesTabs  教学资源按钮组
 *
 * @创建人: pgli
 *
 * @date: 2021/9/27 20:59
 *
 **********************************************************************/
import React, {useState, useEffect} from 'react';
import {Button} from "antd";
import styles from './EducationResources.module.less';

const TabsData = [{
	lable: '全部',
	value: 'all'
}, {
	lable: 'PPT',
	value: 'PPT'
}, {
	lable: '微课',
	value: 'micro'
}, {
	lable: '示范课',
	value: 'demonstration'
}, {
	lable: '实验操作',
	value: 'experimental'
}, {
	lable: '教学PPT',
	value: 'teachingPPT'
}, {
	lable: '配套素材',
	value: 'supportingMaterials'
}, {
	lable: '我的上传',
	value: 'myUpload'
}];

const EducationResourcesTabs: React.FC<any> = (props: any) => {
	const [selected, setSelected] = useState<string>('all');
	
	const onClick = (e: any) => {
		setSelected(e.value);
	};
	return (
		<React.Fragment>
			<div className={styles.tabs}>
				{
					TabsData.map((item: any) => {
						return <Button className={selected === item.value ? 'selected' : ''}
						               key={item.value}
						               onClick={() => onClick(item)}
						               shape="round">{item.lable}</Button>
					})
				}
			</div>
		</React.Fragment>
	)
};

export default EducationResourcesTabs;
