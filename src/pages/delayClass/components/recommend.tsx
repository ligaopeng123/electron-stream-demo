/**
 *@模块名称：Recommend
 *
 *@创建人：ligaoming
 *
 *@作用：延时课堂--推荐
 *
 *@date 2020/9/5
 *
 *@版权所有：
 */

import React, {useState, useRef} from 'react';
import {Button, Card, Avatar} from 'antd';
import {useRecoilState} from "recoil";
import {withRouter} from 'react-router-dom';
import styles from './recommend.module.less';

const {Meta} = Card;

const tempData = [{
    'id': '1',
	'name': '推荐'
},{
    'id': '2',
	'name': '院士面对面'
},{
    'id': '3',
	'name': 'stme教学'
},{
    'id': '3',
	'name': 'stme教学'
}]

type DelayState = {
	selId: string,
	selName: string,
}
type RecommendProps = {
	moreClick: (params: any)=>void,
}

const Recommend: React.FC<RecommendProps> = (props) => {
	const [delayState, setDelayState] = useState<DelayState>({
		selId: '1',
		selName: '推荐'
	});
	const tabChange = (item: any) => {
		setDelayState({
			selId: item.id,
			selName: item.name
		})
	};

    return (
        <React.Fragment>
			<div className={styles.delayCnt}>
				<div className={styles.titleGroup}>
					<div className={styles.tabTitle}>院士面对面</div>
					<div className={styles.rightPart} onClick={()=>props.moreClick({
						'id': '2',
						'name': '院士面对面'
					})}>更多</div>
				</div>
				<div className={styles.CardCnt}>
					{tempData.slice(0,2).map((item,index)=>(<Card
						hoverable
						className={styles.contentCard}
						style={{width: '50%',marginLeft: index !==0 ? 14 : 0,borderRadius:4}}
						cover={<img alt="example" src="./assets/teaching.png"/>}
					>
						<Meta avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
							title="直播培训标题：例如小学科学四年级湖北" description="直播培训标题：例如小学科学四年级湖北" />
					</Card>))}
				</div>
				<div className={styles.titleGroup}>
					<div className={styles.tabTitle}>stem教学</div>
					<div className={styles.rightPart} onClick={()=>props.moreClick({
						'id': '3',
						'name': 'stme教学'
					})}>更多</div>
				</div>
				<div className={styles.CardCnt}>
				{tempData.slice(0,4).map((item,index)=>(<Card
						hoverable
						className={styles.contentCard}
						style={{width: '24%',marginLeft: index !==0 ? 14 : 0,borderRadius:4}}
						cover={<img alt="example" src="./assets/teaching.png"/>}
					>
						<Meta avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
							title="直播培训标题：例如小学科学四年级湖北" description="直播培训标题：例如小学科学四年级湖北" />
					</Card>))}
				</div>
			</div>
        </React.Fragment>
    )
}

export default Recommend;


