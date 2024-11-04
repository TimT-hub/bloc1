const $=(id)=>document.getElementById(id);

$("bodytd4") &&
        $("bodytd4").addEventListener('click', ()=>{
        document.body.style.backgroundColor = 'red';
});

$("btAdd") && $("btAdd").addEventListener("click",()=>{
	const li=document.createElement('li');
	li.innerText = $('elementToadd').value;
	$("liste").appendChild(li);	
});
