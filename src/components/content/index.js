import React from 'react'
import { Row, Col, Button, Alert } from 'reactstrap'
import './index.scss'

class Content extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      photoStatus: 'populated',
      receivedProps: false
    }
  }

  // componentDidUpdate
  componentDidUpdate(prevProps) {
    // Check that photoAlbums in props was set to undefined and that previous props was an object containing the data
    if (this.props.photoAlbums === undefined && typeof prevProps.photoAlbums === 'object') {
      this.setState(
        {
          photoStatus: 'empty'
        }
      )
    }
  }

  // componentWillReceiveProps
  componentWillReceiveProps(nextProps) {
    if (nextProps) {
      this.setState(
        {
          receivedProps: true
        }
      )
    }
  }

  // Display photo albums data
  renderPhotosAlbums() {
    const {
      photoAlbums,
      deletePhotos
    } = this.props

    const filterItems = photoAlbums.slice(0, 5)
    const filteredResult = filterItems.map((item) => {
      return (
        <Row className="item" key={item.id}>
          <Col xs="9">
            <h2>{item.title}</h2>
            <span>ID: {item.id}</span>
            <a href={item.url}>{item.url}</a>
          </Col>
          <Col xs="3">
            <img src={item.thumbnailUrl} />
          </Col>
        </Row>
      )
    })
    return (
      <div>
        {filteredResult}
        <Row>
          <Col>
            <Button color="primary" onClick={deletePhotos}>Delete Photos</Button>
          </Col>
        </Row>
      </div>
    )
  }

  render() {
    const {
      photoAlbums
    } = this.props

    const isPhotoStatusEmpty = this.state.photoStatus === 'empty'
    const didComponentReceiveProps = this.state.receivedProps
    return (
      <div className="content">
        {didComponentReceiveProps && (
          <Row>
            <Col xs={12}>
              <Alert color="success">
                Component received props
              </Alert>
            </Col>
          </Row>
        )
        }
        {
            photoAlbums && (
              this.renderPhotosAlbums()
            )
          }
        { isPhotoStatusEmpty
        && (
        <Row>
          <Col>
            <Alert color="danger">All photos have been removed.</Alert>
            <Alert color="warning">The status of the photo album has changed on this component. The photoAlbums was populated with data in prevProps but changed to empty in this.props</Alert>
          </Col>
        </Row>
        )
        }
      </div>
    )
  }
}
export default Content
