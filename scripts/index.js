

function ChangeBackground ()

{
    let select=document.getElementById('select').value;
    if (select=='blue')
    {
        document.body.style.background="blue";
    }
    else if (select=='green')
    {
        document.body.style.background="green";
    }
    else
    {
        document.body.style.background="white"; 
    }

}