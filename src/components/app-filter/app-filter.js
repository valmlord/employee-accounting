import './app-filter.css';

const AppFilter = () => {
    return (
        <div className="btn-group">
            <button 
                className="btn btn-light"
                type="buton">
                    All employees
            </button>
            <button 
                className="btn btn-outline-light"
                type="buton">
                    Employees are getting promoted
            </button>
            <button 
                className="btn btn-outline-light"
                type="buton">
                    Salary over $1000
            </button>
            
        </div>
    );
}

export default AppFilter;