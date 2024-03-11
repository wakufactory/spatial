export default {
	props:{
		psrc:String,
	},
	template: `<a-entity scale=".5 .5 .5" >
		<a-video :src="psrc" autoplay loop="true" ss-video></a-video>
	</a-entity>`
}
if(AFRAME.components['ss-video']) delete AFRAME.components['ss-video']
AFRAME.registerComponent('ss-video', {
	init:function() {
		console.log("init") 
		this.el.addEventListener("loaded",ev=>{
			console.log(ev) 
		})
	}
	
	
})