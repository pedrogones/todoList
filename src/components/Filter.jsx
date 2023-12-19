/* eslint-disable @typescript-eslint/no-unused-vars */

const Filter = ({ filter, setFilter, setSort }) => {
    return (
        <div className="filter">
            <h2>Filtrar:</h2>
            <div className="filter-option">
                <div className="testa">
                    <div>
                        <p>Status:</p>
                        <select value={filter} onChange={(e)=> setFilter(e.target.value)}>
                            <option value="All">Todos</option>
                            <option value="Completed">Completas</option>
                            <option value="Incompleted"> Incompletas</option>
                        </select>
                    </div>
                    <div>
                        <p>Ordem alfabética:</p>
                        <button onClick={()=>setSort("Ascendente")} >Ascendente</button>
                        <button   onClick={()=>setSort("Descendente")} >Descendente</button>
                     
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Filter
