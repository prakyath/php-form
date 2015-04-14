function isEmpty(element)
{
return !/\S/.test(element.value) 
}

function isname(element)
{
	if(isEmpty(element))
	{
		return"name cannot be empty";
	}
	else
	{
		return "";
	}
}






function isrollnumber(element)
{
  if(isEmpty(element))
  { return "rollnumber cant be empty"}
  else if(!/\w\w\d\d\w\d\d\d/.test(element.value) )
  { return "please enter a valid rollnumber";}
  else
  {
  	return "";
  }
 }


function isemail(element)
{
var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
 if(isEmpty(element))
  { return "email cant be empty"}
  else if(!re.test(element.value))
  { return "please enter a valid email";}
  else 
  {
  	return "";
  }
}








function ispassword(element)
{ 
	var password=element.value;
	var has_length = 8 <= password.length && password.length <=30;
 if(isEmpty(element))
  {return "password cannot be empty";}
 else if(!has_length)
  {return "password must contain minimum 8 characters";}
 else 
 {
 	return "";
 } 
}



function validate()
{
var j;
var valid=true;
var elements = document.myform.getElementsByTagName("input");
  for(j=0;j<elements.length;j++)
   {
       var error="";
       var element=elements[j];
       if(element.dataset["format"]=="name")
       	 {
       	 	error=isname(element);
         }
        else if(element.dataset["format"]=="rollnumber")
        {
        	error=isrollnumber(element);
        }   
        else if(element.dataset["format"]=="email")
        {
        	error=isemail(element);
        }
        else if(element.dataset["format"]=="password")
        {
           error=ispassword(element); 
        }
        
        if (error != ""){
         valid=false;
         
         if(document.getElementById(element.name+"-error"))
           {
              document.getElementById(element.name+"-error").innerHTML=error;
           }
        
        }
        
        else
        {
        if(document.getElementById(element.name+"-error")){


        	document.getElementById(element.name+"-error").innerHTML="";
        }


        }

}


if(!valid)
{
	return false;
}
else {
	document.getElementById("myBtn").disabled = false;
 return true;
}


   }







function letsrock() {
document.getElementById("myBtn").disabled = true;
var i;
var len=document.myform.length-1;
for (i=0;i<len;i++)
 {

    document.myform[i].onchange=validate;
 }

};

letsrock();

