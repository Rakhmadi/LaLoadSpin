import LaLoad from './mod.ts'

const spinn = new LaLoad()
//frame
spinn.Frame = ["/","-","|","-","/"]
//run spin
spinn.spinn('Lable',100)


// stop in 3sec
setInterval(()=>{
    //end method
    spinn.end()
},3000)