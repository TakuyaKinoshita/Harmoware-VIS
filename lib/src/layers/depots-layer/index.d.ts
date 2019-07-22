import { LayerProps, CompositeLayer, ScatterplotLayer } from 'deck.gl';
import CubeiconLayer from '../cubeicon-layer';
import { DepotsData, LightSettings, Position, Radius, DataOption } from '../../types';
interface Props extends LayerProps {
    layerRadiusScale?: number;
    layerOpacity?: number;
    depotsData: DepotsData[];
    optionVisible?: boolean;
    optionChange?: boolean;
    optionOpacity?: number;
    optionCellSize?: number;
    optionElevationScale?: number;
    lightSettings: LightSettings;
    getColor?: (x: any) => number[];
    getRadius?: (x: any) => number;
    getCubeColor?: (x: DataOption) => number[][];
    getCubeElevation?: (x: DataOption) => number[];
}
export default class DepotsLayer extends CompositeLayer<Props> {
    constructor(props: Props);
    static layerName: string;
    static defaultProps: {
        layerRadiusScale: number;
        layerOpacity: number;
        optionVisible: boolean;
        optionChange: boolean;
        optionOpacity: number;
        optionCellSize: number;
        optionElevationScale: number;
        getColor: (x: DataOption) => number[];
        getRadius: (x: Radius) => number;
        getCubeColor: (x: DataOption) => number[] | number[][];
        getCubeElevation: (x: DataOption) => number[];
    };
    renderLayers(): (CubeiconLayer | ScatterplotLayer<{
        id: string;
        data: DepotsData[];
        radiusScale: number;
        getPosition: (x: Position) => number[];
        getColor: (x: any) => number[];
        getRadius: (x: any) => number;
        opacity: number;
        pickable: true;
        radiusMinPixels: number;
    }, {}>)[];
}
export {};
