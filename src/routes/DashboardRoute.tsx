import PageLayout from 'base-components/PageLayout'
import Table from 'base-components/Table'
import React, { FC } from 'react'
import { RouteComponentProps } from 'react-router'

interface Props extends RouteComponentProps<void> {}

const DashboardRoute: FC<Props> = (props) => {
  return (
    <PageLayout title='Dashboard'>
      <Table />
    </PageLayout>
  )
}

export default DashboardRoute
