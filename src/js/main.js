document.addEventListener("DOMContentLoaded", function(event) { 
    const modal = document.querySelector('.modal');
    const modalBtn = document.querySelectorAll('[data-toggle=modal]');
    const closeBtn = document.querySelector('.modal__close');
    const modalContent = document.querySelector('.modal__dialog');
    const switchModal = () => {
        modal.classList.toggle('modal_visible');
    }
    modalBtn.forEach(element => {
        element.addEventListener('click', switchModal);    
    });

    // modalContent.addEventListener('click', (e) =>{
    //     if(e.target.className != '.modal__dialog'){
    //         alert("target")
    //     }
    // });
    
    closeBtn.addEventListener('click', switchModal);
    
    document.addEventListener('keypress', (e) =>{
        if(e.code === "KeyR"){
            modal.classList.remove('modal_visible');
        }
    });
  });