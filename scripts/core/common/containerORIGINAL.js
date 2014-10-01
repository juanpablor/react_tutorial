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
			background: 'green'
		}

		return(
			<div className="page">
			    <div className="con_page gridster gridSystem" style={marginWidthHeight}>
			        <div className="garbage">TRASH</div>
			        <div className="previewer"></div>
			        <div tile-type="number" className="tile tile_1x1 _5ab0ee no-data gridable" size_x="1" size_y="1" pos_x="0" pos_y="0" style={displayBlock}>
			            <div className="front">
			                <div className="setting_span hideable" style={displayNone}>
			                    
			                    <span className="title_area"><span className="tile_title">Week</span></span>
			                    
			                </div>
			                <div className="contents"><div><span className="number">number</span><span className="label"> one</span></div></div>
			            </div>
			        </div>
			        <div tile-type="chart" className="tile tile_2x2 _2ec2c5 no-data gridable" size_x="2" size_y="2" pos_x="1" pos_y="0" style={displayBlock}>
			            <div className="front">
			                <div className="setting_span hideable" style={displayNone}>
			                    
			                    <span className="title_area"><span className="tile_title">Campaign Mix</span></span>
			                    
			                </div>
			                <div className="contents c3" style={heightPosition}>
			                        <span>1111111</span>

			                </div>
			            </div>
			        </div>
			        <div tile-type="chart" className="tile tile_2x2 _f4984e no-data gridable" size_x="2" size_y="2" pos_x="3" pos_y="0" style={displayBlock}>
			            <div className="front">
			                <div className="setting_span hideable">
			                    
			                    <span className="title_area"><span className="tile_title">Store Mix</span></span>
			                    
			                </div>
			                <div className="contents c3" style={heightPosition}>
			                    <span>22222222</span>
			                </div>
			            </div>
			        </div>
			        <div tile-type="map" className="tile tile_4x4  no-data gridable" size_x="4" size_y="4" pos_x="5" pos_y="0" style={displayBlock}>
			            <div className="front">
			                <div className="setting_span hideable" style={displayNone}>
			                    
			                    <span className="title_area"><span className="tile_title">Locations</span></span>
			                    
			                </div>
			                <div className="contents leaflet-container leaflet-fade-anim" tabindex="0">
			                    <span>3333333</span>
			                </div>
			            </div>
			        </div>
			        <div tile-type="number" className="tile tile_1x1 _b5a1dd no-data gridable detele1x1" size_x="1" size_y="1" pos_x="0" pos_y="1" style={displayBlock}>
			            <div className="front">
			                <div className="setting_span hideable" style={displayNone}>
			                    
			                    <span className="title_area"><span className="tile_title">L. Week</span></span>
			                    
			                </div>
			                <div className="contents">
			                    <div>
			                        <span className="number">0</span>
			                        <span className="label">Apps</span>
			                    </div>
			                </div>
			            </div>
			        </div>
			        <div tile-type="chart" className="tile tile_5x2 _d57b7e no-data gridable detele4x4" size_x="5" size_y="2" pos_x="0" pos_y="2" style={displayBlock}>
			            <div className="front">
			                <div className="setting_span hideable" style={displayNone}>
			                    
			                    <span className="title_area"><span className="tile_title">Hourly Production</span></span>
			                    
			                </div>
			                <div className="contents c3" style={heightPosition}>
			                    <span>4444444</span>
			                </div>
			            </div>
			        </div>
			    </div>
			</div>
		)
	}
});
module.exports = container;