var dog,sadDog,happyDog;
var foodObj , feed, addFood ;
var database ,foodObj ;
var feedTime , lastFed ;


function preload(){
  sadDog=loadImage("Images/Dog.png");
  happyDog=loadImage("Images/happy dog.png");
}

function setup() {
  createCanvas(1000,400);
  
  dog=createSprite(800,200,150,150) ;
  dog.addImage(sadDog) ;
  dog.scale=0.15 ;

  feed= createButton("feed the dog") ;
  feed.position(700,95) ;
  feed.mousePressed(feed) ;

  addFood = createButton("add food") ;
  addFood.position(800,95) ;
  addFood.mousePressed(addFood) ;

 foodObj = new Food() ;
 foodStock = database.ref("food").foodStock.on


}

function draw() {
  background(46,139,87);
  foodObj.display() ;
  // fill(255,255,254) ;
  // if(lastFed >= 12){
   
  //   text("Last Feed: 12 AM", 350, 30) ;
   
  // }

  fedTime=database.ref('FeedTime');
  fedTime.on("value",function(data)
  { lastFed=data.val();
  });
  drawSprites();
}

//function to read food Stock
function addFood(){
  foodS++
  database.ref('/').update({
    food:foodS
  })
}


//function to update food stock and last fed time
function feedDog(){
  dog.addImage(happyDog) ;

  if(foodObj.getFoodStock()<= 0){
foodObj.updateFoodStock(foodObj.getFoodStock()*0 ) ;
  }
  else{
    foodObj.updateFoodStock(foodObj.getFoodStock()-1) ;
  }
}


// fedTime = database.ref('FeedTime') ;
// fedTime.on("value",function(data){
//   lastFed= data.val() ;
// }) ;

//function to add food in stock
