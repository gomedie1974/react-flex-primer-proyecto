 import './ItemListContainer.css';
 
function ItemListContainer({greetings, greetings1 }) {
    return (
        <div>
            <div className="greetings-text">{greetings}</div>
            <div className="greetings1-text">{greetings1}</div>
        </div>
  
        );
};

export default ItemListContainer;