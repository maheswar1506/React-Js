import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component {
	constructor(props) {
		super(props);
		this.state = {

		}
	}

	formatDate = (date) => {
		const tempDate = new Date(date);
		const year = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(tempDate);
		const month = new Intl.DateTimeFormat('en', { month: 'short' }).format(tempDate);
		const day = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(tempDate);
		return (`${month} ${day}, ${year}`);
	}

	renderDish = (dish) => {
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

    renderComments = (comments) => {
		if(comments != null) {
			const tempComments = comments.map((comment) => {
				return (
					<div key="comment.id">
						<li>{comment.comment}</li><br />
						<li>-- {comment.author} , {this.formatDate(comment.date)}</li><br />
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

	render() {
		const selectedDish = this.props.dish;
		if(selectedDish == null) {
			return (<div></div>);
		}
		const dishInfo = this.renderDish(selectedDish);
		const dishComments = this.renderComments(selectedDish.comments);
		return (
			<div className="row m-1">
				{dishInfo}
				{dishComments}
			</div>
		);
	}
}

export default DishDetail;