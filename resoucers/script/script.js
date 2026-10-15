let users = ["pedro","Ana","Joana","diego","Davi Messias","cristiano"];
let searchUser = prompt ("digite o nome do usúario que deseja buscar:");

if (searchUser ===""){

    console.log("não pode enviar em branco");
}
else{
    let user = users.filter(user =>
        user.toLowerCase().includes(searchUser.toLowerCase().trim())
    );
    if(user === undefined){
        console.log("user not found");
        users.push(searchUser);
        console.log(users)
    }
    else{
        console.log("usuário encontrado:".concat(user));
        let index =user.indexOf(user);
        console.log(index)

        users[index]="novo valor"
        console.log(users);

        users.forEach(user=>{

            console.log(user)
        })
    
        
        

    }


}


