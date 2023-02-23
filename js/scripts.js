// Поточний рік 
let today = new Date(); //створена змінна today, що позначає дату
let yyyy = today.getFullYear(); //створена змінна для відображення в footer поточного року через today
//document.innerHTML = (mdate.getFullYear());
let footer = document.getElementById ("footer");
footer.textContent = ("Copyright by Stas Tresnitskiy "+yyyy);
