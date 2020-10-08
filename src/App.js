import React from "react"
import styled from "styled-components"
import MediaContainer from "./Components/MediaContainer/MediaContainer"
import PageTitle from "./Components/PageTitle/PageTitle"
import "./App.css"

const WrapperDiv = styled.div`
	margin: auto;
	padding: 40px;
	max-width: 1024px;
	text-align: center;
	background-color: #fbfbfb;
`

function App() {
	return (
		<WrapperDiv>
			<PageTitle />
			<MediaContainer />
		</WrapperDiv>
	)
}

export default App
