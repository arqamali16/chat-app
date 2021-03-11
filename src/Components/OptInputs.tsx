import { Row, Col, Input } from 'antd';
import React from 'react';

const OtpInputs = () => {
	return (
		<Row justify='space-around' align='middle' style={{ marginLeft: '10%' }}>
			<Col span={6}>
				<Input className='otp-text'></Input>
			</Col>
			<Col span={6}>
				<Input className='otp-text'></Input>
			</Col>
			<Col span={6}>
				<Input className='otp-text'></Input>
			</Col>
			<Col span={6}>
				<Input className='otp-text'></Input>
			</Col>
		</Row>
	);
};

export default OtpInputs;
