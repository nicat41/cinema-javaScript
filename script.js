
//// bizim lazim olan butun buttonlari ana bir divin icerinde  yazdigimiz ucun an divi menimsedirik container deyiskenine
const container = document.querySelector("#container")

let text = document.querySelector("#text")
//// hansi kino ve nece bilet aldigimiz ve qiymedini orgenmek ucun  hansi divin icerisinde yazilacaqsa o divi cagiririq
container.addEventListener("click", (e) => {
  let element = e.target;
if (element.classList.contains("seat")) {
  ///// if in icerinde deyirik ki kilik olunanda goderilen  ikinci deyer ki var e yuxarida onu menimsedmisik element de ve deyirik ki elementdin classlistinde 
  /// contains metodundan istifade ederek hansi class da saet varsa onu bize versin
  element.classList.toggle('selected')
  ///// daha sonra yene eyni qaydada if in icerisdineki class hansinda ki var onun toggle medodundan istifade ederek selected classi elave et hemin class varsada sil deyirik metodan istifade ederek
  let selectedSeats = container.querySelectorAll(".seat.selected").length;
  /////////  burda yuxarida ilk defe aldigimiz buttonlar ki var onlarin  icerisindeki seat clasinin icersindeki selected olan butun class adlarinin 
  ////necesine klik olunubsa onlarin length vasdesi ile uzunlugunu yeni nece eded klik olundugunu aliriq
  let filmBtnSelected = document.querySelector(".film.active");
  ///// filmBtnSelected burda ise hnasi kinoda oldugunu tabiriq 
  let filmName = filmBtnSelected.innerText;
  //// hemin hansi kinoda oldugunu yuxarida tabdiqdan sonra active olan class da olanin icerisindeki textdi gotuturuk ve filmname desikeninde saglayiriq
  let filmPrice = filmBtnSelected.value;
  ///// html de buttonlara elave olunan value deyerin deki deyerleri oduruk filmprice deyerine 
  let totalPrice = parseFloat(filmPrice) * selectedSeats;
  //// burda yuarida ki aldigimiz deyeri burda ilk once strig oldugundan cevirirk number deyerine bize bu deyer filmprice deyerinde icindeki ki deyeri vururuq
  ///// selectedSeats de ki nece eded ki selected ki var ona  

  
  text.innerHTML = ` ${filmName} adlı kinoya ${selectedSeats} blet seçdiniz, toplam mebleğ ${totalPrice} aze`
  //// yuxarida cagirdigimiz divi menimsediyimiz text di yaziriq onun innnerhtml ne deyerleri otururuk ilk filname deyeri hnasi film olacaq onun adini demsil  edir 
  //////// ikinci nece dene   selectedSeats  var onun sayini verir bize ve son olaraq totalprice de de bize aldigimiz bletlerin toplam qiyemtini deyir

}
})