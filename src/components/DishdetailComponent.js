import React from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

function RenderDish({dish}) {
  if(dish != null) {
    return(
    	<div className="col-12 col-md-5 m-1">
        	<Card>
        	  	<CardImg width="100%" src={dish.image} alt={dish.name} />
        	  	<CardBody>
            		<CardTitle>{dish.name}</CardTitle>
            		<CardText>{dish.description}</CardText>
          		</CardBody>
        	</Card>
        </div>
      );
  }
  else {
    return(
        <div></div>
      );
  }
}

function RenderComments({comments}) {
	if(comments != null) {
		const tempComments = comments.map((comment) => {
			return (
				<div key="comment.id">
					<li>{comment.comment}</li><br />
					<li>-- {comment.author} , {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</li><br />
				</div>
			);
		});
		return (
			<div className="col-12 col-md-5 m-1">
				<h4>Comments</h4>
				<ul className="list-unstyled">
					{tempComments}
				</ul>
			</div>
		);
	}
	else {
		return(<div></div>);
	}
}

const DishDetail = (props) => {
	const selectedDish = props.dish;
	if(selectedDish == null) {
		return (<div></div>);
	}
	const dishInfo = <RenderDish dish={selectedDish} />;
	const dishComments = <RenderComments comments={selectedDish.comments} />;
	return (
		<div className="container">
			<div className="row">
				{dishInfo}
				{dishComments}
			</div>
		</div>
	);
}


export default DishDetail;