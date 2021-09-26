import React, {useReducer} from 'react';
import BasicContents from '@components/Contents/BasicContents';
import {init, reducer, State} from "@pages/teachingCenter/Store";
import {Col, Row} from "antd";
import ChangeTeachingMaterials from "@pages/teachingCenter/components/ChangeTeachingMaterials";


const TeachingCenter = () => {
    const [state, dispatch] = useReducer(reducer, State, init);
    return (
        <React.Fragment>
            <Row>
                <Col span={6}>
                    <ChangeTeachingMaterials state={state} dispatch={dispatch} />
                </Col>
                <Col span={12}></Col>
                <Col span={6}></Col>
            </Row>
            <Row>
                <Col span={18}></Col>
                <Col span={6}>

                </Col>
            </Row>
        </React.Fragment>
    )
};

export default TeachingCenter;
