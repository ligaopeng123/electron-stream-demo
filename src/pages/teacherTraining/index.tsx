/**
 *@模块名称：TeacherTraining
 *
 *@创建人：ligaoming
 *
 *@作用：教师培训
 *
 *@date 2020/9/5
 *
 *@版权所有：
 */

import React, {useState, useRef} from 'react';
import {Button, Card, Avatar, Pagination, Input} from 'antd';
import {useRecoilState} from "recoil";
import {withRouter} from 'react-router-dom';
import Recommend from './components/recommend';
import styles from './styles.module.less';

const {Meta} = Card;

const tempData = [{
    'id': '1',
	'name': '推荐'
},{
    'id': '2',
	'name': '直播一'
},{
    'id': '3',
	'name': '国培回放'
},]

const tempData2 = [{
    'id': '1',
	'name': '全部的'
},{
    'id': '2',
	'name': '正直播的'
},{
    'id': '3',
	'name': '未开始'
},]


type TrainState = {
	selId: string,
	selName: string,
}
const FocusFlag:Boolean=false;

const TeacherTraining: React.FC<{}> = (props: any) => {
	const [trainState, setTrainState] = useState<TrainState>({
		selId: '1',
		selName: '推荐',
	});
	const [focusFlag,setFocusFlag] = useState<Boolean>(false);
	
	const tabChange = (item: any) => {
		setTrainState({
			selId: item.id,
			selName: item.name,
		})
		setFocusFlag(false)
	}; 

	const focusSearch = () => {
		setFocusFlag(true)
	}; 


    return (
        <React.Fragment>
			<div className={styles.trainMain}>
				{focusFlag ? <div className={styles.searchCls}>
					<Input placeholder='搜索想要的内容' style={{ marginBottom: 8, display: 'block'}}/>
				</div> : ''}
				<div className={styles.tabs}>
					{tempData.map((item)=><div onClick={()=>tabChange(item)} 
					className={styles.tabPart+' '+((item.id === trainState.selId )? styles.selTab : '')} key={item.id}>{item.name}</div>)}
					
					{!focusFlag ? <div className={styles.rightCls}>
						<Input onClick={focusSearch} placeholder='搜索想要的内容' style={{width: 188, marginBottom: 8, display: 'block'}}/>
					</div> : ''}
				</div>	
				{trainState.selId == '1' ? <Recommend moreClick={tabChange} /> : 
				<div>
					<div className={styles.subTabs}>
						<div className={styles.label}>排序</div>
						{tempData2.map((item)=><div onClick={()=>tabChange(item)} 
						className={styles.tabPart+' '+((item.id === trainState.selId )? styles.selTab : '')} key={item.id}>{item.name}</div>)}
						
					</div>
					<div className={styles.CardCnt}>
						{tempData.slice(0,4).map((item,index)=>(<Card
								hoverable
								className={styles.contentCard}
								style={{width: 254,marginLeft: index !==0 ? 14 : 0,borderRadius:4}}
								cover={<img alt="example" src="/assets/teaching.png"/>}
							>
							<Meta avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
								title="直播培训标题：例如小学科学四年级湖北" description="直播培训标题：例如小学科学四年级湖北" />
						</Card>))}
					</div>
				</div>
				}
				{trainState.selId !== '1' ? <Pagination style={{display:'flex',justifyContent:'center',marginTop: 50}} defaultCurrent={1} total={4} /> : ''}
			</div>
        </React.Fragment>
    )
}

export default withRouter(TeacherTraining);


