/**********************************************************************
 *
 * @模块名称: MidTerm
 *
 * @模块用途: MidTerm  查看期中期末考试
 *
 * @创建人: pgli
 *
 * @date: 2021/9/29 21:02
 *
 **********************************************************************/
import React from 'react';
import SmallCard from "@pages/teachingCenter/components/SmallCard";
import ctmIcon from '../../../assets/teachingCenter/change_teaching _materials.png';
import {RouteComponentProps, withRouter} from "react-router-dom";

type MidTermProps = {
	[propName: string]: any;
}

const MidTerm: React.FC<RouteComponentProps & MidTermProps> = (props) => {
	const onClick = () => {
		props.history.push({
			pathname: '/testQuestions',
		})
	};
	return (
		<SmallCard onClick={onClick} rightIcon={ctmIcon} title={`查看本册期中、期末试题`} description={`点击按钮下载教材全书所有资源`}/>
	)
};

export default withRouter(MidTerm);
