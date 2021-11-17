import React, { useEffect } from "react";
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';
import { useSelector, useDispatch } from 'react-redux';
import { loadUsers } from "../redux/actions";

const Home = () => {
    const dispatch = useDispatch();
    const { users } = useSelector(state => state.data);
    useEffect(() => {
        dispatch(loadUsers())
    }, [])
    return (
        <div>
            <MDBTable>
                <MDBTableHead color="primary-color" textWhite>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Address</th>
                        <th>Email</th>
                        <th>Contact</th>
                    </tr>
                </MDBTableHead>
                <MDBTableBody>
                    {console.log(users)}
                    {users.map((user) => (
                        <tr>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.address}</td>
                            <td>{user.email}</td>
                            <td>{user.contact}</td>
                        </tr>
                    ))}
                </MDBTableBody>
            </MDBTable>
        </div>
    )
}

export default Home;