import Head from 'next/head'
import styles from '../styles/Home.module.css'

// https://www.youtube.com/watch?v=Km0AXUQKYXA
const Index = () => {

	const navigationButtonOnClick = (ev) => {
		var nav_list = [...document.getElementsByClassName('navigation-list')][0]
		if(ev.target.classList.contains('clicked')) {
			ev.target.classList.remove('clicked');
			nav_list.classList.remove('active');
		}
		else {
			ev.target.classList.add('clicked');
			nav_list.classList.add('active');
		}
	};

	const homeButtonOnClick = (ev) => { document.getElementById('home').scrollIntoView({behavior:'smooth', block:'end'}); };
	const aboutButtonOnClick = (ev) => { document.getElementById('about').scrollIntoView({behavior:'smooth', block:'end'}); };
	const demoButtonOnClick = (ev) => { document.getElementById('demo').scrollIntoView({behavior:'smooth', block:'end'}); };
	const contactButtonOnClick = (ev) => { document.getElementById('contact').scrollIntoView({behavior:'smooth', block:'end'}); };

	return <div className='root'>
		<title>Example Site</title>
		<div id='home' className='page-container'>
			<img src='/welcome.png' />
			<h1 className='title'>Home</h1>
			<p className='description'>Welcome to our site.</p>
		</div>
		<div id='about' className='page-container'>
			<h1 className='title'>About</h1>
			<p className='description'>This is where we would talk about ourselves and our idea.</p>
		</div>
		<div id='demo' className='page-container'>
			<h1 className='title'>Demo</h1>
			<p className='description'>We would have a video or interactive demonstration here.</p>
			<iframe className='video'></iframe>
		</div>
		<div id='contact' className='page-container'>
			<h1 className='title'>Contact</h1>
			<p className='description'>This is where customers contact us.</p>
			<textarea className='subject-textarea' placeholder='Subject'></textarea>
			<textarea className='message-textarea' placeholder='Message'></textarea>
		</div>
		<svg className='navigation-button' width='100' height='100' viewBox='0 0 100 100' onClick={navigationButtonOnClick}>
			<path id='p1' className='navigation-path' d='M 0 3 L 100 3' stroke='black' strokeWidth='3' />
			<path id='p2' className='navigation-path' d='M 0 50 L 100 50' stroke='black' strokeWidth='3' />
			<path id='p3' className='navigation-path' d='M 0 97 L 100 97' stroke='black' strokeWidth='3' />
		</svg>
		<ul className='navigation-list'>
			<li><a className='home-button' onClick={homeButtonOnClick}>Home</a></li>
			<li><a className='about-button' onClick={aboutButtonOnClick}>About</a></li>
			<li><a className='demo-button' onClick={demoButtonOnClick}>Demo</a></li>
			<li><a className='contact-button' onClick={contactButtonOnClick}>Contact</a></li>
		</ul>
		<style jsx>{`
			h1 {
				margin-left:10vw;
				margin-right:10vw;
				padding:0;
				width:80vw;
				height:10vh;
				display:flex;
				align-items:center;
				font-size:6em;
			}

			p {
				margin-left:10vw;
				margin-right:10vw;
				padding:0;
				width:80vw;
				height:90vh;
				text-indent:2%;
				font-size:1.5em;
			}

			#home img { position:absolute; left:50vw; height:20vh; width:40vw; height:auto; }

			.page-container { float:left; height:100vh; }

			.page-container#about { background:#63cdda; }
			.page-container#demo { background:#f3a683; }
			.page-container#contact { background:#f7d794; }

			.navigation-button {
				position:fixed;
				left:90vw;
				top:3vh;
				width:4vh;
				height:4vh;
			}

			.navigation-button path { transition:all .5s; }
			.navigation-button.clicked #p1 { d:path("M 0 0 L 100 100"); }
			.navigation-button.clicked #p2 { d:path("M 100 0 L 0 100"); }
			.navigation-button.clicked #p3 { d:path(""); }

			ul.navigation-list {
				position:fixed;
				left:90vw;
				top:10vh;
				width:4vh;
				height:15vh;
				list-style-type:none;
				padding:0;
				visibility:hidden;
				opacity:0;
				transition:opacity .5s;
			}

			ul.navigation-list.active {
				visibility:visible;
				opacity:1;
			}

			ul.navigation-list li {
				float:left;
				width:100%;
				height:25%;
			}

			ul.navigation-list li a {
				float:left;
				width:100%;
				height:100%;
				text-align:center;
				cursor:default;
			}

			.video {
				position:absolute;
				left:10vw;
				top:240vh;
				width:40vw;
				height:30vh;
				background:black;
				border:0;
				outline:0;
			}

			.subject-textarea {
				position:absolute;
				left:10vw;
				top:340vh;
				width:calc(40vw - 20px);
				height:calc(10vh - 20px);
				padding:10px;
				resize:none;
			}

			.message-textarea {
				position:absolute;
				left:10vw;
				top:355vh;
				width:calc(40vw - 20px);
				height:calc(30vh - 20px);
				padding:10px;
				resize:none;
			}
		`}</style>
	</div>
};

export default Index;
