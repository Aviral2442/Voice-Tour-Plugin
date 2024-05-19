import React, { useEffect, useState } from 'react'
import { rem, Button, ActionIcon, createTheme, MantineProvider, Text, Container, Code } from "@mantine/core"
import { Spotlight, spotlight } from "@mantine/spotlight"
import {
  IconHome,
  IconDashboard,
  IconFileText,
  IconSearch,
  IconMicrophone2,
  IconMicrophone,
  IconInnerShadowTopRightFilled
} from "@tabler/icons-react"
import '@mantine/spotlight/styles.css';



const SearchPlugin = ({ ownerId }) => {

  // const userid = '662a469e92c7753506bfef87';

  const handleMicClick = () => {
    console.log("Mic clicked");
  }

  const [webPagesData, setWebPagesData] = useState([]);

  const fetchtourData = () => {

    fetch('http://localhost:5000/webpage/getbyowner/' + ownerId)
      .then((response) => {
        console.log(response.status);
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setWebPagesData(data.map(webpage => (
          {
            id: webpage._id,
            label: webpage.name,
            description: webpage.description,
            onClick: () => window.location.href = webpage.address,
            leftSection: <IconInnerShadowTopRightFilled style={{ width: rem(20), height: rem(20) }} stroke={1.5} />,
          }
        )));
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    fetchtourData();
  }, []);

  return (
    <div>
        <Button variant='filled' size='xl' color='black' onClick={spotlight.open}> VT Search </Button>

        <Spotlight
          shortcut={['mod + K']}
          actions={webPagesData}
          nothingFound="Nothing found..."
          highlightQuery
          searchProps={{
            leftSection: (
              <IconSearch
                style={{ width: rem(20), height: rem(20) }}
                stroke={1.5}
              />
            ),
            rightSection: (
              <Text size="xs" p={"4"} mr={"10"} bg={"black"} c={"white"} radius="md">Ctrl+K</Text>
            ),
        placeholder: "Search..."
          }}
        />

        {/* <div style={{ height: '100vh' }}>
          Section 1
        </div>
        <div style={{ height: '100vh' }}>
          Section 2
        </div>
        <div style={{ height: '100vh' }}>
          Section 3
        </div>
        <div style={{ height: '100vh' }}>
          Section 4
        </div> */}
    </div>
  )
}

export default SearchPlugin