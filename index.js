const jsdom=require('jsdom')
const {JSDOM}=jsdom

const fs=require('fs')

const dom=new JSDOM(
	fs.readFileSync('reflections.html',{encoding:'utf-8'}),
	{runScripts:'dangerously',resources:'usable'}
)

// put them here for convenience
const {window}=dom;

// await new Promise(done=>setTimeout(done,100))
// This works, but I don't like it. Remember to wrap everything
// in a IIAE if you do this,

window.addEventListener('load',()=>{
	// better, but probably not the best idea.
	window.init()
	window.onload=null

	var {$}=window
	$('code').value='_Hello, World!;#_#_#_#_#_#_#_#_#_#_#_#_#_'
	$('run').click()
	console.log($('output').value)

})
