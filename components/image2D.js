export default {
	props:{
		psrc:String,
		pscale:Number,
	},
	template: `<a-entity :scale="pscale+' '+pscale+' '+pscale" >
		<a-plane width=2 height=1 :material="'shader:flat;src:'+psrc"></a-plane>
	</a-entity>`
}