const faqData = [
  {
    id: 1,
    question: "Who are we?",
    answer:
      "We enable upscaling careers through flexible, interactive and collaborative learning. We believe in building learning communities by bringing together mentors, young minds, and creators.",
  },
  {
    id: 2,
    question: "What do we do?",
    answer:
      "Building learning communities with Our Affordable & Competent Courses",
  },
  {
    id: 3,
    question: "Are the community classes boring?",
    answer: "No, not at all!!!",
  },
];

const accordianBody = document.querySelector('.accordian_body');


// creating element 

const faqs = [];

 showFaq = (element, index)=> {

  if(document.querySelectorAll('.faq p')[index].style.display !=='block'){
  document.querySelectorAll('.faq p')[index].style.display = 'block'
  }
  else{
  document.querySelectorAll('.faq p')[index].style.display = 'none'
  }

}




function createFaq() {

  let element = document.createElement('div'); // main faq element
  let header = document.createElement('div');
  let title = document.createElement('h3');
  let btn = document.createElement('div');
  let ans = document.createElement('p');

  element.setAttribute('class', 'faq');
  header.setAttribute('class', 'faq_header');
  btn.setAttribute('class', 'show_btn');
  ans.setAttribute('class','hidden')
  btn.innerText="+";
  btn.style.display = 'flex'
  btn.style.justifyContent = 'center'
  btn.style.alignItems = 'center'


  let completeEl = {
    element, title, header, btn, ans
  }

  return completeEl;

}


// adding 
faqData.forEach(e => {

  let faqMain = createFaq()

  faqMain.title.innerText = e.question;
  faqMain.ans.innerText = e.answer
  faqMain.element.setAttribute('id', e.id)
  accordianBody.append(faqMain.element)

  faqMain.element.append(faqMain.header)
  faqMain.header.append(faqMain.title)
  faqMain.header.append(faqMain.btn)
  faqMain.element.append(faqMain.ans)


})


let btns = document.querySelectorAll('.show_btn')
// console.log(btns)

btns.forEach((e,i)=>{
  e.addEventListener('click',()=>{
    showFaq(e,i)
  })
})

function btnStatusUpdate() {

}