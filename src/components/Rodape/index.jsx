import logo  from './img/imgif.png'
export const Rodape = () => {
    return(

        <div className="rodape">


            <div className='nomesalunos'>

                <p className='nomesalunosp'>Aluno: Juliano de Almeida belini</p>
                <p className='nomesalunosp'>Aluno: João Renato Nacanichi Pistori</p>

            </div>

            <div className='trabalho'>
                <p>TRABALHO DE</p>
                <p>FRAMEWORKS</p>
            </div>


            <div><img src={logo} alt="logo do instituto federal do matogrosso do sul" className='imgrodape' /></div>

        </div>
    )
}