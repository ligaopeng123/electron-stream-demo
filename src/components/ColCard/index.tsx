/**********************************************************************
 *
 * @模块名称: index
 *
 * @模块用途: index
 *
 * @创建人: pgli
 *
 * @date: 2021/10/2 13:02
 *
 **********************************************************************/
import React from 'react';
import {Col, Row} from "antd";
import {convertToTwodimensional} from "@gaopeng123/utils";
import styles from './styles.module.less';

type ColCardProps = {
	data: any[];
	col?: number;
	render: any;
}
const ColCard: React.FC<ColCardProps> = (props) => {
	const col = props.col || 3;
	const span = 24 / col;
	const data = convertToTwodimensional(props.data, col);
	
	return (
		<React.Fragment>
			{
				data?.map((rows: any, i: number) => {
					return <Row className={styles.rows} key={`rows-${i}`} gutter={[16, 16]}>
						{
							rows.map((item: any, j: number) => {
								return <Col span={span} key={`col-${j}`}>
									{
										props.render(item)
									}
								</Col>
							})
						}
					</Row>
				})
			}
		</React.Fragment>
	)
};

export default ColCard;
