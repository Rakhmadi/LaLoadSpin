# LaLoadSpin
loading spinner cli for deno 

```ts
// set frame
LaLoad.Frame = ['⣾',  '⣽', '⣻', '⢿' ,'⡿','⣟','⣯','⣷'] 

//run spiner 

LaLoad.loading("Loading",100)

setInterval(()=>{
   // stop spiner & clear
   LaLoad.end()
   console.log('Done');
   
},3000)
```
