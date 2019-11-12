import React from "react";
import axios from 'axios';
import Header from './header';
import Nav from './nav';
import Content from './content';
import { Container, Row, Col, Alert } from 'reactstrap';
import "./index.css";


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pageReady: false
        }
        this.deletePhotos = this.deletePhotos.bind(this);
    }

    componentDidMount() {
        axios.get(`https://jsonplaceholder.typicode.com/albums/1/photos`)
        .then(res => {
          const photos = res.data;
          this.setState({ photoAlbums: photos });
        })        
        setTimeout(
            function() {
                this.setState({
                    pageReady: true
                })
            }
            .bind(this),
            1000
        );
    }

    deletePhotos() {
        this.setState(
            { 
                photoAlbums: undefined
            }
        );
    }

    render() {
        const pageIsReady = this.state.pageReady;
        const photoStatusChange = this.state.photoStatus;
        return (
            <Container>
                <Row>
                    <Col xs="12">
                        <Header />
                    </Col>
                </Row>
                { photoStatusChange &&
                    <Row>
                        <Alert color="danger">All photos have been removed.</Alert>
                    </Row>
                }
                <Row>
                    <Col xs="12" sm="6">       
                        <Nav />
                    </Col>
                    <Col xs="12" sm="6">  
                        { pageIsReady ? <Content photoAlbums={this.state.photoAlbums} deletePhotos={this.deletePhotos} /> : <Content loading="Content is loading........." />  }
                    </Col>
                </Row>
            </Container>
        )
    }
}
 
export default App;