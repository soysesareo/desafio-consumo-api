export default function Buscador (props) {
    return (
      <>
      <h3>Buscador (desde componente)</h3>
      <input
        type="text"
        placeholder="Busca un título..."
        onChange={props.onChange}
        value={props.filtro}
        />
      </>
        );
}