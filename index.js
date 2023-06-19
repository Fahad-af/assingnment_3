// /ans no 1 (a)
{
      const date = new Date()
      function show(total){
            const day = total.getDay()
            console.log(day)
      }
      show(date)
}
{

// /ans no 2 
const num = [1,2,3,4,5]
function sum (arr){
      let sum=0;
      for(i=0;i<arr.length;i++){
      let sqr = arr[i]*arr[i]
      sum=sum+sqr
      }
      console.log(sum)

}
sum(num)


}
{
      ///ans no 3
      const num =6
      function prime(getnumber){
            for(i=2;i<getnumber;i++){
                  if(getnumber%i===0){
                       return false
                  }
                  else{
                       return true
                  }
            }

      }
     const result = prime(num)
     console.log(result)
}
{
     
      function newwindow(para){
           window.open("https://www.example.com", "", "width=800,height=600")
      }
     
}
{
      ///ans to qs no - 5
      const userBrowserName= navigator.appCodeName
      const version = navigator.appVersion
      function navigatorobj(name,ver){
             console.log(name,ver)
      }
      navigatorobj(userBrowserName,version)
}
{
      ///ans to qs no 6 
     
            navigator.geolocation.getCurrentPosition(function(position){
                 let latitude= position.coords.latitude
                  let longitude=position.coords.longitude
                  console.log(latitude, longitude)
            })
      
  } 

{
      //ans to the qs no 7
      function myfunk(){
            alert('this is alert box')
      }
      function mykey(){
            alert('onkeypress event show')
      }
      function bigImg(){
          const img=  document.getElementById('myimg')
          img.src='./baba.jpg'
      }

}
{
      ///ans to qs no 8
}
     
