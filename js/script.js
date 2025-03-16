//global variables
let form
let eid
let eName
let ext 
let email
let dept
//let submit

//this is how it's done without a helper function
//eid = document.getElementById('id')

//das helper function. gets the entire element by searching it's id tag.
const domID = (id) => document.getElementById(id)

//call our helper function
form    = domID('empForm')
eid     = domID('id')
eName   = domID('name')
ext     = domID('ext')
email   = domID('email')
dept    = domID('department')
//submit  = domID('submit')

//log some info

//make an event listener for the form instead of the add button
form.submit.addEventListener('click', function(e) {
    e.preventDefault()
    console.log(eid.name, ': ', eid.value)
    console.log(eName.name, ': ', eName.value)
    console.log(ext.name, ': ', ext.value)
    console.log(email.name, ': ', email.value)
    console.log(dept.name, ': ', dept.value)

})

