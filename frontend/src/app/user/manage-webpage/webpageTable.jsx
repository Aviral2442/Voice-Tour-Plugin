'use client'
import React, { useEffect, useState } from 'react'
import cx from "clsx"
// import { useState } from "react"
import { Table, ScrollArea, TextInput, Card } from "@mantine/core"
import classes from "./webpageTable.module.css"
import { IconSearch } from '@tabler/icons-react'
import useAppContext from '@/context/AppContext'
import clsx from 'clsx'

// Search code for search box to search 

// function filterData(data, search) {
//     const query = search.toLowerCase().trim()
//     return data.filter(item =>
//       keys(data[0]).some(key => item[key].toLowerCase().includes(query))
//     )
//   }

const data = [
    {
        name: "Athena Weissnat",
        company: "Little - Rippin",
        email: "Elouise.Prohaska@yahoo.com"
    },
    {
        name: "Deangelo Runolfsson",
        company: "Greenfelder - Krajcik",
        email: "Kadin_Trantow87@yahoo.com"
    },
    {
        name: "Danny Carter",
        company: "Kohler and Sons",
        email: "Marina3@hotmail.com"
    }
]


const WebpageTable = () => {

    const [scrolled, setScrolled] = useState(false);
    const [Search, setSearch] = useState('');

    const { currentUser } = useAppContext();

    const [webpageList, setWebpageList] = useState([]);

    const handleSearchChange = event => {
        const { value } = event.currentTarget
        setSearch(value)
        setSortedData(
            sortData(data, { sortBy, reversed: reverseSortDirection, search: value })
        )
    }

    const fetchWebpagesData = () => {
        fetch(`${process.env.NEXT_PUBLIC_API_URL}/webpage/getbyuser`, {
            headers: {
                'Content-Type': 'application/json',
                'x-auth-token': currentUser.token
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

    const rows = webpageList.map(row => (
        <Table.Tr key={row._id}>
            <Table.Td>{row.name}</Table.Td>
            <Table.Td>{row.address}</Table.Td>
            <Table.Td>{row.description}</Table.Td>
            <Table.Td>{new Date(row.createdAt).toLocaleString()}</Table.Td>
        </Table.Tr>
    ))
    return (
        <ScrollArea
            h={300}
            onScrollPositionChange={({ y }) => setScrolled(y !== 0)}
        >
            <Card shadow='lg' c='white' p={20} className={classes.card}>
                <TextInput
                    placeholder="Search by any field"
                    mb="md"
                    c="white"
                    leftSection={
                        <IconSearch
                            style={{ width: ' rem(16)', height: 'rem(16)' }}
                            stroke={1.5}
                        />
                    }
                    // value={search}
                    onChange={handleSearchChange}
                    className={classes.table}
                />
                <Table miw={500} className={classes.table}>
                    <Table.Thead
                        className={clsx(classes.header, { [classes.scrolled]: scrolled })}
                    >
                        <Table.Tr>
                            <Table.Th>Name</Table.Th>
                            <Table.Th>Address</Table.Th>
                            <Table.Th>Description</Table.Th>
                            <Table.Th>CreateAt</Table.Th>
                        </Table.Tr>
                    </Table.Thead>
                    <Table.Tbody>{rows}</Table.Tbody>
                </Table>
            </Card>
        </ScrollArea>
    )
}

export default WebpageTable