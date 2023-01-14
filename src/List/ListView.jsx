function ListView({elements,funcFilterItems}){
    return(
        <div>
            <input type="text" onChange={ev=>funcFilterItems(ev.target.value)}/>
            <ul>
            {
                elements.map((name,index)=>name && <li key={index}>{name}</li>)
                // [<p>parrafo uno</p>, <p>parrafo dos</p>]
            }
            </ul>
        </div>
    );
}

// function ListView(props){
// props.elements;
// }
export default ListView;