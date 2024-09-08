const funcionariosTI = [ 
    "João", "Maria", 
    "Pedro", "Ana", 
    "Carlos", "Juliana", 
    "Lucas", "Camila",  
    "Gabriel", "Larissa", 
    "Rafael", "Fernanda", 
    "Bruno", "Patrícia"];

const funcionariosADM = [
    "Daniel", "Carolina", 
    "Gustavo", "Beatriz", 
    "Felipe", "Gabriela", 
    "Thiago", "Mariana", 
    "Leonardo", "Renata", 
    "Eduardo", "Vanessa", 
    "Marcelo", "Bianca", 
    "Ricardo", "Aline", 
    "André", "Rafaela", 
    "Rodrigo", "Priscila", 
    "Alexandre", "Thaís", 
    "Matheus", "Tatiana", 
    "Vinícius", "Amanda", 
    "Vitor", "Isabela"];

    const funcionariosJuridicos = [ 
    "Henrique", "Bruna", 
    "Fábio", "Luísa", 
    "Diego", "Débora", 
    "Antônio", "Simone"];

    const gerentes = ["Jonny", "Sasha", "Oregon", "Asael", "Danny"];

    
    
    function TI(){
    let listaFuncionariosTI = '<ul style="margin-left: 0px; margin-top: 0;">' + 
    funcionariosTI.map(nome => `<li style="margin-bottom: 5px; margin-left: 0px; list-style-position: inside; text-align: left;">${nome}</li>`).join('') + 
    '</ul>';
    Swal.fire({
        html: listaFuncionariosTI,
        width: '250px',
        imageAlt: "A tall image"
      });
    }

    function ADM(){
        let listaFuncionariosADM = '<ul style="margin-left: 0px; margin-top: 0;">' + 
        funcionariosADM.map(nome => `<li style="margin-bottom: 5px; margin-left: 0px; list-style-position: inside; text-align: left;">${nome}</li>`).join('') + 
        '</ul>';
        Swal.fire({
            html: listaFuncionariosADM,
            width: '250px',
            imageAlt: "A tall image"
          });
        }

        function Juridicos(){
            let listaFuncionariosJD = '<ul style="margin-left: 0px; margin-top: 0;">' + 
            funcionariosJuridicos.map(nome => `<li style="margin-bottom: 5px; margin-left: 0px; list-style-position: inside; text-align: left;">${nome}</li>`).join('') + 
            '</ul>';
            Swal.fire({
                html: listaFuncionariosJD,
                width: '250px',
                imageAlt: "A tall image"
              });
            }

            function Gerentes(){
                let listaFuncionariosGT = '<ul style="margin-left: 0px; margin-top: 0;">' + 
                gerentes.map(nome => `<li style="margin-bottom: 5px; margin-left: 0px; list-style-position: inside; text-align: left;">${nome}</li>`).join('') + 
                '</ul>';
                Swal.fire({
                    html: listaFuncionariosGT,
                    width: '250px',
                    imageAlt: "A tall image"
                  });
                }