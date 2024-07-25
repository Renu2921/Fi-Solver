const time=document.querySelector("#time");
const btn=document.querySelector("#btn");

setInterval(() => {
    const now=new Date();
    const b={
        hour:"numeric",
        minute:"2-digit",
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    };

    time.innerText= `${now.toLocaleString('en-US',b)}`;
}, 1000);

btn.addEventListener("click",()=>{
    const url="explore.html";
    // window.open(url,"_blank");
    window.location.href=url;
})