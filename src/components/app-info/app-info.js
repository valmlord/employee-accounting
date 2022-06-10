import './app-info.css';

const AppInfo = ({ increased, employees }) => {
    return (
        <div className="app-info">
            <h1>Accounting for employees in the company "X"</h1>
            <h2>Total number of employees: {employees}</h2>
            <h2>Monthly bonus received: {increased}</h2>
        </div>
    )
}

export default AppInfo;