import { cursorPrevLine, clearTerminal, clearScreen } from "https://deno.land/x/ansi/mod.ts";
export default class LaLoad{
   static Frame:any = ['⣾',  '⣽', '⣻', '⢿' ,'⡿','⣟','⣯','⣷']
   static run:any = true
   static loading(label:string = '',time:any = 100){
     console.log('');
      var i = 0; 
      const interval = setInterval(function() {
         if (LaLoad.run == true) {
          console.log(`${cursorPrevLine()}${LaLoad.Frame[i++]} ${label}`);
         }
      if (i == LaLoad.Frame.length) i = 0;  
      }, time); 
      if(LaLoad.run == false) {
         clearInterval(interval)

      }
   }
   static end(){
      console.log(clearScreen());
      LaLoad.run = false
   }
   // static LoadingBar(option:Array<any> =[{"wait":1000,"persentage":true,"text":''}],dot:string = "=",bg:string = "-"){
   //        async function main() {
   //       for (let i = 0; i <= 50; i++) {
   //         const dots = dot.repeat(i)
   //         const left = 50 - i
   //         const empty = bg.repeat(left)
   //         let ShowPersentage_ 
          
   //         if (option[0].persentage == true) {
   //          ShowPersentage_ =` ${i * 2}%`
   //         }else{
   //          ShowPersentage_ = ""
   //         }
   //         console.log(`${cursorPrevLine()}\r ${dots}${empty} ${ShowPersentage_} ${option[0].text} `)
   //         await wait(option[0].wait)
   //       }
   //     }
   //     function wait(ms:number) {
   //       return new Promise(res => setTimeout(res, ms))
   //     }
   //     return main()
       
   // }
}

// LaLoad.LoadingBar([{
//    "wait":200,
//    "persentage":true,
//    "text":"sdsad" 
// }],"█","░")
