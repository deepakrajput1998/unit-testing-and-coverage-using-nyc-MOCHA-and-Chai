$(function(){
    let kmbox=$('#km')
  let minbox=$('#min')
  let calcbtn=$('#calcfare')
  let farediv=$('#fare')
calcbtn.click(function() { console.log('hi')
    $.post('/calcfare',{km:kmbox.val(),min:minbox.val()})
},function(data){
  
 farediv.text(data.fare)
})

})