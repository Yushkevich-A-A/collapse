import React, {useState} from 'react';
import './Collapse.css';

function Collapse(props) {
    const [ extend, setExtend ] = useState(false);

    const toggleSection = () => {
        setExtend( prev => !prev );
    }
    
    return (
        <div className='collapse'>
            <div className={`content ${!extend ? '' : 'content-open'}`}>
                {props.children(extend)}
            </div>
            <button onClick={toggleSection}>
                {
                    extend ?  props.expandedLabel : props.collapsedLabel
                }
            </button>
        </div>
    )
}

Collapse.defaultProps = {
    collapsedLabel: 'Развернуть',
    expandedLabel: 'Свернуть',
}

export default Collapse;

