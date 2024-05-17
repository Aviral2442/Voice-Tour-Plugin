'use client';
import useAppContext from '@/context/AppContext';
import { Anchor, Avatar, Badge, Button, Card, Container, Flex, Group, Image, Table, Text, ThemeIcon } from '@mantine/core';
import React, { useEffect, useState } from 'react'
import classes from './tourData.module.css'
import clsx from 'clsx';
import toast from 'react-hot-toast';
import { Jost, Quicksand } from 'next/font/google';

const font = Quicksand({ subsets: ['latin'], weight: ['300', '400', '500', "600", '700'] });
const fonts = Jost({ subsets: ['latin'], weight: ['100', '400'] });

const tourData = () => {

  const { currentUser } = useAppContext();

  const [tourIdList, settourIdList] = useState([]);


  const fetchTourId = () => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/tour/getbyuser`, {
      headers: {
        'x-auth-token': currentUser.token,
      }
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        settourIdList(data);
      })
      .catch(err => {
        console.log(err);
      })
  }

  useEffect(() => {
    fetchTourId();
  }, [])

  const deleteTour = async (id) => {
    console.log(id);

    const res = await fetch("http://localhost:5000/tour/delete/" + id, {
      method: "DELETE",
    });
    console.log(res.status);
    if (res.status === 200) {
      toast.success('Tour Deleted Successfully', { variant: 'success' });
      fetchTourId();

    }

  }


  const rows = tourIdList.map(row => (
    <Table.Tr key={row._id}>
      <Table.Td>{row.title}</Table.Td>
      <Table.Td>{row.user}</Table.Td>
      <Table.Td>{row._id}</Table.Td>
      <Table.Td>{new Date(row.createdAt).toLocaleString()}</Table.Td>
      <Table.Th><Anchor href={"/user/updateTour/" + row._id} >Edit</Anchor></Table.Th>
      <Table.Th><Button varient='light' color='red' onClick={e => deleteTour(row._id)} >Delete</Button></Table.Th>

    </Table.Tr>
  ))

  return (
    <>
      <Card shadow="sm" padding="lg" radius="md" bg={"black"}>
        <Group mt="md" mb="xs" justify="space-between">
          <Group mt="md" mb="xs">
            <ThemeIcon radius="md" size={80} variant='filled' color={"white"}>
              <Avatar src={'http://localhost:5000/' + currentUser.avatar} alt={currentUser.name} radius="xl" size={70} />
            </ThemeIcon>
            <Flex direction="column" >
              <Text size="xl" className={font.className}>{currentUser.name}</Text>
              <Text size="xl" className={font.className}>{currentUser.email}</Text>
            </Flex>
          </Group>
          <Group >
            <Button variant="filled" mr={"70"} color="blue" onClick={fetchTourId} className={font.className}>
              Refresh
            </Button>
          </Group>
        </Group>
      </Card>

      <Container fluid p={10} className={classes.Container}>

        <Table miw={500} className={clsx(classes.table, font.className)}>
          <Table.Thead
            className={clsx(classes.header, classes.scrolled)}
          >
            <Table.Tr>
              <Table.Th>Title</Table.Th>
              <Table.Th>User</Table.Th>
              <Table.Th>Tour Id</Table.Th>
              <Table.Th>CreateAt</Table.Th>
              <Table.Th>Edit Tour</Table.Th>
              <Table.Th>Delete Tour</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>{rows}</Table.Tbody>
        </Table>
      </Container>
    </>
  )
}

export default tourData