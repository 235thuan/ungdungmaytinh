//function that display value
function giatri(nhap)
{
    document.getElementById("ketqua").value = document.getElementById("ketqua").value + nhap
}

function tinhtoan()
{
    let x = document.getElementById("ketqua").value
    let y = eval(x)
    document.getElementById("ketqua").value = y
}

function xoa()

{
    document.getElementById("ketqua").value = ""
}



