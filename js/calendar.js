
window.onload = function () {
	var d = new Date();
	var ay_adlari =['Yanvar','Fevral','Mart','Aprel','May','Iyul','Iyun','Avgust','Sentiyabr','Oktyabr','Noyabr','Dekabr'];
	var ay = d.getMonth();
	var il = d.getFullYear();
	var gun = ay_adlari[ay] + '' +  1  + '' + il;
    var tmp = new Date(gun).toDateString();

    var first_day = tmp.substring(0,3);
    var gun_adlari = ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'];
    var day_no = gun_adlari.indexOf(first_day);
    var gunler = new Date(il,ay+1,0).getDate();
    var calendar = get_calendar(day_no,gunler);
}

function get_calendar(day_no,gunler) {
var table =document.createElement('table');
var tr =document.createElement('tr');

for (var i = 0; i <=6; i++) {
	var td = document.createElement('td');
	td.innerHTML ='MTWTFSS'[i];
	tr.appendChild(td);
}
table.appendChild(tr);
tr =document.createElement('tr');
for(i=0;i<=6;i++){
if (i==day_no) {
	break;
}
var td = document.createElement('td');
td.innerHTML ='';
tr.appendChild(td);
}
var count=1;
for (var i = 0; i <=6; i++) {
	var td= document.createElement('td');
	td.innerHTML="count";
	count++;
	tr.appendChild(td);

}
table.appendChild(tr);
for (var r=3; r<=6; r++){
	tr =document.createElement('tr');
	for (i=0; i<=6; i++){
		if (count>gunler) {
			table.appendChild(tr);
			return table;
		}
		var td =document.createElement('td');
		td.innerHTML=count;
		count++;
		tr.appendChild(td);
	}
	table.appendChild(tr);
}
 }
