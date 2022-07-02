import React from 'react'
import './userList.scss'
import {DataGrid} from '@material-ui/data-grid' 
import max from './max.jpg'
import { DeleteOutline } from '@material-ui/icons'
import {UserRows} from '../../dummyData'
import {Link} from 'react-router-dom'
import { useState } from 'react'


const UserList = () => {
  const [data,setData] = useState(UserRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  }

    const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'user', headerName: 'User', width: 200, renderCell: (params)=> {
    return (
      <div className="userListUser">
        <img className="userListImg" src={params.row.avatar} alt=""/>
        {params.row.username}
      </div>
    )
  }},
  { field: 'email', headerName: 'Email', width: 200 },
  {
    field: 'status',
    headerName: 'Status',
    width: 160,
  },
  {
    field: 'transaction',
    headerName: 'Transaction Volume',
    width: 160,
  },
  {
    field: 'action',
    headerName: 'Action',
    with: 150,
    renderCell:(params)=> {
      return(
        <>
          <Link to={"/user/" + params.row.id}>
            <button className="userListEdit">Edit</button>
          </Link>
          
          <DeleteOutline className="userListDelete" onClick={()=>handleDelete(params.row.id)} />
        </>
      );
    }
  },
  
];

    return (
        <div className="userList">
             <DataGrid rows={data} disableSelectionOnClick columns={columns} pageSize={8} checkboxSelection />
        </div>
    )
}

export default UserList;
