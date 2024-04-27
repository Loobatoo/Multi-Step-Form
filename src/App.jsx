import './App.css';

import { AiOutlineUser,AiOutlineSend,AiOutlineCar,AiOutlineHome } from 'react-icons/ai';

import { useState } from 'react';
import { useForm } from './Hooks/useForm';

import Button from './Components/Button';

import FirstStep from './Components/FirstStep';
import SecondStep from './Components/SecondStep';
import ThirdStep from './Components/ThirdStep';
import FourthStep from './Components/FourthStep'

function App() {

  //Informações Pessoais

  const [Name, SetName] = useState("")
  const [CPF, SetCPF] = useState("")
  const [Telefone, SetTelefone] = useState("")
  const [Mail, SetMail] = useState("")
  const [Nascimento, SetNascimento] = useState("")
  const [Altura, SetAltura] = useState("")
  const [Peso, SetPeso] = useState("")

  const HandleName = (e) => {

    SetName(e.target.value);
  }

  const HandleCPF = (e) => {

    SetCPF(e.target.value);
  }

  const HandleTelefone = (e) => {

    SetTelefone(e.target.value);
  }

  const HandleMail = (e) => {

    SetMail(e.target.value);
  }

  const HandleNascimento = (e) => {

    SetNascimento(e.target.value);
  }

  const HandleAltura = (e) => {

    SetAltura(e.target.value);
  }

  const HandlePeso = (e) => {

    SetPeso(e.target.value);
  }

  //Informações Complementares

  const [Rua, SetRua] = useState("")
  const [Numero, SetNumero] = useState("")
  const [Complemento, SetComplemento] = useState("")
  const [Cep, SetCep] = useState("")
  const [Bairro, SetBairro] = useState("")
  const [Estado, SetEstado] = useState("")

  const HandleRua = (e) => {

    SetRua(e.target.value);
  }

  const HandleNumero = (e) => {

    SetNumero(e.target.value);
  }

  const HandleComplemento = (e) => {

    SetComplemento(e.target.value);
  }

  const HandleCep = (e) => {

    SetCep(e.target.value);
  }

  const HandleBairro = (e) => {

    SetBairro(e.target.value);
  }

  const HandleEstado = (e) => {

    SetEstado(e.target.value);
  }


  //Informações do Veiculo

  const [Placa, SetPlaca] = useState("")
  const [Marca, SetMarca] = useState("")
  const [Modelo, SetModelo] = useState("")
  const [Ano, SetAno] = useState("")
  const [Cor, SetCor] = useState("")
  const [Kilometragem, SetKilimetragem] = useState("")

  const HandlePlaca = (e) => {

    SetPlaca(e.target.value);
  }

  const HandleMarca = (e) => {

    SetMarca(e.target.value);
  }

  const HandleModelo = (e) => {

    SetModelo(e.target.value);
  }

  const HandleAno = (e) => {

    SetAno(e.target.value);
  }

  const HandleCor = (e) => {

    SetCor(e.target.value);
  }

  const HandleKilometragem = (e) => {

    SetKilimetragem(e.target.value);
  }

  //Informações de Sistema

  const [Usuario, SetUsuario] = useState("")
  const [Senha, SetSenha] = useState("")

  const HandleUsuario = (e) => {

    SetUsuario(e.target.value);
  }

  const HandleSenha = (e) => {

    SetSenha(e.target.value);
  }

  function Teste() {
    console.log("Informaçoes Pessoais")
    console.log(Name)
    console.log(CPF)
    console.log(Telefone)
    console.log(Mail)
    console.log(Nascimento)
    console.log(Altura)
    console.log(Peso)
  
    console.log("Informaçoes Complementares")
    console.log(Rua)
    console.log(Numero)
    console.log(Complemento)
    console.log(Cep)
    console.log(Bairro)
    console.log(Estado)

    console.log("Informaçoes do Veiculo")
    console.log(Placa)
    console.log(Marca)
    console.log(Modelo)
    console.log(Ano)
    console.log(Cor)
    console.log(Kilometragem)

    console.log("Informaçoes do Sistema")
    console.log(Usuario)
    console.log(Senha)
  }



  const ComponentsForm = [
  <FirstStep Act1={HandleName} Act2={HandleCPF} Act3={HandleTelefone} Act4={HandleMail} Act5={HandleNascimento} Act6={HandleAltura} Act7={HandlePeso} name={Name} CPF={CPF} Telefone={Telefone} mail={Mail} Nascimento={Nascimento} Peso={Peso} Altura={Altura}/>, 
  <SecondStep Act1={HandleRua} Act2={HandleNumero} Act3={HandleComplemento} Act4={HandleCep} Act5={HandleBairro} Act6={HandleEstado} Rua={Rua} Numero={Numero} Complemento={Complemento} Cep={Cep} Bairro={Bairro} Estado={Estado} />, 
  <ThirdStep Act1={HandlePlaca} Act2={HandleMarca} Act3={HandleModelo} Act4={HandleAno} Act5={HandleCor} Act6={HandleKilometragem} Placa={Placa} Marca={Marca} Modelo={Modelo} Ano={Ano} Cor={Cor} Kilometragem={Kilometragem} />,
  <FourthStep Act1={HandleUsuario} Act2={HandleSenha} Placa={Placa} Marca={Marca}/>
  ]
  
  const {ActualStep, ActualComponent, ChangeStep} = useForm(ComponentsForm)

  return (
    <>
      <div className="Header">
        <h1>Trust Seguradora</h1>
        <h2>O melhor serviço de cotação.</h2>
      </div>
      <div className="Container">
        <div className="Form-Container">
          <AiOutlineUser className={ActualStep >= 0 ? "Active" : ""} onClick={() => ChangeStep(0)}/>
          <AiOutlineCar className={ActualStep >= 1 ? "Active" : ""} onClick={() => ChangeStep(1)}/>
          <AiOutlineHome className={ActualStep >= 2 ? "Active" : ""} onClick={() => ChangeStep(2)}/>
          <AiOutlineSend className={ActualStep === 3 ? "Active" : ""} onClick={() => ChangeStep(3)}/>
        </div>
        <div className="Step-Container">
          {ActualComponent}
        </div>
        <div className="Actions">
        {ActualStep == 0  ? (
            <Button id="Voltar" Text="Voltar" action={() => ChangeStep(ActualStep - 1)} disabled={true} />
          ) : (
            <Button id="Voltar" Text="Voltar" action={() => ChangeStep(ActualStep - 1)} />
          )}

          {ActualStep !== 3 ? (
            <Button id="Próximo" Text="Próximo" action={() => ChangeStep(ActualStep + 1)} />
          ) : (
            <Button id="Enviar" Text="Enviar" action={Teste} />
          )}
        </div>
      </div>
    </>
  )
}

export default App