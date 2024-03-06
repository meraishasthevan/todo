let a=[];
    window.onload=()=>{
	let arr=JSON.parse(localStorage.getItem("todo"));
    console.log(arr);
  for(let i=0; i<arr.length; i++){
	addlist(arr[i]);
 }	
 }
  function submit(){
	  
	 let m=document.getElementById('todo');
     console.log(m.value);
	 if(m.value==""){
		alert('Give any data');
	 }else{
	 a.push(m.value);
     addlist(m.value);
     m.value="";	 
  }
  }
  function addlist(n){
	let l=document.getElementById("list");
	
	let p=document.createElement("p" );
	p.innerHTML=n;
	let icon=document.createElement('i');
	icon.setAttribute('class','bi bi-trash3');
	p.appendChild(icon);
    l.appendChild(p);
	localStorage.setItem('todo',JSON.stringify(a));
    icon.addEventListener('click',()=>{
	l.removeChild(p); 
    remove(n);	
  })	
  }
  function remove(b){
	let index=a.indexOf(b);
	if(index>-1){
		
	
    a.splice(index,1);
    	
  }
   console.log(a);
  }