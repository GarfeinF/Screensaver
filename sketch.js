
let parent_1_x=0
let parent_1_y=0
let parent_2_x=0
let parent_2_y=0
let child_x=0
let child_y=0
let temp_x=0
let temp_y=0
let targ_dist=0
let x_incr=0
let y_incr=0
//shape[shape #][triangle #][point #][x or y]
let shape=[]
let maxTriangle=0
let baseRed=0
let baseGreen=0
let baseBlue=0
let value=0



function setup(){
	createCanvas(800, 600)

	rect(0, 0, width, height)

	baseRed=random(0, 255)
	baseGreen=random(0, 255)
	baseBlue=random(0, 255)
	while(baseRed<255 && baseGreen<255 && baseBlue<255){
		baseRed+=1
		baseGreen+=1
		baseBlue+=1
	}
	noStroke()

	parent_1_x=random(0, width)
	parent_1_y=random(0, height)
	let invalid=true
	while(invalid){
		parent_2_x=random(0, width)
		parent_2_y=random(0, height)
		let hyp = sqrt((parent_1_x - parent_2_x)*(parent_1_x - parent_2_x)+(parent_1_y - parent_2_y)*(parent_1_y - parent_2_y))
		if (hyp>=20 && hyp<=100){
			invalid=false
		}
	}

	invalid=true
	while(invalid){
		child_x=random(0, width)
		child_y=random(0, height)
		let leg1=sqrt((child_x - parent_2_x)*(child_x - parent_2_x)+(child_y - parent_2_y)*(child_y - parent_2_y))
		let leg2=sqrt((child_x - parent_1_x)*(child_x - parent_1_x)+(child_y - parent_1_y)*(child_y - parent_1_y))
		if(leg1>=40 && leg1<=100){
			if(leg2>=40 && leg2<=100){
				invalid=false
			}
		}
	}

	temp_y=parent_2_y
	temp_x=parent_2_x
	targ_dist=sqrt((child_x - parent_2_x)*(child_x - parent_2_x)+(child_y - parent_2_y)*(child_y - parent_2_y))
	x_incr=(child_x - parent_2_x) / 60
	y_incr=(child_y - parent_2_y) / 60
	shape[0]=[]
	shape[0][0]=[]
	shape[0][0]["x"]=child_x
	shape[0][0]["y"]=child_y
	shape[0][1]=[]
	shape[0][1]["x"]=parent_1_x
	shape[0][1]["y"]=parent_1_y
	shape[0][2]=[]
	shape[0][2]["x"]=parent_2_x
	shape[0][2]["y"]=parent_2_y

	value=random(-255, 255)

	
}

function draw(){
	


	fill(baseRed+value, baseGreen+value, baseBlue+value)

	let temp_dist=sqrt((temp_x - parent_2_x)*(temp_x - parent_2_x)+(temp_y - parent_2_y)*(temp_y - parent_2_y))

	if(temp_dist<targ_dist){
	 	temp_x+=x_incr
	 	temp_y+=y_incr
	} else  if(maxTriangle>=50){
		baseRed=random(0, 255)
		baseGreen=random(0, 255)
		baseBlue=random(0, 255)
		while(baseRed<255 && baseGreen<255 && baseBlue<255){
			baseRed+=1
			baseGreen+=1
			baseBlue+=1
		}

		parent_1_x=random(0, width)
		parent_1_y=random(0, height)
		let invalid=true
		while(invalid){
			parent_2_x=random(0, width)
			parent_2_y=random(0, height)
			let hyp = sqrt((parent_1_x - parent_2_x)*(parent_1_x - parent_2_x)+(parent_1_y - parent_2_y)*(parent_1_y - parent_2_y))
			if (hyp>=20 && hyp<=100){
				invalid=false
			}
		}

		invalid=true
		while(invalid){
			child_x=random(0, width)
			child_y=random(0, height)
			let leg1=sqrt((child_x - parent_2_x)*(child_x - parent_2_x)+(child_y - parent_2_y)*(child_y - parent_2_y))
			let leg2=sqrt((child_x - parent_1_x)*(child_x - parent_1_x)+(child_y - parent_1_y)*(child_y - parent_1_y))
			if(leg1>=40 && leg1<=100){
				if(leg2>=40 && leg2<=100){
					invalid=false
				}
			}
		}

		temp_y=parent_2_y
		temp_x=parent_2_x
		targ_dist=sqrt((child_x - parent_2_x)*(child_x - parent_2_x)+(child_y - parent_2_y)*(child_y - parent_2_y))
		x_incr=(child_x - parent_2_x) / 60
		y_incr=(child_y - parent_2_y) / 60


		shape[0][0]["x"]=child_x
		shape[0][0]["y"]=child_y
		shape[0][1]["x"]=parent_1_x
		shape[0][1]["y"]=parent_1_y
		shape[0][2]["x"]=parent_2_x
		shape[0][2]["y"]=parent_2_y
		maxTriangle=0
	}else{
		//let parent=random(0, shape.length-1)
		parent_1_x=shape[maxTriangle][0]["x"]
		parent_1_y=shape[maxTriangle][0]["y"]
		parent_2_x=shape[maxTriangle][1]["x"]
		parent_2_y=shape[maxTriangle][1]["y"]
	 	invalid=true
		while(invalid){
			child_x=random(0, width)
			child_y=random(0, height)
			let leg1=sqrt((child_x - parent_2_x)*(child_x - parent_2_x)+(child_y - parent_2_y)*(child_y - parent_2_y))
			let leg2=sqrt((child_x - parent_1_x)*(child_x - parent_1_x)+(child_y - parent_1_y)*(child_y - parent_1_y))
			if(leg1>=40 && leg1<=100){
				if(leg2>=40 && leg2<=100){
					invalid=false
				}
			}
			for (var i = shape.length - 1; i >= 0; i--) {
				
			}
		}

		temp_y=parent_2_y
		temp_x=parent_2_x
		targ_dist=sqrt((child_x - parent_2_x)*(child_x - parent_2_x)+(child_y - parent_2_y)*(child_y - parent_2_y))
		x_incr=(child_x - parent_2_x) / 60
		y_incr=(child_y - parent_2_y) / 60
		maxTriangle+=1
		shape[maxTriangle]=[]
		shape[maxTriangle][0]=[]
		shape[maxTriangle][0]["x"]=child_x
		shape[maxTriangle][0]["y"]=child_y
		shape[maxTriangle][1]=[]
		shape[maxTriangle][1]["x"]=parent_1_x
		shape[maxTriangle][1]["y"]=parent_1_y
		shape[maxTriangle][2]=[]
		shape[maxTriangle][2]["x"]=parent_2_x
		shape[maxTriangle][2]["y"]=parent_2_y

		value=random(-200, 150)
	}

	
	triangle(parent_1_x, parent_1_y, parent_2_x, parent_2_y, temp_x, temp_y)
	print(child_x, temp_x, child_y, temp_y)
	
}