import {useState} from 'react';
// import  from './items.js';
import frameworkList from './items.js';
import ListView from './ListView.jsx'

// Components of prese((ntation and containers Components
function List(){
    let [items,setItems]=useState(frameworkList);

    function filterItems(searchPattern){
        if(searchPattern===""){
            setItems(frameworkList); 
        }else{
            let newItems=filterItemsBySearchPattern(searchPattern);
            setItems(newItems);
        }

    }

    function filterItemsBySearchPattern(searchPattern){
        let filterItems=frameworkList
        .map(item=>item.toLowerCase().includes(searchPattern.toLowerCase())?item:null);
        return filterItems;
    }

    return(
        <ListView elements={items} funcFilterItems={filterItems}/>
    )
}
export default List;