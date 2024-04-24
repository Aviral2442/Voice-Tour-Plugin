'use client'
import {
    RingProgress,
    Text,
    SimpleGrid,
    Paper,
    Center,
    Group,
    rem,
    Container
} from "@mantine/core"
import { IconArrowUpRight, IconArrowDownRight } from "@tabler/icons-react"

const icons = {
    up: IconArrowUpRight,
    down: IconArrowDownRight
}

const data = [
    {
        label: "Voice Setup",
        stats: "456,578",
        progress: 65,
        color: "teal",
        icon: "up"
    },
    {
        label: "Tour Setup",
        stats: "2,550",
        progress: 72,
        color: "blue",
        icon: "up"
    },
    {
        label: "Visiter's",
        stats: "4,735",
        progress: 52,
        color: "red",
        icon: "up"
    }
]

export function StatsRing() {
    const stats = data.map(stat => {
        const Icon = icons[stat.icon]
        return (

            <Container m={100} withBorder radius="md" p="xs" key={stat.label} >
                <Group>
                    <RingProgress
                        size={80}
                        roundCaps
                        thickness={8}
                        sections={[{ value: stat.progress, color: stat.color }]}
                        label={
                            <Center>
                                <Icon
                                    style={{ width: rem(20), height: rem(20) }}
                                    stroke={1.5}
                                />
                            </Center>
                        }
                    />

                    <div>
                        <Text c="dimmed" size="xs" tt="uppercase" fw={700}>
                            {stat.label}
                        </Text>
                        <Text fw={700} size="xl">
                            {stat.stats}
                        </Text>
                    </div>
                </Group>
            </Container>
        )
    })

    return <SimpleGrid  cols={{ base: 1, sm: 3 }}>{stats}</SimpleGrid>
}

