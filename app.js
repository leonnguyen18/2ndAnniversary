// INDEX.HTML
document.getElementById("button").addEventListener("click", function(event){
    var date = document.getElementById("date").value.toLowerCase();
    
    if (date == "") {
        document.getElementById("msg").innerHTML = "Nhập ngày kỉ niệm đi nào!";
        setTimeout(function() {
        document.getElementById("msg").innerHTML = "";
        }, 2000);
    } else if(date == "28 11 2021") {
        document.getElementById("msg").style = "color: green; font-weight: bold;";
        document.getElementById("msg").innerHTML = "Chính xác !!!";
        setTimeout(function() {
            document.getElementById("msg").innerHTML = "";
            window.location.assign("main.html");
        }, 1500);
    } else {
        document.getElementById("msg").innerHTML = "Em sai rồi em không nhớ ngày kỉ niệm ư :) !";
        setTimeout(function() {
            document.getElementById("msg").innerHTML = "";
        }, 2000); 
    }
    
    event.preventDefault();
});



