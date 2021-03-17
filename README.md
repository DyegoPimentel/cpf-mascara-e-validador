# Validador de CPF com Mascára

Siga o passo a passo abaixo para que seu formulário realize a verificação do cpf corretamente.

1 - Pegue o codigo do arquivo script.js e insira no seu arquivo de scripts. Lembre-se de chamar o seu arquivo de script, na página em que seu formulário estiver.

2 - No input do cpf coloque:
    <input type='text' name='cpf' id='cpf' alt='Insira aqui o seu CPF' onkeydown='javascript: fMasc( this, mCPF );' maxlength='14' required>

3 - No input de submite coloque: 
    <input type='submit' value='Enviar' onclick='validaCPF()'>
    
    
 
