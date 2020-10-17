# LaLoadSpin
loading spinner cli for deno 

```ts
<<<<<<< HEAD
import LaLoad from './mod.ts'
=======
// set frame
LaLoad.Frame = ['⣾', '⣽', '⣻', '⢿' ,'⡿','⣟','⣯','⣷'] 
>>>>>>> 9d081c53cf38c158e7e2f5f0c338e7dc7a2d3448

const spinn = new LaLoad()
//frame
spinn.Frame = ["/","-","|","-","/"]
//run spin
spinn.spinn('Lable',100)


<<<<<<< HEAD
// stop in 3sec
setInterval(()=>{
    //end method
    spinn.end()
=======
// stop spiner & clear in 3 sec
setInterval(()=>{
   LaLoad.end()
   console.log('Done');
   
>>>>>>> 9d081c53cf38c158e7e2f5f0c338e7dc7a2d3448
},3000)
```
