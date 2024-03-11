export default {
	menu:{
		back_kind_select:[
			{title:"passthru",value:"pass"},
			{title:"space",value:"space"},
			{title:"360 photo",value:"p360"},
		],
		obj_list:[
			{name:"accessory Clock",id:"clock",
				path:"./components/clock.js"
			},
			{name:"2D image sample",id:"img",
				path:"./components/image2D.js",
				param:{
					src:"/wxr/assets/img/chihiro015.jpg"
				}
			},
			{name:"2D video sample",id:"video",
				path:"./components/video2D.js",
				param:{
					src:"/wxr/assets/mov/syaso_sk1.mp4"
				}
			},
			{name:"3D Model sample",id:"model",
				path:"./components/gltfmodel.js",
				param:{
					src:"./assets/tiger.glb" 
				}
			},
			{name:"Primitive",id:"prim",
				path:"./components/primitive.js",
				ui:[
					{name:"kind",type:"select",value:"cube",options:[
						{id:"cube",name:"cube"},
						{id:"sphere",name:"sphere"},
						{id:"octa",name:"octahedron"},
						{id:"dodeca",name:"dodecahedron"},
						{id:"icosa",name:"icosahedron"},
						{id:"torus",name:"torus"}
					]},
					{name:"size",type:"range",min:1,max:10,value:5},
					{name:"color",type:"text",value:"red"}
				]
			},
		]		
	}
}