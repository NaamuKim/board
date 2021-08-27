import React, { useState } from "react";
import styled from "styled-components";
import Axios from "axios";

const Head = styled.div``;

const Wrapper = styled.div``;

const Form = styled.form`
	width: 100vw;
	height: calc(100vh - 50px);
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const Input = styled.input`
	width: 30%; /* 원하는 너비 설정 */
	height: auto; /* 높이값 초기화 */
	line-height: normal; /* line-height 초기화 */
	padding: 0.8em 0.5em; /* 원하는 여백 설정, 상하단 여백으로 높이를 조절 */
	font-family: inherit; /* 폰트 상속 */
	border: 1px solid #999;
	border-radius: 0; /* iSO 둥근모서리 제거 */
`;

const Signup = () => {
	const [userName, setUserName] = useState("");
	const [id, setId] = useState("");
	const [password, setPassword] = useState("");

	const onChange = (event) => {
		const {
			target: { name, value },
		} = event;
		if (name === "userName") {
			setUserName(value);
		} else if (name === "id") {
			setId(value);
		} else if (name === "password") {
			setPassword(value);
		}
	};

	const onSubmit = async (event) => {
		event.preventDefault();
		Axios.post(process.env.REACT_APP_SINGUP_URL, {
			name: userName,
			id: id,
			password: password,
		})

			.then((response) => {
				console.log(response.data);
				window.alert(response.data.message);
			})
			.catch((error) => {
				window.alert(error);
			});
	};

	return (
		<>
			<Head></Head>
			<Wrapper>
				<Form onSubmit={onSubmit}>
					<Input
						name="userName"
						type="text"
						placeholder="이름을 입력해주세요"
						required
						value={userName}
						onChange={onChange}
					/>
					<Input
						name="id"
						type="text"
						placeholder="아이디를 입력해주세요"
						required
						value={id}
						onChange={onChange}
					/>
					<Input
						name="password"
						type="password"
						placeholder="비밀번호를 입력해주세요"
						required
						value={password}
						onChange={onChange}
					/>
					<Input type="submit" value={"회원가입"} />
				</Form>
			</Wrapper>
		</>
	);
};

export default Signup;
