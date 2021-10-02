import React from 'react';
import SmallCard from "@pages/teachingCenter/components/SmallCard";
import CTMIcon from '../../../assets/teachingCenter/1.png'

const ChangeTeachingMaterials: React.FC<any> = (props: any) => {
	return (
		<React.Fragment>
			<SmallCard rightIcon={CTMIcon} title={`更换教材`} description={`已选择 三年级（下册）`}></SmallCard>
			
		</React.Fragment>
	)
};

export default ChangeTeachingMaterials;
