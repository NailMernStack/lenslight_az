
let proverb = [
  "Damlaya damlaya göl olur.",
  "Ağaç yaşken eğilir.",
  "Akıllı sır saklar, ahmak pişman olur.",
  "Her yiğidin bir yoğurt yiyişi vardır.",
  "Bir elin nesi var, iki elin sesi var.",
  "Yavaş yürüyüp uzak gitmek, hiç yürümekten iyidir.",
  "Taşıma suyla değirmen dönmez.",
  "Göz var nizam var.",
  "Yiğit otuz yaşında belli olur.",
  "El elin eşeğini türkü çağırarak arar."
]
function RandomProverb(){
    let randomNumber = Math.floor(Math.random() * proverb.length) - 1
    alert(`${proverb[randomNumber]}`)
}

let clickCount = 0
function changeColor(){
  clickCount++
  if(clickCount === 1){
   body.setAttribute = ("style", "background-color:'red'"
  }else if(clickCount === 2){
   body.setAttribute = ("style", "background-color:'blue'"
  }
}
