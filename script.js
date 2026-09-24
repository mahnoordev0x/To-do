let btn=document.querySelector(".button")
btn.addEventListener("click",async()=>{

       const message=document.querySelector(".message").value;
       const res=await fetch("/messages",{
        method:"POST",
        headers: {
            "Content-type":"application/json"
        },
        body: JSON.stringify({
            message:message
        })

    });
    const data=await res.json();
    console.log(data)
})

async function loadMessages() {
    const res = await fetch("/messages");
    const messages = await res.json();

    document.querySelector(".message").value =
        messages.map(item => item.message).join("\n");
}

loadMessages();