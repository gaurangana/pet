class Food{
    constructor(){
        this.foodStock =  1 ;
        this.image = loadImage("images/milk.png")
        

    }

display(){
    var x = 80 ; 
    imageMode(CENTER) ;
    image(this.image,720,220,70,70) ;

    if(this.foodStock = 0 ){
        for(var i =0 ;
             i<this.foodStock;
              i++ ){
                  if(i%10== 0){
                      x= 80 ;
                      y= y+50 ;
                  }
                  this.image(this.image,x,y,50,50)
                  x= x+30
                
              }
    }


}



    getFoodStock(){
     
    }

    updateFoodStock(fed){
        database.ref("/").update({ 
            dog : fed
            })
    }

   
    
}