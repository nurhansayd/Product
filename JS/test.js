var items=[
    {head: "Manufactured with the best materials" , paragraph: "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office." ,
    back:'url("https://quanmtran.github.io/room-homepage/images/desktop-image-hero-3.jpg")'
    } ,
    
    {head: "We are available all across the globe", paragraph: "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.", back:'url("https://quanmtran.github.io/room-homepage/images/desktop-image-hero-2.jpg")'} ,
    
    {head:"Discover innovative ways to decorate", paragraph:"We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.", back:'url("	https://quanmtran.github.io/room-homepage/images/desktop-image-hero-1.jpg")'}
  ];
  
  
  var count=0;
  
  
  
  function changeL(){
    
   if(count==0)
     {
  document.getElementById("p1").innerHTML=items[0].paragraph;
       document.getElementById("discover").innerHTML=items[0].head;
       document.getElementById("TL").style.background=items[0].back;
       
       count++;
     }
    else if(count==1)
      {
         document.getElementById("p1").innerHTML=items[1].paragraph;
        document.getElementById("discover").innerHTML=items[1].head;
        
        document.getElementById("TL").style.background=items[1].back;
        count++;
      }
    else {
      document.getElementById("p1").innerHTML=items[2].paragraph;
      document.getElementById("discover").innerHTML=items[2].head;
      document.getElementById("TL").style.background=items[2].back;
      count=0;
    }
    
  }
  
  
  
  function changeR(){
    
   if(count==0)
     {
  document.getElementById("p1").innerHTML=items[1].paragraph;
       document.getElementById("discover").innerHTML=items[1].head;
       document.getElementById("TL").style.background=items[1].back;
       
       count++;
     }
    else if(count==1)
      {
         document.getElementById("p1").innerHTML=items[0].paragraph;
        document.getElementById("discover").innerHTML=items[0].head;
        
        document.getElementById("TL").style.background=items[0].back;
        count++;
      }
    else {
      document.getElementById("p1").innerHTML=items[2].paragraph;
      document.getElementById("discover").innerHTML=items[2].head;
      document.getElementById("TL").style.background=items[2].back;
      count=0;
    }
    
  }
  
  
  
  
  