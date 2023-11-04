// this is the toggle effect for the dark and light theme of the webpage
const toggleBtn = document.querySelector('.harmburger-menu-bar');
const closeBtn = document.querySelector('.harmburger-menu-bar');
const sideBar = document.querySelector('.nav-link');

//add eventlisteners
toggleBtn.addEventListener('click', function(){
    // if(sideBar.classList.contains('show-sidebar')){
    //     sideBar.classList.remove('show-sidebar')
    // }else {
    //     sideBar.classList.add('show-sidebar')
    // }
    sideBar.classList.toggle('show-sidebar');
})

// the contact us page faq accordon behaviour scripts
// CODE LINE17

// the first faq accordion expand and reduce functons begins from here on
const toggleExpand = document.querySelector('.expand-more');
const toggleExpandLess = document.querySelector('.expand-less');
const faqText = document.querySelector('.faq-expand');


//  the function for the expand-more icon
function myFunc(){
    faqText.style.display = 'block';
    faqText.style.transition ='5s ease-in';
    toggleExpand.style.display='none';
    toggleExpandLess.style.display ='block';
}
// the function for the expand-less icon
function myFuncLess(){
    faqText.style.display = 'none';
    faqText.style.transition = '5s ease-out'
    toggleExpandLess.style.display = 'none';
    toggleExpand.style.display = 'block';
}

toggleExpand.addEventListener('click', function(){
    return myFunc();
})

toggleExpandLess.addEventListener('click', function(){
    return myFuncLess();
})

// the second accordion behaviour 

const toggleTwo = document.querySelector('.expand-more2');
const toggleLesstwo = document.querySelector('.expand-less2');
const faqText2 = document.querySelector('.faq-expand2');

// the function begins from here

function myfuncTwo(){
    faqText2.style.display = 'block';
    toggleLesstwo.style.display = 'block';
    toggleTwo.style.display = 'none';
}

function myfuncLessTwo(){
    faqText2.style.display = 'none';
    toggleLesstwo.style.display = 'none';
    toggleTwo.style.display = 'block';
}

toggleTwo.addEventListener('click', function(){
    return myfuncTwo();
})

toggleLesstwo.addEventListener('click', function(){
    return myfuncLessTwo();
})

// the third accordion functionality

const toggleThree = document.querySelector('.expand-more3');
const toggleLessThree = document.querySelector('.expand-less3');
const faqText3 = document.querySelector('.faq-expand3');

// the function begins from here

function myfuncThree(){
    faqText3.style.display = 'block';
    toggleLessThree.style.display = 'block';
    toggleThree.style.display = 'none';
}

function myfuncLessThree(){
    faqText3.style.display = 'none';
    toggleLessThree.style.display = 'none';
    toggleThree.style.display = 'block';
}

toggleThree.addEventListener('click', function(){
    return myfuncThree();
})

toggleLessThree.addEventListener('click', function(){
    return myfuncLessThree();
})


// the fourth accordion functionality
const toggleTh = document.querySelector('.expand-more4');
const toggleLessTh = document.querySelector('.expand-less4');
const faqTex = document.querySelector('.faq-expand4');

// the function begins from here

function myfuncee(){
    faqTex.style.display = 'block';
    toggleLessTh.style.display = 'block';
    toggleTh.style.display = 'none';
}

function myfuncLessTee(){
    faqTex.style.display = 'none';
    toggleLessTh.style.display = 'none';
    toggleTh.style.display = 'block';
}

toggleTh.addEventListener('click', function(){
    return myfuncee();
})

toggleLessTh.addEventListener('click', function(){
    return myfuncLessTee();
})


// javascript codes for the favorite icon love to turn 
// red when it is clicked.

const favIcon = document.querySelectorAll('');
const favorite1 = dpcument.querySelectorAll('');



// if possible a section above the mobile responsive view of the 
// service page- a sub-image slider showing different areas of the 
// house and how well it  looks like in the inside >>>>
 