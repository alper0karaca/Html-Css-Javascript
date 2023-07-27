
function updateTime(){

    const tarih = new Date();

    const timeelement = document.getElementById("time");
    const dateelement = document.getElementById("date");

   const hours = String(tarih.getHours()).padStart(2, '0');
   const minutes = String(tarih.getMinutes()).padStart(2,'0');
   const seconds = String(tarih.getSeconds()).padStart(2,'0');

   timeelement.textContent = `${hours}:${minutes}:${seconds}`;

   const months  =  String(tarih.getMonth() +1).padStart(2,"0");

   const days  =  String(tarih.getDay()).padStart(2,"0");
   const years  =  String(tarih.getFullYear());

   dateelement.textContent = `${days}.${months}.${years}`

}

setInterval(updateTime,1000)

updateTime()