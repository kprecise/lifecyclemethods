import React from "react";
import { Container, Row, Col } from 'reactstrap';
import "./index.scss";

class Content extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            photosStatus: null
        }
    }    
    componentDidUpdate(prevProps) {
        if(prevProps.photoAlbums !== this.props.photoAlbums) {
            console.log('component updated')
            this.setState({ photosStatus: true });
        }
    }
    render() {
        const { photoAlbums, loading, deletePhotos } = this.props
        const changedPhotoStatus = this.state.photosStatus
        if (photoAlbums) {
            const filterItems = photoAlbums.slice(0, 5)
            return (
                <div className="content">
                    <Container>
                    {
                    filterItems.map(function(item) {
                        return (
                            <div key={item.id}>
                                <Row>
                                    <Col xs="9">
                                        <h2>{item.title}</h2>
                                    </Col>
                                    <Col xs="3">
                                        <img src={item.thumbnailUrl} />
                                    </Col>                            
                                </Row>  
                            </div>
                        )
                    })
                    }   
                        <Row>
                            <Col>
                                <button onClick={deletePhotos}>Delete Photos</button>
                            </Col>
                        </Row>
                    </Container>
                </div>
            )
        } else if (changedPhotoStatus) { 
            return (
                <div>A property on this component has updated</div>
            )
        } 
        else {
            return (
                <div>{loading}</div>
            )
        }
    }
};
export default Content;