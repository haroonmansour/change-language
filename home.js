const translate = {
en:{
home:'Home',
about:'About',
contact:'Contact',
header:'Institute of Art and Music',
news:'News',
blogs:'Blogs',
course:'Course',
arabic:'Arabic',
english:'English',
join:'Join for free'
},
ar:{
  home:'الصفحة الرئيسية',
  about:'عن المعهد',
  contact:'تواصل معنا',
  header:'معهد الفن والموسيقى',
  news:'اخر الاخبار',
  blogs:'المقالات',
  course:'الدورات',
  arabic:'العربية',
  english:'الانجليزية',
  join:'انضم مجانا'
}
};
const languageSelect = document.querySelector("#lang");
  languageSelect.addEventListener("change" , (event)=>{
  setlanguage(event.target.value);

});
const setlanguage=(language)=>{
  const elements=document.querySelectorAll("[data-trans]") ;
  elements.forEach((element) =>{
    const translatekey = element.getAttribute("data-trans");
    element.textContent = translate[language][translatekey];

  });
};


