import React, {ReactNode} from 'react';
import {Card, Col, Row} from "antd";
import Icon from "@components/Icon";
import styles from './SmallCard.module.less';

export type SmallCardProps = {
	title?: string | ReactNode;
	description?: string | ReactNode;
	rightIcon?: string;
	onClick?: () => void;
}
const SmallCard: React.FC<SmallCardProps> = (props) => {
	const {title, rightIcon, description} = props;
	return (
		<Card bordered={false} style={{height: 76}} bodyStyle={{padding: '6px 16px'}}>
			<Row>
				<Col span={20}>
					<div className={styles.title}>{title}</div>
					<div className={styles.content}><Icon style={{fontSize: 16}} type="icon-wendang"/>
						{description}
					</div>
				</Col>
				<Col span={4}><img onClick={props?.onClick}
				                   className={props.onClick ? styles.rightImgClick : styles.rightImg}
				                   src={rightIcon}/>
				</Col>
			</Row>
		</Card>
	)
};

export default SmallCard;
