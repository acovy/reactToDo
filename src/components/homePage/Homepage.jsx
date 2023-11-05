import { Link} from 'react-router-dom';

const Homepage = () => {
    return (
        <div>
            <header>
                <Link to="/main">Todo</Link>
            </header>
        </div>
    )
}

export default Homepage;