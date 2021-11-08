console.log("hello")

let arr =[
    {
        name : "raju",
        lastseen: "5:00 pm",
        messages : [
            {
                content: "hello",
                user :true
            },
            {
                content: "good morning",
                user : true
            },
            {
                content: "hello",
                user :false
            }
        ]
    },
    {
        name : "ajay",
        lastseen: "4:00 pm",
        messages : [
            {
                content: "hello",
                user :true
            },
            {
                content: "good morning",
                user : true
            }
        ]
    },
    {
        name : "kumba",
        lastseen: "10:00 pm",
        messages : [
            {
                content: "hello",
                user :true
            },
            {
                content: "good morning",
                user : true
            },
            {
                content: "wii we please be available",
                user: false
            }
        ]
    }
]

function getmsg(cont){
    let msg=`
    <div class="leftmsg">${cont}</div>
    `
    return msg;
}

function setmsg(cont){
    let msg = `
    <div class="rightmsg">${cont}</div>
    `
    return msg;
}

function getperson(i){
    let person =`
    <div class="person1 shadow" id="person${i}">
    <div class="personphoto"><img src="https://tse2.mm.bing.net/th?id=OIP.s12qRtZHtW_HT8rlo8oiHwHaHa&pid=Api&P=0&w=300&h=45" /></div>
    <div class="personname">
        <div class="name">${this.name}</div>
        <div style="font-size:15px">${this.messages[this.messages.length-1].content}</div>
    </div>
    <div style="color:green">${this.lastseen}</div>
    </div> 
    `
    return person;
}

let content = ``

arr.forEach((ele,i) =>{
    let mycopy = getperson.bind(ele)
    content += mycopy(i)
})

document.getElementById("personslist").innerHTML = content;

arr.forEach((ele,i) =>{
    document.getElementById(`person${i}`).addEventListener("click",() =>{
        console.log(i)
        document.getElementById('personname').innerText = ele.name
        let innercontent=``
        ele.messages.forEach((m)=>{
            if(m.user===true){
                innercontent += getmsg(m.content); 
            }
            else{
                innercontent += setmsg(m.content);
            }
    })
        document.getElementById("main").innerHTML=innercontent;
    })
})