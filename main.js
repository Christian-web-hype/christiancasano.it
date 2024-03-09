let watch= document.querySelectorAll('.watch')



function callback(items) {
    items.forEach(item => {
        if (item.isIntersecting) {
            item.target.classList.add("in-page");
        }else{
            item.target.classList.remove("in-page");
        }
    });
}

let observer = new IntersectionObserver(callback,{threshold:0.1});

watch.forEach(element => {
    observer.observe(element);
});


let sendButton = document.querySelector('#mex');

sendButton.addEventListener('click', function () {
  let nameInput = document.querySelector('#name');
  let surnameInput = document.querySelector('#surname');
  let messageInput = document.querySelector('#message');

  let name = nameInput.value;
  let surname = surnameInput.value;
  let message = messageInput.value;
  
  let whatsappMessage = `Piacere sono ${name} ${surname}, ${message}`;

  let encodedMessage = encodeURIComponent(whatsappMessage);

  let whatsappUrl = `https://wa.me/3484910086?text=${encodedMessage}`;

  window.open(whatsappUrl, '_blank');
});