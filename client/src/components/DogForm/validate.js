

export default function validate(input){
    let error={};
    if(!input.name){
    error.name= 'A breed is required...'
    }
    if(!input.heightMAX){
    error.heightMAX= 'A MAX height is required...'
    }
    if(!input.heightMIN){
      error.heightMIN= 'A MIN height is required...'
      }
     if(!input.weightMAX){
    error.weightMAX= 'A weight  is required...'
    }
    if(!input.weightMIN){
      error.weightMIN= 'A weight  is required...'
      }
    if(!input.image){
        error.image= 'A image is required...'
    }
    if(!input.life_spanMAX){
        error.life_spanMAX= 'Please full the camp...'
    }
    if(!input.life_spanMIN){
      error.life_spanMIN= 'Please full the camp...'
  }
    if(!input.temperaments){
      error.temperaments= 'Please Select a temperament...'
    }
    if (!input.image.includes("https://" || "http://") &&
            !input.image.includes(".jpg" || ".jpeg" || ".png")
          ) {
            error.image = "Enter a valid URL (.jpg, .jpeg, .png)";
          }
   
        
    return error;
}