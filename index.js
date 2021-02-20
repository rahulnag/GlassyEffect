let glass_type1=document.getElementsByClassName('glassType1')
let glass_type2=document.getElementsByClassName('glassType2')
let glass_type3=document.getElementsByClassName('glassType3')
let glass_type4=document.getElementsByClassName('glassType4')
let glass_type5=document.getElementsByClassName('glassType5')
let glass_type6=document.getElementsByClassName('glassType6')
let glass_type7=document.getElementsByClassName('glassType7')
let glass_type8=document.getElementsByClassName('glassType8')
let glass_type9=document.getElementsByClassName('glassType9')


glass_type1=[...glass_type1].map(e=>{
e.style.background="rgba(255,255,255,0.4)"
e.style.borderRadius="10px"
e.style.border="1px solid rgba(255,255,255,0.2)"
e.style.backdropFilter="blur(4px)"
})



glass_type2=[...glass_type2].map(e=>{
e.style.background="rgba(255,255,255,0.4)"
e.style.borderRadius='10px'
e.style.border="0.01em solid rgba(255,255,255,0.4)"
e.style.backdropFilter='blur(5px)'
})


glass_type3=[...glass_type3].map(e=>{
e.style.background="rgba(255,255,255,0.4)"
e.style.borderRadius="10px"
e.style.border="1px solid rgba(255,255,255,0.2)"
e.style.backdropFilter="blur(7px)"
})


glass_type4=[...glass_type4].map(e=>{
e.style.boxShadow="0 15px 15px rgba(0,0,0,0.5)"
e.style.borderRadius="10px"
e.style.background="rgba(255,255,255,0.05)"
e.style.backdropFilter="blur(28px)"
e.style.backfaceVisibility="hidden"
e.style.borderTop="1px solid rgba(255,255,255,0.4)"
e.style.borderLeft="1px solid rgba(255,255,255,0.4)"
e.style.borderRight="1px solid rgba(255,255,255,0.2)"
e.style.borderBottom="1px solid rgba(255,255,255,0.2)"
})



glass_type5=[...glass_type5].map(e=>{
e.style.boxShadow="0 15px 15px rgba(0,0,0,0.5)"
e.style.borderRadius="10px"
e.style.background="rgba(255,255,255,0.05)"
e.style.backdropFilter="blur(28px)"
e.style.backfaceVisibility="hidden"
e.style.borderTop="1px solid rgba(255,255,255,0.4)"
e.style.borderLeft="1px solid rgba(255,255,255,0.4)"
e.style.borderRight="1px solid rgba(255,255,255,0.2)"
e.style.borderBottom="1px solid rgba(255,255,255,0.2)"
e.style.opacity="0.5"
})



glass_type6=[...glass_type6].map(e=>{
e.style.background="rgba(255,255,255,0.2)"
e.style.border=".1vmin solid rgba(219,219,219,0.1)"
e.style.borderRadius="10px"
e.style.boxShadow="0.5vmin 1vmin rgba(0,0,0,.4)"
e.style.backdropFilter="blur(31.5px)"
})




glass_type7=[...glass_type7].map(e=>{
e.style.backgroundColor="rgba(0,0,0,0.5)"
e.style.backdropFilter="blur(8px)"
e.style.borderRadius="10px"
})


glass_type8=[...glass_type8].map(e=>{
e.style.background="rgba(255,255,255,0.25)"
e.style.boxShadow="0px 8px 32px 0 rgba(31,38,135,0.37)"
e.style.backdropFilter="blur(4px)"
e.style.borderRadius="10px"
e.style.border="1px solid rgba(255,255,255,0.18)"
})



glass_type9=[...glass_type9].map(e=>{
e.style.boxShadow="0 15px 15px rgba(0,0,0,0.5)"
e.style.borderRadius="10px"
e.style.background="rgba(255,255,255,0.05)"
e.style.backdropFilter="blur(28px)"
e.style.backfaceVisibility="hidden"
e.style.borderTop="1px solid rgba(255,255,255,0.4)"
e.style.borderLeft="1px solid rgba(255,255,255,0.4)"
e.style.borderRight="1px solid rgba(255,255,255,0.2)"
e.style.borderBottom="1px solid rgba(255,255,255,0.2)"
e.style.opacity="12px"
})


//exports.glassy={
//glass_type1,
//glass_type2,
//glass_type3,
//glass_type4,
//glass_type5,
//glass_type6,
//glass_type7,
//glass_type8,
//glass_type9
//}


// export{glass_type1,
// glass_type2,
// glass_type3,
// glass_type4,
// glass_type5,
// glass_type6,
// glass_type7,
// glass_type8,
// glass_type9}