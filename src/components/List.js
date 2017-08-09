import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import './css/bootstrap.css'

import './App.css'

export default connect(
    state => ({
        memberFetching: state.memberFetching

    }),
    dispatch => ({
        success: data => {
            console.log(data)
            dispatch({
            type: 'members/FETCH__SUCCESS',
            data: data})
        },

    })
)(
    class List extends React.Component {

        componentWillMount() {
          fetch(
                'http://api.pandabot.desmart.com/users'
            ).then(
                response => response.json().then(
                    data => {console.log(data);
                    this.props.success(data)}
                ))

        }



        render() {

            const member = this.props.memberFetching.data
            return (
                <div>
                    <Link to={'/leaderboard/'}>Przejdz do leaderboarda</Link>
                    <br/>
                    <Link to={'/newuser'}>Założ nowego użytkownika</Link>
                    {
                    member
                    === null ?
                        null :
                        member.map(
                            member => <table className="table">
                                <thead>
                                <tr>
                                    <th>Nick</th>
                                    <th>Points</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>{member.nick}</td>
                                    <td>{member.points}</td>
                                </tr>
                                </tbody>
                            </table>

                        )
                }</div>
            )


        }
    }
)