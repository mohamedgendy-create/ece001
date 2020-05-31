var div2=document.getElementById('div2')
    div1=document.getElementById('div1')
    butt=document.getElementsByTagName('div')
    but=document.getElementsByClassName('butt');



but[0].onclick=function()
{
    div2.textContent='this is the first button '
} 
but[1].onclick=function()
{
    div2.textContent='this is the second button '
}       
but[2].onclick=function()
{
    div2.textContent='this is the third button '
}
but[3].onclick=function()
{
    div2.textContent='this is the fourth button '
}    
but[4].onclick=function()
{
    div2.textContent='this is the fifth button '
}    
document.getElementById('readmore').onclick=function()
{
    document.getElementById('dive').classList.add('read');

}
document.getElementById("less").onclick=function()
{
    document.getElementById('dive').classList.remove('read');
}

document.getElementById('sroll').onclick=function()
{
   window.location.href='#someid';
}     

