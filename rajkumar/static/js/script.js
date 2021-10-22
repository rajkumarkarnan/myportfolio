console.log("It is working!")

let theme = localStorage.getItem('theme')

if(theme == null){
	setTheme('light-mode')
}else{
	setTheme(theme)
}

let themeDots = document.getElementsByClassName('theme-dot')

for (var i=0; i<themeDots.length; i++) {
	themeDots[i].addEventListener('click', function(){
		let mode = this.dataset.mode
		console.log('option clicked ' + mode);
		setTheme(mode)
	})
}

function setTheme(mode){

	console.log("mode " + mode)
	if(mode == 'light-mode'){
		document.getElementById('theme-style').href = static + '/default.css'
	}

	if(mode == 'blue-mode'){
		document.getElementById('theme-style').href = static + '/blue.css'
	}

	if(mode == 'green-mode'){
		console.log("inside purple-mode")
		document.getElementById('theme-style').href = static + '/green.css'
	}

	if(mode == 'purple-mode'){
		console.log("inside purple-mode")
		document.getElementById('theme-style').href = static + '/green.css'
	}


	localStorage.setItem('theme',mode)
}