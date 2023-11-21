import Usuario from '../Usuario';
import './style.css'

function ListasUsuarios({usuarios, onEliminar, onActualizar}){
    return(
        <div className='lista-usuario'>
            {
            usuarios.map((usuario, index) => <Usuario key={index} usuario={usuario} onEliminar={onEliminar} onActualizar={onActualizar}/>)
            }
        </div>
    );
}
export default ListasUsuarios;
