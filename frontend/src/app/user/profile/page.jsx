'use client';
import useAppContext from '@/context/AppContext';
import { Anchor, Avatar, Badge, Button, Card, Container, Flex, Group, Image, Table, Text, ThemeIcon, Title } from '@mantine/core';
import React, { useEffect, useState } from 'react'
import classes from './profile.module.css'
import clsx from 'clsx';
import toast from 'react-hot-toast';
import { Josefin_Sans, Jost, Quicksand } from 'next/font/google';
import Link from 'next/link';

const font = Quicksand({ subsets: ['latin'], weight: ['300', '400', '500', "600", '700'] });
const fonts = Jost({ subsets: ['latin'], weight: ['100', '400'] });
const fontss = Josefin_Sans({ subsets: ['latin'], weight: ['100', '400'] });

const Profile = () => {


  const { currentUser } = useAppContext();

  //tour data for tour Navigator
  const [tourIdList, settourIdList] = useState([]);

  const fetchTourId = () => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/tour/getbyuser`, {
      headers: {
        'x-auth-token': currentUser !== null ? currentUser.token : '',
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

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/tour/delete/` + id, {
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
      <Table.Td>{row._id}</Table.Td>
      {/* <Table.Td>{row.user}</Table.Td> */}
      <Table.Td>{row.color}</Table.Td>
      <Table.Td>{row.bgcolor}</Table.Td>
      <Table.Td>{row.textcolor}</Table.Td>
      <Table.Td>{row.arrowcolor}</Table.Td>
      <Table.Td>{row.overlaycolor}</Table.Td>
      <Table.Td>{row.width}</Table.Td>
      {/* <Table.Td>{new Date(row.createdAt).toLocaleString()}</Table.Td> */}
      <Table.Th><Anchor href={"/user/updateTour/" + row._id} >Edit</Anchor></Table.Th>
      <Table.Th><Button varient='light' color='red' onClick={e => deleteTour(row._id)} >Trash</Button></Table.Th>

    </Table.Tr>
  ))
  //webpage data for voice search
  const [webpageList, setWebpageList] = useState([]);
  const fetchWebpagesData = () => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/webpage/getbyuser`, {
      headers: {
        'Content-Type': 'application/json',
        'x-auth-token': currentUser !==null ? currentUser.token : ''
      }
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setWebpageList(data);
      })
      .catch(err => {
        console.log(err);
      })
  }

  useEffect(() => {
    fetchWebpagesData();
  }, [])

  const deleteWebpage = async (id) => {
    console.log(id);

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/webpage/delete/` + id, {
      method: "DELETE",
    });
    console.log(res.status);
    if (res.status === 200) {
      toast.success('Webpage Deleted Successfully', { variant: 'success' });
      fetchWebpagesData();
    }
  }

  const rows2 = webpageList.map(row2 => (
    <Table.Tr key={row2._id}>
      <Table.Td>{row2.name}</Table.Td>
      <Table.Td>{row2.address}</Table.Td>
      <Table.Td>{row2.user}</Table.Td>
      <Table.Td>{row2.description}</Table.Td>
      <Table.Td>{new Date(row2.createdAt).toLocaleString()}</Table.Td>
      <Table.Th><Anchor href={"/user/updateWebpage/" + row2._id} >Edit</Anchor></Table.Th>

      <Table.Td><Button varient='light' color='red' onClick={e => deleteWebpage(row2._id)} >Trash</Button></Table.Td>

    </Table.Tr>
  ))


  return (
    <>
      {
        currentUser !== null && (
          <Card shadow="sm" padding="lg" radius="md" bg={"black"}>
            <Group mt="md" mb="xs" justify="space-between">
              <Group mt="md" mb="xs">
                <ThemeIcon radius="md" size={80} variant='filled' color={"white"}>
                  {
                    <Avatar src={`${process.env.NEXT_PUBLIC_API_URL}/` + currentUser.avatar} alt={currentUser.name} radius="xl" size={70} />
                  }
                </ThemeIcon>
                <Flex direction="column" >
                  <Text size="xl" className={font.className}>{currentUser.name}</Text>
                  <Text size="xl" className={font.className}>{currentUser.email}</Text>
                  <Text size="xl" className={font.className}>{ }</Text>
                </Flex>
              </Group>
              <Group >
                <Button variant="filled" mr={"70"} c="black" bg="#fff" component="a" href="/user/profile" className={font.className}>
                  Refresh
                </Button>
              </Group>
            </Group>
          </Card>
        )
      }
      {/* data for Tour Navigator */}
      <Container fluid p={10} className={classes.Container}>
        <Badge radius="sm" size="xl" mb={10} bg={"#24C41C"} c={"black"} className={font.className}>Tours </Badge>
        <Table className={clsx(classes.table, font.className)} horizontalSpacing="xl" highlightOnHover withColumnBorders withTableBorder>
          <Table.Thead
            className={clsx(classes.header, classes.scrolled)}
          >
            <Table.Tr >
              <Table.Th>Title</Table.Th>
              <Table.Th>Tour Id</Table.Th>
              {/* <Table.Th>User Id</Table.Th> */}
              <Table.Th>Color</Table.Th>
              <Table.Th>Background Color</Table.Th>
              <Table.Th>Text Color</Table.Th>
              <Table.Th>Arrow Color</Table.Th>
              <Table.Th>Overlay Color</Table.Th>
              <Table.Th>Width</Table.Th>
              {/* <Table.Th>CreateAt</Table.Th> */}
              <Table.Th>Edit </Table.Th>
              <Table.Th>Delete</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>{rows}</Table.Tbody>
        </Table>
      </Container>
      {/* data for Voice Search */}
      <Container fluid p={10} mt={20} className={classes.Container}>
        <Badge radius="sm" size="xl" mb={10} bg={"#24C41C"} c={"black"} className={font.className}>Webpages </Badge>
        <Table miw={500} className={clsx(classes.table, font.className)} horizontalSpacing="xl" highlightOnHover withColumnBorders withTableBorder>
          <Table.Thead
            className={clsx(classes.header, classes.scrolled)}
          >
            <Table.Tr>
              <Table.Th>Name</Table.Th>
              <Table.Th>Address</Table.Th>
              <Table.Th>User Id</Table.Th>
              <Table.Th>Description</Table.Th>
              <Table.Th>CreateAt</Table.Th>
              <Table.Th>Edit </Table.Th>
              <Table.Th>Delete </Table.Th>

            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>{rows2}</Table.Tbody>
        </Table>
      </Container>
    </>
  )
}

export default Profile