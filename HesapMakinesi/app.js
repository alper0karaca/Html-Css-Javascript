// en başta bir boş değerimizi oluşturuyoruz 
var inputValue = "";

// deger parametreli fonksiyon oluşturup bu parametreyle gelen değeri 
// yukardaki boş değişkenimize atıyoruz. Ardından bu değişkeni inputta gösteriyoruz
function appendValue(deger){

    inputValue += deger
    document.getElementById("degergosterge").value = inputValue;
}

// Sıfırlamada kullanacağımız C harfi için inputu ve yukarıdaki değeri sıfırlıyoruz
function clearValue(){

    inputValue = "";
    document.getElementById("degergosterge").value = inputValue;
}


// İşlemlerin yapılması için try içinde eval fonksiyonunu kullandım bunu değişkene attım 
// ve bu sonucu sonra inputa yazdırdım
// Hatalı durumda ise input elementini boşalttık ve error yazdırdık
function operation(){

    try {
        inputValue = eval(inputValue);
        document.getElementById("degergosterge").value = inputValue;
    } catch (error) {
        inputValue="";
        document.getElementById("degergosterge").value= "Error" ;
    }
    

}