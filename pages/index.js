import React, { Fragment } from 'react'
import fetch from 'isomorphic-unfetch';
import Head from 'next/head';
import { csv } from 'csvtojson'
import { Generator } from '../components'

const Home = ({ consumables }) => (
  <Fragment>
    <Head>
      <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css" />
    </Head>
    <Generator consumables={ consumables } />
  </Fragment>
)

Home.getInitialProps = async function() {
  const response = await fetch('https://docs.google.com/spreadsheets/d/e/2PACX-1vT9pFP-jKtD9-7xA9o3KWyvrYJudOe_i2rKn1pIrDltkDV6dbzLp4FGXWIgLaBBmRiv_w9F5RFiJKW3/pub?gid=0&single=true&output=csv')
  const data = await response.text()

  const consumables = await csv().fromString(data)

  return { consumables }
}

export default Home
