function convert(a) {
  
    let input = parseInt(a.value,2),
        result = input
    if (isNaN(result)){
        alert("type numbers of 1 or 0")
        return 
    }
    document.getElementById('out').innerHTML = result;

}