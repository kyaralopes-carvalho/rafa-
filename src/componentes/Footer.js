import { Link } from "react-router-dom";
function Footer() {

    return (
        <footer>
            <div className="menuFooter">
                <ul>
                    <li><Link to = "/sobreCurso">Sobre o Curso</Link></li>
                    <li><Link to = "/disciplinasCurriculares">Disciplinas Curriculares</Link></li>
                    <li><Link to = "/disciplinasTecnicas">Disciplinas Técnicas</Link></li>
                    <li><Link to = "/equipe">Equipe</Link></li>
                </ul>
            </div>
            <div className="credenciais">
                <h1>Desenvolvido por: Rafael Florindo - 2026 </h1>
            </div>
        </footer>
    )
}

export default Footer;