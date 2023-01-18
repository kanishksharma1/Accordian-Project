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

for (let i = 0; i <= faqData.length; i++) {
  
  function Data () {
    let div = document.createElement("div")
div.className = "faq"

let header = document.createElement("header")
header.className = "faq_header"

div.appendChild(header)

let h3 = document.createElement("h3")
header.appendChild(h3)

let node = document.createTextNode(faqData[i].question)
h3.appendChild(node)

let section = document.createElement("section")
section.className = "hidden"
div.appendChild(section)

let para = document.createElement("p")
section.appendChild(para)
let paraNode = document.createTextNode(faqData[i].answer)
para.appendChild(paraNode)

let btn =  document.createElement("button")
btn.className = "show_btn"
header.appendChild(btn)

const element = document.querySelector(".accordian_body")
element.appendChild(div)

let x = true

document.querySelectorAll(".faq .faq_header .show_btn")[i].addEventListener("click", function name () {
    if (x) {
        document.querySelectorAll(".accordian_body .faq .hidden ")[i].style.display = "block"
        x = false
    } else {
         document.querySelectorAll(".accordian_body .faq .hidden ")[i].style.display = "none"
        x = true
    }
})

}

Data ();

}


 


