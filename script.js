async function getUserData(){
    let data = await fetch("https://randomuser.me/api/")

    .then((receivedData) => {
        return receivedData.json()
    }).then((rec) => {

        const div = document.getElementById("main-cont");

        let fullName = rec.results["0"].name.first + " " + rec.results["0"].name.last;
        let imageUrl = rec.results["0"].picture.large;

        let age = rec.results["0"].dob.age;
        let email = rec.results["0"].email;
        let phone = rec.results["0"].phone;
        
        const imageEle = document.createElement("img");
        imageEle.setAttribute("src", `${imageUrl}`);
        imageEle.setAttribute("alt", "image");
        imageEle.classList.add("image");
        div.appendChild(imageEle);

        const h1 = document.createElement("h1");
        h1.classList.add("name");
        h1.innerText = `${fullName}`;
        div.appendChild(h1);

        const display = document.createElement("h1");
        display.classList.add("add-info");
        div.appendChild(display);



        const btnCont = document.createElement("div");
        btnCont.classList.add("btn-cont");

        const btn1 = document.createElement("button");
        btn1.classList.add("button");
        btn1.innerText = "Age";
        btn1.setAttribute("data-attr", "age");
        btnCont.appendChild(btn1);

        btn1.addEventListener("click", function(){
            display.innerText = "";
            display.innerText = `${age}`;
        })

        const btn2 = document.createElement("button");
        btn2.classList.add("button");
        btn2.innerText = "Email";
        btn2.setAttribute("data-attr", "email");
        btnCont.appendChild(btn2);

        btn2.addEventListener("click", function(){
            display.innerText = "";
            display.innerText = `${email}`;
        })

        const btn3 = document.createElement("button");
        btn3.classList.add("button");
        btn3.innerText = "Phone";
        btn3.setAttribute("data-attr", "phone");
        btnCont.appendChild(btn3);

        btn3.addEventListener("click", function(){
            display.innerText = "";
            display.innerText = `${phone}`;
        })

        const btn4 = document.createElement("button");
        btn4.classList.add("button");
        btn4.innerText = "GET ANOTHER USER";
        btn4.setAttribute("id", "getUser");
        btnCont.appendChild(btn4);

        btn4.addEventListener("click", function(){
            div.innerHTML = "";
            getUserData();
        })


        div.appendChild(btnCont);
        console.log(rec);
    })

    .catch((error) => {
        console.log(error);
    })

    
}



getUserData();