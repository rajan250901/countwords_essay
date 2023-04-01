let button=document.getElementById('button');
function fun()
{
    let input=document.getElementById('input');
    let display=document.getElementById('display');
    let words = 0;
    if (input.value.trim() !== '') {
      words = input.value.trim().split(/\s+/).length;
    }
    display.innerHTML=`number of words are ${words}`;
}