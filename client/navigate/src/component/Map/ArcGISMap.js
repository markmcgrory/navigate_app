
import React, {useEffect} from "react";
import { loadModules } from 'esri-loader'

import styled, {keyframes} from "styled-components";

const MapBorder = styled.div`
border: 15px solid whitesmoke;
border-radius: 10px;
animation: fadeIn 6s;
@keyframes fadeIn {
    0% { opacity: 0; }
    100% { opacity: 1; }
}
`

const ArcGISMap = () => {
    useEffect(() => {

        const mapConfig = {
            basemap: 'streets',
        };

        const glasgowCoords = [-4.2518, 55.8642];

        loadModules(['esri/Map', 'esri/views/MapView', 'esri/widgets/Search'], { css:true })
        .then(([Map, MapView, Search]) => {

            const map = new Map(mapConfig)

            const view = new MapView({
                container: 'mapView',
                map: map,
                center: glasgowCoords,
                zoom: 12
            });

            const search = new Search({ view });
            view.ui.add(search, "top-right");
        })
        .catch(error => {
            console.error('Sorry the map is not available!:', error);
        });
    }, []);

    return ( 
        <MapBorder id="mapView" style={{ width: '100%', height: '80vh'}}></MapBorder>
     );
};
 
export default ArcGISMap;