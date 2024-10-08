export const LoadingImage = () => {
	return (
		<img 
			src={process.env.PUBLIC_URL + "/static/message/loading.gif"} 
			alt="loading" 
			style={{margin: "auto", width: "20%"}}
		/>
	)
}

LoadingImage.displayName="LoadingImage";