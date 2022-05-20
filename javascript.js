function addMsg(msg) {

    const nLabel2 = document.createElement("label");
    nLabel2.innerText = "Você diz:";
    //const nMsg2 = document.createTextNode("Você diz:");
    //nLabel2.appendChild(nMsg2);

    const msgAdd2 = document.querySelector(".form-comp2");
    nLabel2.setAttribute("for", "você");
    nLabel2.style.marginBottom = "5px"
    msgAdd2.appendChild(nLabel2);


    const nLabel = document.createElement("label");
    nLabel.innerText = msg;

    //const nMsg = document.createTextNode(msg);
    //nLabel.appendChild(nMsg);

    const msgAdd = document.querySelector(".form-comp2");
    nLabel.setAttribute("for", "mensagem");
    nLabel.style.marginBottom = "18px"
    msgAdd.appendChild(nLabel);

    const chatInterno = document.querySelector(".form-area2");
    chatInterno.scrollTop = chatInterno.scrollHeight;
  }

  const formAdd = document.getElementById("formAdd");
  formAdd.addEventListener("submit", function (event) {
    event.preventDefault();

    const msgInput = document.getElementById("input");
    
    if(msgInput.value){
    addMsg(msgInput.value);
    }

    msgInput.value = "";
    msgInput.focus();
  });