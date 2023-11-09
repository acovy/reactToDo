import { Link} from 'react-router-dom';
import "./Homepage.scss";

const Homepage = () => {
    return (
        <div className='body'>
            <div className='title'>
                <h1>О приложении Todo</h1>
            </div>
            <div className='about'>
                <p>Добро пожаловать в <Link to="/main">Todo</Link> - простое приложение для планирования задач, созданное для помощи в организации вашего дня.</p>
                <p>Наше приложение предоставляет интуитивный интерфейс для создания и управления вашими ежедневными задачами.</p>
                <p>С Todo планирование вашего дня становится проще и более организованным.</p>
                <p>"Этот мир принадлежит вам" - наш слоган, напоминающий вам, что ваш день в ваших руках.</p>
            </div>
            <div className='etrance'>
                <h2>Для того чтобы начать пользоваться нажмите на кнопку <Link to="/main">❮❮ START ❯❯</Link></h2>
            </div>
        </div>
    )
}

export default Homepage;

