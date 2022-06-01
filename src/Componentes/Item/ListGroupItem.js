import React from "react";

function ListGroupItem(props) {
    return(
        <ListGroup.Item action variant="dark">
            {props.text}
        </ListGroup.Item>
    );
}

export {ListGroupItem};