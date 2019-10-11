function newElement(){
    var input = document.getElementById('myInput');
    var text = "";
    text = input.value;
    if(text.length == 0){
            alert('You must enter something');
    }
    else {
        var listItem = document.getElementById('list-item');
        var element =  document.createElement('p');
        element.innerText = input.value;
        listItem.appendChild(element);       
        
        document.getElementById("myInput").value = " ";
    }
}

