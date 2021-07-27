//literal obj
var person={a:'',b=function(){}}
//obj constructor
var psn=new Object()
psn.firstName=''
console.log(psn.firstName)
console.log(psn['firstName'])
for(var ps in person){
    console.log(ps)
}
delete person.firstName
person.sex='male'
JSON.stringify
JSON.parse