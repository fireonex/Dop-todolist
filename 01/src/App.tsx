import React from 'react';
import './App.css';
import {Button} from "./components/Button";
import s from './components/Button.module.css'
import {Crosses} from "./components/Crosses";
import {Modal} from "./components/modal/Modal";


function App() {
    const tasks = [
        { id: 1, title: "HTML&CSS", isDone: true },
        { id: 2, title: "JS", isDone: true },
        { id: 3, title: "ReactJS", isDone: false }
    ]

    return (
        <div>

            {/*<Button title={'red button'} onClick={ () => {} } color={'red'}>red button</Button>*/}
            {/*<Button title={'blue button'} onClick={ () => {} } color={'secondary'}>blue button</Button>*/}
            {/*<Button title={'disabled button'} onClick={ () => {} } disabled>disabled button</Button>*/}
            {/*<Button title={'disabled button'} onClick={ () => {} } >default button</Button>*/}

            {/*<Crosses tasks={tasks}>*/}
            {/*    <Button title={'red button'} onClick={ () => {} } color={'red'}>red button</Button>*/}
            {/*    <Button title={'blue button'} onClick={ () => {} } color={'secondary'}>blue button</Button>*/}
            {/*    <Button title={'disabled button'} onClick={ () => {} } disabled>disabled button</Button>*/}
            {/*    <input/>*/}
            {/*    <input/>*/}
            {/*    <p>text</p>*/}
            {/*    <p>text</p>*/}
            {/*    <p>text</p>*/}
            {/*    <p>text</p>*/}
            {/*    <p>text</p>*/}
            {/*    <p>text</p>*/}
            {/*</Crosses>*/}

            {/*<Crosses tasks={tasks}>*/}
            {/*    <Button title={'disabled button'} onClick={() => {}}>default button</Button>*/}
            {/*    <p>text</p>*/}
            {/*    <p>text</p>*/}
            {/*    <p>text</p>*/}
            {/*    <p>text</p>*/}
            {/*    <p>text</p>*/}
            {/*    <p>text</p>*/}
            {/*    <p>text</p>*/}
            {/*    <p>text</p>*/}
            {/*    <p>text</p>*/}
            {/*    <p>text</p>*/}
            {/*    <p>text</p>*/}
            {/*    <p>text</p>*/}
            {/*</Crosses>*/}

            {/*<Crosses tasks={tasks}>*/}
            {/*    <input/>*/}
            {/*    <input/>*/}
            {/*    <input/>*/}
            {/*    <input/>*/}
            {/*</Crosses>*/}

            {/*<Modal>*/}
            {/*    <input type={'email'} placeholder={'email'}/>*/}
            {/*    <input type={'password'} placeholder={'pass'}/>*/}
            {/*    <button>send</button>*/}
            {/*</Modal>*/}

            {/*<Modal>*/}
            {/*    <span>Confident information</span>*/}
            {/*    <input type={'email'} placeholder={'email'}/>*/}
            {/*    <input type={'password'} placeholder={'pass'}/>*/}
            {/*    <input type={'password'} placeholder={'pass'}/>*/}
            {/*    <input type={'checkbox'} checked={false}/>*/}
            {/*    <span>I agree</span>*/}
            {/*    <button>send</button>*/}
            {/*</Modal>*/}

            {/*<Button title={'green button'} onClick={ () => {} } className={s.styleForGreenButton}>green button</Button>*/}
            {/*<Button title={'green button'} onClick={ () => {} } className={s.styleForGreenButton}>green button</Button>*/}
        </div>
    );
}


export default App;
