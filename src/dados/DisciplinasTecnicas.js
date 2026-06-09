import DadosDisciplinaTecnicas from '../dados/dadosDisciplnasTecnicas'
function DisciplinasTecnicas() {
    return(
        <section>
            <header>
                <h1>Disciplinas Tecnicas</h1>
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