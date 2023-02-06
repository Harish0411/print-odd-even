let array = [3060, 4, 63, 74, 81, 43, 54, 12, 25, 37, -86, -30, 224, 1329, 75]

// even
let u=[]

for(i=0; i<array.length; i++){
     if(array[i]%2 == 0){
     u.push(array[i])
	 }
	 }
	 
	 console.log(u);
	 
// odd
let d=-1;
let v=[]
for(i=0; i<array.length; i++){
     if(array[i]%2 !== 0){
     v[++d]=array[i];
	 }
	 }
	 
	console.log(v);