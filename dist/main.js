const m_btn=document.querySelector("#menue-btn");
const m_content=document.querySelector("#menue-content");

m_btn.addEventListener("click",()=>{
    m_content.classList.toggle('hidden');
})