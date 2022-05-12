window.onload=function(){
	
	setTimeout(() => {
		Draggable.create('.gallery', {
			bounds:'body',
			inertia:true
		})
		document.body.classList.add('loaded')
	}, 2000);
}