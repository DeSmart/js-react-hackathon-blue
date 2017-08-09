import React from 'react'
import {Link} from 'react-router-dom'



class user extends React.Component {

        componentWillMount() {

        }



        render() {


            return (
                <div>
                    <Link to={'/'}>Wróć na początek</Link>
                    <form action="">
                        <input type="text" name="userId" placeholder="Id użytkownika"/>
                        <input type="text" name="userNick" placeholder="Nick użytkownika"/>
                        <button>Dodaj!</button>
                    </form>

                </div>
            )


        }
    }

    export default user