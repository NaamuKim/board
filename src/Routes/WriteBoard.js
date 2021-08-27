import React, { useState } from "react";
import styled from "styled-components";
import EditorComponent from "../Components/Editor";

const Container = styled.div`
	width: 80vw;
	margin: 30px;
	height: calc(100vh - 50px);
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const InputTitle = styled.input`
	width: 800px;
`;

const NoticeWriteComponent = () => {
	const [title, setTitle] = useState("");
	const [desc, setDesc] = useState("");
	function onEditorChange(value) {
		setDesc(value);
	}
	return (
		<Container>
			<InputTitle
				placeholder="제목을 입력하시오"
				onChange={(event) => setTitle(event.target.value)}
			/>
			<EditorComponent value={desc} onChange={onEditorChange} />
		</Container>
	);
};

export default NoticeWriteComponent;
