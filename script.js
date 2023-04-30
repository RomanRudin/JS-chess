function add_white(){
    field.innerHTML  += '<div class="chess_grid_white"></div>'
}
function add_black(){
    field.innerHTML  += '<div class="chess_grid_black"></div>'
}
field = document.getElementById("chess_field")
for (i = 0; i < 64; i++)
{
    if ((Math.floor(i/8) % 2 == 1))
    { 
        if (i % 2 == 0){
            add_white()
        }
        else 
        {
            add_black()
        }
    }
    else
    { 
        if (i % 2 == 1){
            add_white()
        }
        else 
        {
            add_black()
        }
    }
}