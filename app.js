var tablinks = document.getElementsByClassName("tab-links");
var tabcontent = document.getElementsByClassName("tab-content");
function opentab(tabname)
{
    for( tab of tablinks){
         tab.classList.remove("active-link");
    }
    for( tabc of tabcontent){
        tabc.classList.remove("active-tab");
   }
   event.currentTarget.classList.add("active-link");
   document.getElementById(tabname).classList.add("active-tab");
}

var side = document.getElementById("sidemenu");
 function openmenu(){
     side.style.right = "0";
 }
 function closemenu(){
     side.style.right = "-200px";
 }

 
  const scriptURL = 'https://script.google.com/macros/s/AKfycbw6hrsJevlLSn19iTfPslReF_EMDECtzIcjF-bkpPz2yLwOgKZs0LaMl5P3Q3qHTXSI/exec'
  const form = document.forms['submit-to-google-sheet']

  const msg = document.getElementById("msg")
  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML = "Message Sent Successfully"
        setTimeout(function(){
            msg.innerHTML = ""
        },5000)
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })
