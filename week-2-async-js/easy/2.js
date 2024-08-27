
function counter(count) {
    setTimeout(() => {
        console.clear()
        console.log(count);
        counter(count + 1)
    }, 1000);
    
}
counter(0)