import "./header.css"
export default function Header (props) {
    return(
            <div class="main-header">
                <div class="menu-header">
                    <img class="menu-logo" src ={props.imagem} />
                    <div class="menu-container">
                        <a class="menu-link" href="/home">Home</a> 
                        <a class="menu-link" href="/produtos">Produtos</a>
                        <a class="menu-link" href="/contatos">Contatos</a>
                    </div>
                </div>
            </div>
                
    )
} 

