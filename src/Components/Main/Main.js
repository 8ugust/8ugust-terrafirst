import Loading from '../Loading/Loading';
import './Main.css';

const Main = () => {

    return(
        <div className='main-wrap'>
            <div className='main-bg'>
                <div className='float-wrap'>
                    <div className='title'>TERRA-FIRST</div>
                    <div className='btn-start'>START</div>
                </div>
            </div>
            <Loading />
        </div>
    );
}

export default Main;