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
                 console.log(latitude)
                 console.log(longitude)
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
      function qs8(){
            const ptag = document.getElementById('ptag')
            ptag.innerHTML='Md Fahad Afridi'
      }
      
}
{
      /// ans to qs not 9
      function mysubmit(){
            const name = document.getElementById('name').value
           const email= document.getElementById('email').value
           const password= document.getElementById('password').value
           const cpwd =document.getElementById('cpwd').value
           if(name.length<4){
             alert('name should be 5  characters')
           }else if(password.length<8){
             alert('password more than 8 characters')
           }else if(password!=cpwd){
             alert('password not match')
           }
          
        }
}
{
      // ans to the qs no 10
      function qs10(){
          const p =document.getElementById('qs10')
          p.classList.add('highlight')
          p.style.background='yellow'
      }
}
{
      //ans to the qs no 11
      function qs11(){
           const numb =[1,2,3,4,5];
           for(i=0;i<numb.length;i++){
            const ul =document.getElementById('qs11')
           const li =document.createElement('li');
           li.innerHTML=i
           ul.appendChild(li)
           }
           

           
      }
      
}
{
      ///ans to the qs no 12 
    function qs12(){
            const img =document.getElementById('qs12')
            img.src='./baba.jpg'
      }
}
{
      function qs13(){
           const ptag = document.querySelectorAll('p')
           ptag[2].style.color='red'
           const cls = document.querySelector('.qs13');
           cls.style.color='red'
           const id =  document.querySelector('#qs13');
           id.style.color='red'
      }
}

{
      //ans to the qs no 14
      function exGetRequest(){

            let url = 'https://jsonplaceholder.typicode.com/users'
            let requestOption = {method:'GET'}
            fetch(url ,requestOption)
            .then(res=>res.json())
            .then(result=> console.log(result))
            
      
      
      }
     
}
{
       //ans to the qs no 15
      function expostRequest(){
            let url ='https://crud.teamrabbil.com/api/v1/CreateProduct'
            const data = {
                  Img:'./afridi.jpg',
                  ProductCode:'abc',
                  ProductName:'fahad afridi',
                  Qty:'no qty',
                  TotalPrice:'20',
                  UnitPrice:'50'
            }
            let requesOption= {method:'POST',
                                Headers:{'Accept':'application/json','Content-Type':'application/json'},
                              body:JSON.stringify(data)
                              }

                              fetch(url,requesOption)
                              .then(res=> res.json())
                              .then(result=> console.log(result))
      }
}
     
