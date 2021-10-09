/**********************************************************************
 *
 * @模块名称: AdvertisingSpace
 *
 * @模块用途: AdvertisingSpace  广告位
 *
 * @创建人: pgli
 *
 * @date: 2021/9/29 21:31
 *
 **********************************************************************/
import React, {useState, useEffect} from 'react';
import {Card} from "antd";
import Empty1 from '@/components/Empty1';
import emptyIcon from "../../../assets/teachingCenter/advertising1.png";

const AdvertisingSpace: React.FC<any> = (props: any) => {
	return (
		<React.Fragment>
			<Card bordered={false} bodyStyle={{padding: 0}}>
				<Empty1 imageStyle={{height: 180}} empty={emptyIcon}></Empty1>
			</Card>
		</React.Fragment>
	)
};

export default AdvertisingSpace;
