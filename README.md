# LaLoadSpin
loading spinner cli for deno 

```ts
// set frame
LaLoad.Frame = ['⣾', '⣽', '⣻', '⢿' ,'⡿','⣟','⣯','⣷'] 

//run spiner 

LaLoad.loading("Loading",100)

// stop spiner & clear in 3 sec
setInterval(()=>{
   LaLoad.end()
   console.log('Done');
   
},3000)
```
