import PropTypes from 'prop-types';

const PropTypesComponent = ({functionApp, stringApp, arrayApp}) => {
    return (
        <div> composant PropTypes + map

        <button onClick={functionApp}>Test de la function en props</button>

        <h2>{stringApp}</h2>

        {arrayApp.map (
            (item) => <h2 key={item.age}>{item.name}</h2>
        )
        }

        </div>

    )
}

// on indique que si aucune valeur n'est transmise 
// pour amont, c'est la valeur 1 qui sera utilisée
PropTypesComponent.defaultProps = {
    stringApp: 'bye', 
  }
  
  // si une props n'est pas requise, il faut préciser sa valeur par défault 
PropTypesComponent.propTypes = {
    functionApp: PropTypes.func, 
    stringApp: PropTypes.string, 
    arrayApp: PropTypes.arrayOf (
        PropTypes.shape({name : PropTypes.string}) 
    )
  }
 
export default PropTypesComponent; 