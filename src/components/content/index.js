import React from "react";
import { Container, Row, Col } from 'reactstrap';
import "./index.scss";

const Content = (props) => {
    const { photoAlbums, loading, deletePhotos } = props
    if (photoAlbums) {
        const filterItems = photoAlbums.slice(0, 10)
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
    } else {
        return (
            <div>{loading}</div>
        )
    }
};
export default Content;