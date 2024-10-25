import './map.scss';
import { MapContainer, TileLayer} from 'react-leaflet';
import "leaflet/dist/leaflet.css";
import Pin from '../pin/Pin';
// install react library for maps using
//npm install react-leaflet leaflet
function Map({items}){
    return(
        <MapContainer center={[19.07283000, 72.88261000]} zoom={7} scrollWheelZoom={false} className='map'>
            <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {items.map(item=>(
                <Pin item={item} key={item.id}/>
            ))}
        </MapContainer>    )
}
export default Map;