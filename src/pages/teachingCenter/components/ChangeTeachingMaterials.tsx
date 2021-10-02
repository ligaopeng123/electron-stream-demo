import React, {useState} from 'react';
import SmallCard from "@pages/teachingCenter/components/SmallCard";
import CTMIcon from '../../../assets/teachingCenter/1.png'
import {Modal} from "antd";
import ChangeSubjectTextbooks from "@pages/teachingCenter/components/ChangeSubjectTextbooks";
import ModalTitle from "@components/ModalTitle";

const ChangeTeachingMaterials: React.FC<any> = (props: any) => {
	const [isModalVisible, setIsModalVisible] = useState(false);
	const onClick = () => {
		setIsModalVisible(true);
	};
	const handleCancel = () => {
		setIsModalVisible(false);
	};
	return (
		<React.Fragment>
			<SmallCard onClick={onClick} rightIcon={CTMIcon} title={`更换教材`} description={`已选择 三年级（下册）`}></SmallCard>
			<Modal visible={isModalVisible}
			       onCancel={handleCancel}
			       footer={null}
			       width={1150}
			       title={<ModalTitle>更换科目教材</ModalTitle>}>
				<ChangeSubjectTextbooks/>
			</Modal>
		</React.Fragment>
	)
};

export default ChangeTeachingMaterials;
