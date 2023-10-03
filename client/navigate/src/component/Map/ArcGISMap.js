
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

        loadModules(['esri/Map', 'esri/views/MapView', 'esri/widgets/Search', 'esri/Graphic', 'esri/layers/GraphicsLayer'], { css:true })
        .then(([Map, MapView, Search, Graphic, GraphicsLayer]) => {

            const map = new Map(mapConfig)

            const view = new MapView({
                container: 'mapView',
                map: map,
                center: glasgowCoords,
                zoom: 12
            });

            const search = new Search({ view });
            view.ui.add(search, "top-right");

            const graphicsLayer = new GraphicsLayer();
            map.add(graphicsLayer)

            const point = {
                type: "point",
                longitude: -4.336153,
                latitude: 55.846331
            };

            const point2 = {
                type: "point",
                longitude: -4.302981,
                latitude: 55.856343
            };

            const point3 = {
                type: "point",
                longitude: -4.184007,
                latitude: 55.865911
            };

            const point5 = {
                type: "point",
                longitude: -4.336142,
                latitude: 55.846322
            };

            const simpleMarkerSymbol = {
                type: "simple-marker",
                color: [255, 0, 255],
                outline: {
                    color: [255, 255, 255],
                    width: 1
                }
            }

            const pointGraphic = new Graphic({
                geometry: point,
                symbol: simpleMarkerSymbol
            });

            const pointGraphic2 = new Graphic({
                geometry: point2,
                symbol: simpleMarkerSymbol
            });

            const pointGraphic3 = new Graphic({
                geometry: point3,
                symbol: simpleMarkerSymbol
            });

            const pointGraphic5 = new Graphic({
                geometry: point5,
                symbol: simpleMarkerSymbol
            });


            graphicsLayer.add(pointGraphic)
            graphicsLayer.add(pointGraphic2)
            graphicsLayer.add(pointGraphic3)
            graphicsLayer.add(pointGraphic5)
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