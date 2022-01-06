let id=prompt('Nhập ID:','');
 if(id =="Admin"){
     let psw= prompt('Nhập PassWord','');
     if (psw=="TheMaster"){
         alert("Welcome")
     } else if (psw == null){
         alert("Canceled")
     } else {
         alert("WrongPassWord");
     }
 } else if (id==null){
     alert("Canceled")
 } else {
     alert(" I don't know you")
 }

