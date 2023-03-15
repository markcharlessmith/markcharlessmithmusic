import React from 'react'
import './compositions.css'
interface Composition {
  title: string;
  movements: string[];
  instrumentation: string;
  year: string;
}

interface CompositionsProps {
  compositions: Composition[];
}

const Compositions: React.FC<CompositionsProps> = ({ compositions }) => {
  return (
    <div className="Compositions">
      <div className="Compositions-table">
        <table className="compositions__table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Instrumentation</th>
              <th>Year</th>
            </tr>
          </thead>
          <tbody>
            {compositions.map((composition) => (
              <tr>
                <td>{composition.title}<div className='subfield'>
                {composition.movements.map((movement) => (
                 <p>{movement}</p> 
                ))}
                </div>
                </td>                  
                <td>{composition.instrumentation}</td>
                <td>{composition.year}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Compositions;