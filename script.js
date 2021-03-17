// A função validaCPF é a responsável por verificar se o cpf é válido ou não. Ela deve ser chamada no botão de envio do formulário em que você deseje realizar a validação.
// Leia o arquivo Readme.md para mais informações.

function validaCPF(strCPF = 0) {
    var strCPF = document.getElementById('cpf').value, // pega cpf do input do form.
    strCPF = strCPF.replace(/\.|-/g,""); // remove pontos e traço do cpf.
    

    var Soma;
    var Resto;
    Soma = 0;
    // Se o CPF informado conter numeros repetidos, retornará falso e não será enviado.
    if (strCPF == "00000000000" || strCPF == "11111111111" || strCPF == "22222222222" || strCPF == "33333333333" || strCPF == "44444444444" || strCPF == "55555555555" || strCPF == "66666666666" || strCPF == "77777777777" || strCPF == "88888888888" || strCPF == "99999999999") {
      alert("O CPF digitado é inválido, favor informar um CPF válido!"); // Aparece um alerta informando que o cpf não é válido.
      document.getElementById('cpf').value=''; // Limpa o campo do cpf no formulário.
      return false;
    }

    // Realiza soma de cada numero do cpf e a verificação do primeiro digito.
    for (i=1; i<=9; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (11 - i);
      Resto = (Soma * 10) % 11;
   
    if ((Resto == 10) || (Resto == 11))  Resto = 0;
    if (Resto != parseInt(strCPF.substring(9, 10)) ) { // Se o resultado do calculo for diferente do primeiro digito o cpf é inválido, e por isso retorna falso.
      alert("O CPF digitado é inválido, favor informar um CPF válido!"); // Aparece um alerta informando que o cpf não é válido.
      document.getElementById('cpf').value=''; // Limpa o campo do cpf no formulário.
      return false;
    }
   
    Soma = 0;

    // Realiza soma de cada numero do cpf e a verificação do Segundo digito.
    for (i = 1; i <= 10; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (12 - i);
    Resto = (Soma * 10) % 11;
   
    if ((Resto == 10) || (Resto == 11))  Resto = 0;
    if (Resto != parseInt(strCPF.substring(10, 11) ) ) { // Se o resultado do calculo for diferente do segundo digito o cpf é inválido, e por isso retorna falso.
      alert("O CPF digitado é inválido, favor informar um CPF válido!"); // Aparece um alerta informando que o cpf não é válido.
      document.getElementById('cpf').value=''; // Limpa o campo do cpf no formulário.
      return false;
    }

    return true; // Caso seja encontrado os dois digitos, e os digitos forem iguais aos informado pelo usuário, então retorna verdadeiro pois é um cpf valido.
}

// As funções fMasc, fMascEx, e mCPF, são responsáveis por criar a mascara no campo do formulário
function fMasc(objeto,mascara) {
  obj=objeto
  masc=mascara
  setTimeout("fMascEx()",1)
}
    
function fMascEx() {
  obj.value=masc(obj.value)
}
    
function mCPF(cpf){
  cpf=cpf.replace(/\D/g,"")
  cpf=cpf.replace(/(\d{3})(\d)/,"$1.$2")
  cpf=cpf.replace(/(\d{3})(\d)/,"$1.$2")
  cpf=cpf.replace(/(\d{3})(\d{1,2})$/,"$1-$2")
  return cpf
}
