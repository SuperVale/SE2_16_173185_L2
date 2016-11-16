/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var item_n = new Array();
var item_q = new Array();

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
    
    
    //document.getElementById("table").innerHTML = "<th>j</th>";
}

function add()
{
    var item_name = document.getElementById("item_name").value;
    var item_quantity = document.getElementById("item_quantity").value;
    var already=find(item_name);
    
    if(already===-1) {item_n.push(item_name); item_q.push(item_quantity);}
    else {item_q[already]=item_quantity;}
    
    render_table();
    
    document.getElementById("item_name").value = "";
    document.getElementById("item_quantity").value = "";
    
    document.getElementById('add_menu').style.display = 'none';
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
    
}
render_table();