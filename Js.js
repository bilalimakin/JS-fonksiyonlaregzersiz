//Function Bolum the Egzersiz

let counter= 0;

let counterDOM = document.querySelector('#counter')//dökümanin(HTML sayfa'nın) içindeki #counter id'li olan veriyi al
let increaseDOM = document.querySelector('#increase')//dökümanin(HTML sayfa'nın) içindeki #increase id'li olan veriyi al
let decreaseDOM = document.querySelector('#decrease')//dökümanin(HTML sayfa'nın) içindeki #decrease id'li olan veriyi al
let resetDOM = document.querySelector('#reset')//dökümanin(HTML sayfa'nın) içindeki #decrease id'li olan veriyi al


counterDOM.innerHTML =counter // Dökümanın içine counter bilgisini ver. (bunu sağlayan innerHTML)


//değişkenlerimize bir 'click' olayı ekleyelim.(addEventListener bir olay eklememizi sağlar)

increaseDOM.addEventListener("click",clickEvent)//clickEvent bir fonksiyon
decreaseDOM.addEventListener("click",clickEvent)
resetDOM.addEventListener("click",clickEvent)

function clickEvent(){
    console.log(this.id)// Bu id'nin bilsini consola click olunca yazdır

    /**UZUN KOD YÖNTEMİ */

    /*
    if(this.id == "increase"){// Eğer bu id'nin bilgis buna "increase" eşit ise;
        counterDOM.innerHTML = counter +=1 //#counter içindeki veriyi +1 artır
    }else

    if(this.id == "decrease"){// Eğer bu id'nin bilgis buna "decrease" eşit ise;
        counterDOM.innerHTML = counter -=1 //#counter içindeki veriyi -1 azalt
    }else{counterDOM.innerHTML = counter =0}

    */


    /**KISA KOD YÖNTEMİ 
    this.id == "increase" ? counter += 1 : counter -= 1 
    //if'i soru ? işareti ile değiştirdim ,iki koşulu karşılığını : iki nokta ile ayırdım
    counterDOM.innerHTML = counter //ekrana yazdır*/

    /**KEndi kod bloğum */
    this.id == "increase" ? counter += 1 : this.id == "decrease" ? counter -= 1 : counter = 0
    counterDOM.innerHTML = counter //ekrana yazdır :))*/
    
}
let username = prompt("Merhaba,  Lütfen adınızı girermisiniz :")

let welcome = document.querySelector("#username")
welcome.innerHTML =`${username} bey `

function showTime(){

    
    
    //tarih bilgisi için js fonsiyonumuzu çağıralım
    let tarih = new Date();
    
    var gunler = ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"]
    
    //innerHTML ile html sayfamıza dökelim..
    let myClock = document.querySelector("#myClock")
    myClock.innerHTML =`
    ${tarih.getHours()}:${tarih.getMinutes()}:${tarih.getSeconds()} - ${gunler[tarih.getDay()]} 
    `
    }
    //1 saniyede sayfayı yenile
    setInterval(showTime,1000)