/**********************************************************************
 *
 * @模块名称: Empty1
 *
 * @模块用途: Empty1  空数据展示组件
 *
 * @创建人: pgli
 *
 * @date: 2021/9/27 21:40
 *
 **********************************************************************/
import React from 'react';
import {Empty} from "antd";
import empty from '../../assets/teachingCenter/empty.png';


type Empty1Props = {
	empty?: string;
}
const Empty1: React.FC<any> = (props: any) => {
	return (
		<React.Fragment>
			<Empty
				image={props.empty || empty}
				imageStyle={Object.assign({
					height: 210
				}, props.imageStyle)}
				description={
					props.description ? <span style={{color: '#7F8693'}}>{props.description}</span> : null
				}
			>
				{
					props.children
				}
			</Empty>
		</React.Fragment>
	)
};

export default Empty1;
