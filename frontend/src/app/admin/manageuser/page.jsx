'use client';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import classes from './manageuser.module.css';
import { Avatar, Button, Container, Table } from '@mantine/core';
import clsx from 'clsx';
import { Quicksand } from 'next/font/google';
import useAppContext from '@/context/AppContext';

const font = Quicksand({ subsets: ['latin'], weight: ['300', '400', '500', "600", '700'] });


const ManageUser = () => {
  const { currentUser } = useAppContext();

  const [userList, setUserList] = useState([]);


  const fetchUserId = () => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/user/getall`, {
      headers: {
        'x-auth-token': currentUser.token,
      }
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setUserList(data);
      })
      .catch(err => {
        console.log(err);
      })
  }

  useEffect(() => {
    fetchUserId();
  }, [])


  const deleteUser = async (id) => {
    console.log(id);

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/user/delete/` + id, {
      method: "DELETE",
    });
    console.log(res.status);
    if (res.status === 200) {
      toast.success('User Deleted Successfully', { variant: 'success' });
      fetchUserId();

    }
  }
  const rows = userList.map(row => (
    <Table.Tr key={row._id}>
      <Table.Td><Avatar src={`${process.env.NEXT_PUBLIC_API_URL}` + row.avatar} alt="" size="xl" /></Table.Td>
      <Table.Td>{row.name}</Table.Td>
      <Table.Td>{row.email}</Table.Td>
      <Table.Td>{row.password}</Table.Td>
      <Table.Td>{row.phone}</Table.Td>
      <Table.Td>{new Date(row.createdAt).toLocaleString()}</Table.Td>
      {/* <Table.Th><Anchor href={"/user/updateTour/" + row._id} >Edit</Anchor></Table.Th> */}
      <Table.Th><Button varient='light' color='red' onClick={e => deleteUser(row._id)} >Delete</Button></Table.Th>

    </Table.Tr>
  ))

  return (
    <Container  fluid className={classes.Container}>

      <Table  className={clsx(classes.table, font.className)}>
        <Table.Thead
          className={clsx(classes.header, classes.scrolled)}
        >
          <Table.Tr>
            <Table.Th>Avatar</Table.Th>
            <Table.Th>User</Table.Th>
            <Table.Th>Email Id</Table.Th>
            <Table.Th>Password</Table.Th>
            <Table.Th>Phone No.</Table.Th>
            <Table.Th>createdAt</Table.Th>
            <Table.Th>Delete User</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
    </Container>
  )
}

export default ManageUser;