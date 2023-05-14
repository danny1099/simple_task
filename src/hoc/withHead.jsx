import { Fragment } from 'react'
import { Helmet } from 'react-helmet'

export const withHead = (Page, { title, description }) => {
  const CustomHead = (props) => {
    return (
      <Fragment>
        <Helmet>
          <title>{`${title || 'Home'} | Simple Task `}</title>
          <meta name="description" content={description} />
        </Helmet>

        <Page {...props} />
      </Fragment>
    )
  }
  return CustomHead
}
