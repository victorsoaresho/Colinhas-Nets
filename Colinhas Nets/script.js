document.querySelector("#myButton").addEventListener("click", () => {
    let myInput = document.querySelector("#name").value; // Correção aqui

    sessionStorage.setItem("dado", myInput);
});