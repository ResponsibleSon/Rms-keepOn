// Function for Contact Pop-Up and Pop-Out
function PopupandRemoveContact() {
    const contHiddenElem = document.querySelector('.js-contacttype');

    if (contHiddenElem.classList.contains('contactdontshow')) {
        contHiddenElem.classList.remove('contactdontshow');
        contHiddenElem.classList.add('contacttype');
    } else if (contHiddenElem.classList.contains('contacttype')) {
        contHiddenElem.classList.remove('contacttype');
        contHiddenElem.classList.add('contactdontshow');
        
    } 
}

// Function for removing contactPop-up onclick or onscroll
 function OnscrollOnclick() {
    const contHiddenElem = document.querySelector('.js-contacttype');

    if (contHiddenElem.classList.contains('contacttype')) {
        contHiddenElem.classList.remove('contacttype');
        contHiddenElem.classList.add('contactdontshow');    
    }
}
// Function for toggling Suggestion Element

function suggestion() {
    const suggestionElem = document.querySelector('.js-suggestionBox');

    const searchElem = document.querySelector('.js-searchInput');
  
    if (searchElem.value !== '' && suggestionElem.classList.contains('suggestionBox-displayNone')) {
        suggestionElem.classList.remove('suggestionBox-displayNone');
        suggestionElem.classList.add('suggestionBox');
    } else if (searchElem.value === '') {
        suggestionElem.classList.remove('suggestionBox');
        suggestionElem.classList.add('suggestionBox-displayNone');
    }
}
// funciton for removeSuggestion on mouse SearchElem
function OuttaInputElem() {
     const suggestionElem = document.querySelector('.js-suggestionBox');

    const searchElem = document.querySelector('.js-searchInput');

    if (suggestionElem.classList.contains('suggestionBox') && searchElem.value === '') {
        suggestionElem.classList.remove('suggestionBox');
        suggestionElem.classList.add('suggestionBox-displayNone');
    } 
}
// FUnction for Product display
function products() {
    let suggestionElem = document.querySelector('.js-suggestionBox');

    const searchElem = document.querySelector('.js-searchInput');
    const searchValue = searchElem.value.toLowerCase();

    if (searchValue === 'head') {
       suggestionElem.innerHTML = `
       <div>Shoe</div>
       <div>belt</div>
       <div>Tyre</div>
       <div>Towel</div>
       <div>Obey</div>
       <div>Generator</div>
       <div>Sitter</div>
       <div>Dingo</div>
       <div>Gel for hair</div>
       <div>hair-natural synthetic</div>
       <div>Antenna for home</div>
       <div>Starlink</div>
       <div>Car wash. And accesories</div>
       `;
    } else if (searchValue === 'j' || searchValue === 'm' || 't') {
        suggestionElem.innerHTML = `
       <div>jug</div>
       <div>JBL</div>
       <div>speakers</div>
       <div>Chair adjustable</div>
       <div>samsung A30</div>
       <div>handler</div>
       <div>vacumm cleaner</div>
       <div>Saturizer</div>
       <div>Gelato maker and cooker</div>
       <div>315/80R22.5</div>
       <div>Antenna for home</div>
       <div>MTN router</div>
       <div>Gigito</div>
       `;
    } 
}
// Funtion for Send Email
function sendEmail() {
    // Email Input Element
    const emialinputElem = document.querySelector('.js-emailinput');
    // Email input Value
    const inputValue = emialinputElem.value;
    // Email send button
    const emialbuttonElem = document.querySelector('.js-sendEmailbutton');
    // Email button div
    const emialbuttonDivElem = document.querySelector('.js-emialbuttondiv');


    if (inputValue !== '') {
        setTimeout (() => {
         window.location.href =`mailto:responsibleson5522@gmail.com?subject=Website Email&body= ${inputValue}`;
    },750);
    } else {
        setTimeout(() => {
           emialbuttonDivElem.innerHTML = `<p class="errorLM">No message found, please type and send!</p>`;
        },500); 
        setTimeout(() => {
           emialbuttonDivElem.innerHTML = ` <button class="js-sendEmailbutton" onclick="
                sendEmail();
                ">Send Now</button>`;
        },1000); 
    }
    emialinputElem.value = '';
}
//Function Review center 
function reviewAction() {
    // Review InputElem and it's value
    const reviewInputElem = document.querySelector('.js-reviewInput');
    const reviewValue = reviewInputElem.value;
    // Body element 
    const bodyElem = document.querySelector('body');
   bodyElem.innerHTML = `<section class="reviewPersonal">
   <div class="reviewHeading">
     <p>My Review</p>
   </div>

   <div class="review-Info">
     <div class="reviewerImg">
       <img src=""> 
     </div>

     <div class="reviewerName-comment">
       <div class="reviewer-name-time">
         <p class="R-name">Customer_9-lvg87</p>
         <p class="R-time">Now</p>
       </div>

       <div class="reviewer-comment">
         <p>My name is silas chukwuemeka nnoruka. I am student of life, thus I see no need for school, yet tho- cause imma be played and stressed out like fuck😌😒😓😊</p>
       </div>
     </div>
   </div>


   <div class="otherReview-exit">
     <div>
      <p>Reviews from other Shoppers</p>
     </div>

     <div>
      <button>Call</button>
     </div>
    </div>
   
   </section>`

}
