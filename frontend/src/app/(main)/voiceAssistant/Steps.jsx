'use client'
import React from 'react'
import classes from './steps.module.css'
import { Container, Stepper, Text, Title } from '@mantine/core'
import clsx from 'clsx'

const Steps = () => {
  return (
    <>
      <Container className={classes.Container} fluid>
        <Title order={1} align="center" mb={10}>How to create voice overs with Animaker voice?</Title>
        <Text align="center" mb={20}>Follow these simple steps to create voice overs with Animaker Voice</Text>


        <div className={clsx(classes.mdStepperHorizontal, classes.orange)}>
          <div className={clsx(classes.mdStep, classes.active)}>
            <div className={classes.mdStepCircle}>
              <span>1</span>
            </div>
            <div className={classes.mdStepTitle}>
              Type in the Text
            </div>
            <div className={classes.mdStepBarLeft} />
            <div className={classes.mdStepBarRight} />
          </div>
          <div className={clsx(classes.mdStep, classes.active)}>
            <div className={classes.mdStepCircle}>
              <span>2</span>
            </div>
            <div className={classes.mdStepTitle}>
              Select Gender
            </div>
            <div className={classes.mdStepOptional}>
              Language and a Voice
            </div>
            <div className={classes.mdStepBarLeft} />
            <div className={classes.mdStepBarRight} />
          </div>
          <div className={clsx(classes.mdStep, classes.active)}>
            <div className={classes.mdStepCircle}>
              <span>3</span>
            </div>
            <div className={classes.mdStepTitle}>
              Add Emphasis Effect
            </div>
            <div className={classes.mdStepBarLeft} />
            <div className={classes.mdStepBarRight} />
          </div>
          <div className={clsx(classes.mdStep, classes.active)}>
            <div className={classes.mdStepCircle}>
              <span>4</span>
            </div>
            <div className={classes.mdStepTitle}>
              Preview and Download
            </div>
            <div className={classes.mdStepBarLeft} />
            <div className={classes.mdStepBarRight} />
          </div>
        </div>

      </Container>
    </>
  )
}

export default Steps