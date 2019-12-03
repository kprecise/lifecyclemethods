import React from 'react'
import axios from 'axios'
import { Container, Row, Col } from 'reactstrap'
import Content from './content'
import Loading from './loading'
import './index.css'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      pageReady: false,
      photoAlbums: []
    }
    this.deletePhotos = this.deletePhotos.bind(this)
  }

  // componentDidMount
  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/albums/1/photos')
      .then((res) => {
        const photos = res.data
        this.setState({ photoAlbums: photos })
      })
    setTimeout(
      () => {
        this.setState({
          pageReady: true
        })
      },
      3000
    )
  }

  deletePhotos() {
    this.setState(
      {
        photoAlbums: undefined
      }
    )
  }

  render() {
    const pageIsReady = this.state.pageReady
    return (
      <Container>
        <h1>Lifecycle Methods</h1>
        <Row>
          <Col xs="12">
            { pageIsReady ? <Content photoAlbums={this.state.photoAlbums} deletePhotos={this.deletePhotos} /> : <Loading message="Content is loading........." /> }
          </Col>
        </Row>
      </Container>
    )
  }
}

export default App
