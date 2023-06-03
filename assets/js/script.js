const chk = document.querySelector(".chk-box");
const pass = document.querySelector(".pass-inpt");

chk.addEventListener("click", tglclass);
function tglclass(){
    chk.classList.toggle("active");
    if (pass.type == "password"){
        pass.type = "text"
    }
    else{
        pass.type = "password"
    }
};
