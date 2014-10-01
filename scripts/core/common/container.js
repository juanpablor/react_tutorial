/** @jsx React.DOM */

var React = require('React');

var container = React.createClass({
	render: function(){

		var displayNone = {
			display: 'none'
		}

		var displayBlock = {
			display: 'block'
		}

		var heightPosition = {
			maxHeight: '397px',
			position: 'relative'
		}
		var marginWidthHeight = {
			margin: '5px',
			width: '1040px',
			height: '777px',
			background: '#d5dae6'
		}
		var mapSize = {
			height: '100%',
			width: '100%'
		}

		return(
			<div className="page slideFromMenu">
			    <div className="tile5x4 tile">
			    	<div className="tile5x2 tile">
			    		<div className="tile1x2 tile">
					        <div className="tile1x1" style={displayBlock}>
					        	<div>
									<span className="number">1</span>
									<span className="label">Apps</span>
								</div>	
					        </div>
					        <div className="tile1x1" style={displayBlock}>
					        	<div>
									<span className="number">2</span>
									<span className="label">Apps</span>
								</div>
					        </div>
				    	</div>			        
				        <div className="tile2x2 tile">
				        	<div>
								<span className="label">Campaign Mix</span>
								<section className="message"><article className="circles"></article>No Data Found</section>
							</div>
					    </div>    
				    	<div className="tile2x2 tile">
				    		<div>   
								<span className="label">Store Mix</span>
								<section className="message"><article className="circles"></article>No Data Found</section>
							</div>
				        </div>
			        </div>
			        <div className="tile5x2 tile">
			        	<div className="wrapper">
			        		<span className="label">Hourly Production</span>
			        		<section className="message"><article className="circles"></article>No Data Found</section>
			        	</div>
			        </div>
			    </div>
			    <div className="tileMap tile">
			    	<div className="wrapper">
			        	<span className="label"><iframe style={mapSize} src="http://www.mapquest.ca/embed?hk=10-aLr02LXX" marginwidth="0" marginheight="0" frameborder="0" scrolling="no"></iframe></span>
			        </div>
			    </div>	
			</div>
		)
	}
});
module.exports = container;