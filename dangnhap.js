function kiemtra(){
    let a=document.getElementById('dangnhap').value;
    let b=document.getElementById('matkhau').value;
    if (a==""){
        alert('Chưa nhập tài khoản kìa má ơi !!!');
        return false;
    }
    if (a!="admin"){
        alert('Tài khoản chưa chính xác !');
        return false;
    }
    if (b==""){
        alert('Mật khẩu đã nhập đâu mà đòi vào !!!');
        return false;
    }
    if (b!="Admin123"){
        alert('Sai mật khẩu rồi (-_-) ');
        return  false;
    }
    return true;
}