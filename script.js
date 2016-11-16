/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var item_n = new Array();
var item_q = new Array();

var max = 30;

item_n.push("I1", "I2", "I3");
item_q.push(1, 2, 3);

function find(name)
{
    var ret = -1;
    
    for(var i=0; i<item_n.length; i=i+1)
    {
        if(item_n[i]===name) {ret=i;}
    }
    
    return ret;
}

function check_max()
{
    var sum = 0;
    
    document.getElementById("item_max").value = max;
    
    for(var i=0; i<item_q.length; i=i+1)
    {
        sum=sum+item_q[i];
    }
    
    if(sum>max) {document.getElementById('warning').style.display = 'block';}
    else {document.getElementById('warning').style.display = 'none';}
}

function render_table()
{
    
    var html_string=" ";
    
    html_string="<tr> <th> Name </th>";
    
    for(var i=0; i<item_n.length; i=i+1)
    {
        html_string=html_string+" <td> "+item_n[i]+" </td> ";
    }
    
    html_string=html_string + "</tr> <tr> <th> Quantity </th>";
    
    for(var i=0; i<item_q.length; i=i+1)
    {
        html_string=html_string+" <td> "+item_q[i]+" </td> ";
    }
    
    html_string=html_string + " </tr> ";

    document.getElementById("table").innerHTML = html_string;
}

function add()
{
    var item_name = document.getElementById("item_name").value;
    var item_quantity = parseInt(document.getElementById("item_quantity").value);
    var already=find(item_name);
    
    if(already===-1) {item_n.push(item_name); item_q.push(item_quantity);}
    else {item_q[already]=item_quantity;}
    
    render_table();
    
    document.getElementById("item_name").value = "";
    document.getElementById("item_quantity").value = "";
    
    document.getElementById('add_menu').style.display = 'none';
    
    check_max();
}


function hide()
{
    if(document.getElementById('add_menu').style.display === 'none')
    {
        document.getElementById('add_menu').style.display = 'block';
    }
    else if(document.getElementById('add_menu').style.display === 'block')
    {
        document.getElementById('add_menu').style.display = 'none';
    }
    
    check_max();
}

function set_max()
{
    max=document.getElementById("item_max").value;
    check_max();
}


check_max();
render_table();