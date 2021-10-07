/**
 *@模块名称：RouterAdminUsers
 *
 *@创建人：ligaoming
 *
 *@作用：用戶管理用戶模塊  用户表
 *
 *@date 2020/9/5
 *
 *@版权所有：
 */

import React, {useState, useRef} from 'react';
import {Button, Card, Avatar, Pagination} from 'antd';
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
	'name': '院士面对面'
},{
    'id': '3',
	'name': 'stme教学'
},]

type DelayState = {
	selId: string,
	selName: string,
}

const RouterAdminUsers: React.FC<{}> = (props: any) => {
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
			<div className={styles.delayMain}>
				<div className={styles.tabs}>
					{tempData.map((item)=><div onClick={()=>tabChange(item)} 
					className={styles.tabPart+' '+((item.id === delayState.selId )? styles.selTab : '')} key={item.id}>{item.name}</div>)}
				</div>	
				{delayState.selId == '1' ? <Recommend moreClick={tabChange} /> : 
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
				}
				{delayState.selId !== '1' ? <Pagination style={{display:'flex',justifyContent:'center',marginTop: 50}} defaultCurrent={1} total={4} /> : ''}
			</div>
        </React.Fragment>
    )
}

export default withRouter(RouterAdminUsers);


