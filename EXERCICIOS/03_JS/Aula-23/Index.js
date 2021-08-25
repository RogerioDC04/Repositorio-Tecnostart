const ListaDePessoas = [
        {
            nome: "Tânia Hadassa Carolina Monteiro",
            idade: 39,
            data_nasc: "13-05-1982",
            sexo: "Feminino",
            estado: "RS",
            telefone_fixo: "(54) 2827-1357",
            celular: "(54) 98393-6669"
        },
        {
            nome: "Antonio Gael Rodrigo Pires",
            idade: 43,
            data_nasc: "27-06-1978",
            sexo: "Masculino",
            estado: "SE",
            telefone_fixo: "(79) 3872-4267",
            celular: "(79) 99752-1168"
        },
        {
            nome: "Mário Murilo Bernardes",
            idade: 41,
            data_nasc: "02-01-1980",
            sexo: "Masculino",
            estado: "PB",
            telefone_fixo: "(83) 3648-3860",
            celular: "(83) 99438-4140"
        },
        {
            nome: "Jéssica Maya Carolina Castro",
            idade: 37,
            data_nasc: "23-11-1984",
            sexo: "Feminino",
            estado: "RS",
            telefone_fixo: "(51) 3520-6213",
            celular: "(51) 99905-2574"
        },
        {
            nome: "Levi Martin da Cunha",
            idade: 51,
            data_nasc: "08-11-1970",
            sexo: "Masculino",
            estado: "PA",
            telefone_fixo: "(93) 2881-8795",
            celular: "(93) 99387-8246"
        },
        {
            nome: "Renato Mateus da Rocha",
            idade: 28,
            data_nasc: "05-04-1993",
            sexo: "Masculino",
            estado: "AP",
            telefone_fixo: "(96) 2973-1018",
            celular: "(96) 99580-6925"
        },
        {
            nome: "Esther Elaine Nunes",
            idade: 64,
            data_nasc: "15-05-1957",
            sexo: "Feminino",
            estado: "AP",
            telefone_fixo: "(96) 3718-0280",
            celular: "(96) 98622-3617"
        },
        {
            nome: "Sueli Julia Sara Ferreira",
            idade: 54,
            data_nasc: "25-01-1967",
            sexo: "Feminino",
            estado: "SC",
            telefone_fixo: "(48) 2918-2581",
            celular: "(48) 98719-3195"
        },
        {
            nome: "André Cauã Theo da Cruz",
            idade: 77,
            data_nasc: "10-09-1944",
            sexo: "Masculino",
            estado: "PR",
            telefone_fixo: "(42) 3838-7280",
            celular: "(42) 98775-6271"
        },
        {
            nome: "Danilo Thales Giovanni Baptista",
            idade: 45,
            data_nasc: "09-12-1976",
            sexo: "Masculino",
            estado: "SC",
            telefone_fixo: "(47) 2670-4176",
            celular: "(47) 99849-2199"
        }
]
// EXERCICIO02

// let ListaFeminino = [];
//  for (let i = 0; i < ListaDePessoas.length; i++){
//    let pessoa = ListaDePessoas[i];
//     if(pessoa.sexo === "Feminino"){
//     ListaFeminino.push(pessoa)
//     }
// }
//    console.log(ListaFeminino)

// EXERCICIO01

// ListaPessoas = ListaDePessoas.map((pessoa)=>{
// return {  "nome" : pessoa.nome,
//          "telefone_fixo" : pessoa.telefone_fixo,
//          "celular" : pessoa.celular
//         }
// })
// console.log(ListaPessoas)

// EXERCICIO03

// let ListaMasculina = [];
//    for(let i = 0; i < ListaDePessoas.length; i++){
//        let pessoa = ListaDePessoas[i];
//        if(pessoa.sexo === "Masculino"){
//            ListaMasculina.push(pessoa)
//        }
//    }
// console.log(ListaMasculina)

// EXERCICIO04

// listaNome = ListaDePessoas.map((pessoa)=>{
//     return {
//         "nome" : pessoa.nome,
//     }
// })
// console.log(listaNome)

// EXERCICIO05

// primeiraPessoaDoRs = ListaDePessoas.find(pessoa => pessoa.estado === "RS");
// console.log(primeiraPessoaDoRs)

// EXERCICIO06

// ListaDePessoas.pop();
// console.log(ListaDePessoas)

// EXERCICIO07

// ListaDePessoas.push({
//     pessoa: {
//         nome: "Alana Vera Assis",
//         idade: 68,
//         data_nasc: "01-05-1953",
//         sexo: "Feminino",
//         estado: "PB",
//         telefone_fixo: "(83) 2837-2032",
//         celular: "(83) 99413-4852"
//     }
// })
// console.log(ListaDePessoas)

// EXERCICIO08

// listaDeEstado = ListaDePessoas.filter(pessoa => pessoa.estado === "RS");
// console.log(listaDeEstado)