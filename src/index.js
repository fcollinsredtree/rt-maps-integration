import React from 'react';
import { createRoot } from '@wordpress/element';
import { RenderFrontEndMap } from '../../redtree-maps/src/maps.frontend';
import { RtToggle } from '../components';
import './scss/style.scss';

class RenderFrontEndMapIntegration extends RenderFrontEndMap {
    constructor(props) {
      super(props);
      this.state.formTitle = 'Search our fiber network:';
      this.state.mapLegend = {
        title: 'Map Legend',
        text: 'Click to View Business Parks, Data Centers, On-Net Buildings',

      };
      this.state.formInput = '';
    }

    setLayerItem = (key, value, index) => {
        console.log(value);
        this.setState((prevState) => {
            const newLayers = [...prevState.layers];
            const newLayer = { ...newLayers[index], [key]: value };
            newLayers[index] = newLayer;
            return { layers: newLayers };
        });
    }

    setBaseLayerItem = (key, value, index = 0) => {
        this.setState((prevState) => {
            const newBaseMapLayer = { ...prevState.baseMapLayer };
            newBaseMapLayer[key] = value;
            console.log('new base map layer', newBaseMapLayer);
            return { baseMapLayer: newBaseMapLayer };
        });
    }
    MapLegend  = () => {
        const legendItems = this.state.layers
        .map((layer, i) => (
            ( layer.layer_show_on_legend ) ?
            <li key={`layer-legend-key-${layer.layer_uid}-${i}`}>
            <RtToggle
                key={`layer-legend-key-${layer.layer_uid}-${i}`}
                label={layer.layer_name}
                id={`layer-legend-id-${layer.layer_uid}-${i}`}
                checked={layer.layer_is_visible !== 'undefined' ? layer.layer_is_visible : false}
                onChange={(value) => this.setLayerItem('layer_is_visible', value, i)}
            />
            </li>
            :
            null
        ));

        return (
            <ul className="rt-maps-legend">
            {legendItems}
            </ul>
        );
    }
    // New method
    MapForm = () => {
      return (
        <form className="rt-maps-frontend-form">
            <div className="rt-maps-frontend-form--intro">
                <div className="rt-maps-frontend-form--intro--title">
                    <h2>{this.state.formTitle}</h2>
                </div>
            </div>
            <div className="rt-maps-frontend-form--input">
                <input type="text" 
                value={this.state.formInput}
                onChange={(event) => {
                    this.setState({formInput: event.target.value});
                }}
                className="rt-maps-frontend-form--location" 
                name="rt-maps-frontend-form-location"
                placeholder='Enter a zipcode or address'
                />
                <button type="submit" className="rt-maps-frontend-form--submit" name="rt-maps-frontend-form-submit"></button>
            </div>
            <div className="rt-maps-frontend-form--legend">
                <div className="rt-maps-frontend-form--legend--description">
                    <div className="rt-maps-frontend-form--legend--description--title">{this.state.mapLegend.title}</div>
                    <p>{this.state.mapLegend.text}</p>
                </div>
                <this.MapLegend />
            </div>
        </form>
      );
    };
  
    render() {
      return (
        <>
            <div className="rt-maps-frontend-overlay">
                <this.MapForm />
            </div>
            {super.render()}
        </>
      );
    }
}
  
(() => {
    const domNodes = document.querySelectorAll('.rt-map-frontend');
    console.log('dom nodes', domNodes);
    if (domNodes.length) {
      domNodes.forEach((node) => {
        console.log('node found');
        const root = createRoot(node);
        const mapID = node.dataset.mapId;
        root.render(<RenderFrontEndMapIntegration mapID={mapID} />);
      });
    }
})();