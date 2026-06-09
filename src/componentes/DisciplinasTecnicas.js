import DadosDisciplinaTecnicas from '../dados/dadosDisciplinasTecnicas'
function DisciplinasTecnicas() {
    return(
        <section>
            <header>
                <h1>Cursamos o curso Análise Técnica de Desenvolvimento de Sistema, onde aprendemos sobre tecnologia, programação e computação em geral.</h1>
            </header>
            {
                DadosDisciplinaTecnicas.map(
                    (item, index) => (
                        <article key={index}>
                            <img src={item.link_imagem}
                            alt={item.nome}
                            title={item.nome} />
                            {item.nome} - {item.sigla}
                        </article>
                    )
                )
            }
        </section>
    )
}
export default DisciplinasTecnicas