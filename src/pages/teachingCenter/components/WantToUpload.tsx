/**********************************************************************
 *
 * @模块名称: WantToUpload
 *
 * @模块用途: WantToUpload  我要上传模块
 *
 * @创建人: pgli
 *
 * @date: 2021/10/9 13:06
 *
 **********************************************************************/
import React, {useState, useEffect} from 'react';
import {Modal, Button, Row, Col, Upload} from "antd";
import ModalTitle from '@/components/ModalTitle';
import ColTitles from "@components/Title/ColTitles";
import styles from './WantToUpload.module.less';
import {UploadOutlined} from "@ant-design/icons/lib";

type WantToUploadProps = {};
const WantToUpload: React.FC<WantToUploadProps> = (props) => {
	const [isModalVisible, setIsModalVisible] = useState(false);
	const onClick = () => {
		setIsModalVisible(true);
	};
	const handleCancel = () => {
		setIsModalVisible(false);
	};
	return (
		<React.Fragment>
			<Button className={styles.bth} onClick={onClick}>我要上传</Button>
			<Modal visible={isModalVisible}
			       onCancel={handleCancel}
			       footer={null}
			       width={820}
			       bodyStyle={{padding: 0}}
			       title={<ModalTitle>上传信息</ModalTitle>}>
				<div className={styles.content}>
					<Row>
						<Col span={4}>
							<ColTitles>选择类别</ColTitles>
						</Col>
						<Col span={20}>
							<Button className={styles.select}>课件</Button>
							<Button className={styles.type}>视频</Button>
							<Button className={styles.type}>图片</Button>
						</Col>
					</Row>
					<Row>
						<Col span={4}>
							<ColTitles>上传文件</ColTitles>
						</Col>
						<Col span={20}>
							<Upload>
								<Button icon={<UploadOutlined/>}>上传课件名称</Button>
							</Upload>
							<div className={styles.upload}>
								<Upload>
									<div className={styles.icon}>
										<span>+</span>
									</div>
								</Upload>
								<div className={styles.text}>添加您要上传的文件</div>
							</div>
							* 限制文件格式
						</Col>
					</Row>
				</div>
			</Modal>
		</React.Fragment>
	)
};

export default WantToUpload;
