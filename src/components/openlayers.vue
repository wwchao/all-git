<template>
  <div>
    <div style="margin-bottom: 16px;">
      <button @click="addInteraction('Point')">===点===</button>
      <button style="margin-left: 10px;" @click="addInteraction('Polygon')">===区===</button>
      <button style="margin-left: 10px;" @click="addInteraction('LineString')">===线===</button>
      <button style="margin-left: 10px;" @click="setPolygon()">====+++区===</button>
      <button style="margin-left: 10px;" @click="unSetPolygon()">====---区===</button>
      <button style="margin-left: 10px;" @click="setLineString()">====+++线===</button>
      <button style="margin-left: 10px;" @click="setPoint()">====+++点===</button>
      <button style="margin-left: 10px;" @click="delInteraction('Polygon')">===删除全部Interaction===</button>
    </div>
    <div class="ol-height">
      <div id="map" style="height: 100%;"></div>
    </div>
  </div>
</template>

<script>
import "ol/ol.css"
import Map from "ol/Map"
import View from "ol/View"
import Feature from 'ol/Feature'
import TileLayer from "ol/layer/Tile"
import OSM from "ol/source/OSM"
import { Draw } from 'ol/interaction'
import { Polygon, LineString, Point } from 'ol/geom'
import { transform } from 'ol/proj.js'
import { Vector as VectorSource } from 'ol/source'
import VectorLayer from "ol/layer/Vector"
import { Style, Stroke, Text, Fill, Circle as CircleStyle } from 'ol/style'
export default {
  data () {
    return {
      map: {},
      type: '',
      draw: {},
      source: {},
      polygonLon: [],
      polygonLat: [],
      vector: null,
      plygonfeature: null
    }
  },
  mounted () {
    this.source = new VectorSource()
    this.vector = new VectorLayer({
      source: this.source,
      style: new Style({
        fill: new Fill({
          color: 'rgba(255, 255, 255, 0.2)',
        }),
        stroke: new Stroke({
          color: '#555555',
          width: 2,
        }),
        image: new CircleStyle({
          radius: 7,
          fill: new Fill({
            color: '#333333',
          }),
        }),
      }),
    });
    this.map = new Map({
      layers: [
        new TileLayer({
          source: new OSM()
        }),
        this.vector
      ],
      target: 'map',
      view: new View({
        center: transform([104, 30], 'EPSG:4326', 'EPSG:3857'),
        zoom: 3
      })
    })
    // const modify = new Modify({source: this.source})
    // this.map.addInteraction(modify)
    // this.map.on('singleclick', (evt) => {
    //   console.log('singleclick', evt)
    // })
    // this.map.on('click', (evt) => {
    //   console.log('click', evt)
    // })
    // this.map.on('dblclick', (evt) => {
    //   console.log('dblclick', evt)
    // })
    // this.map.on('pointermove', (evt) => {
    //   console.log('pointermove', evt)
    // })
  },
  methods: {
    addInteraction (type) {
      if (this.type !== type) {
        this.type = type
        this.map.removeInteraction(this.draw)
      } else {
        return
      }
      if (type === 'Point') {
        this.addPoints()
      } else if (type === 'Polygon') {
        this.addPolygon()
      } else if (type === 'LineString') {
        this.addLineString()
      }
      this.draw.on('drawend', (evt) => {
        console.log(evt)
        evt.feature.setStyle(new Style({
          fill: new Fill({
            color: 'rgba(255, 255, 255, 0.5)'
          }),
          stroke: new Stroke({
            width: 5,
            color: [255, 255, 0, 0.8]
          }),
          text: new Text({
            textAlign: "center",
            textBaseline: "middle",
            font: "normal 14px 微软雅黑",
            text: '777',
            // text: '点',
            fill: new Fill({ color: "#aa3300" }),
            stroke: new Stroke({ color: "#ffcc33", width: 2 }),
          })
        }))
        const geometry = evt.feature.getGeometry();
        const corrdinates = geometry.getCoordinates();
        console.log(corrdinates)
      })
    },
    addPoints () {
      this.draw = new Draw({
        source: this.source,
        type: 'Point',
      });
      this.map.addInteraction(this.draw);
    },
    addPolygon () {
      this.draw = new Draw({
        source: this.source,
        type: 'Polygon'
      });
      this.map.addInteraction(this.draw);
      console.log(this.draw)
    },
    addLineString () {
      this.draw = new Draw({
        source: this.source,
        type: 'LineString',
      });
      this.map.addInteraction(this.draw);
    },
    delInteraction () {
      this.vector.getSource().clear()
    },
    setPolygon () {
      let polygonGeometry = new Polygon([
        [[11885908.068919089, 4777103.928011975],
        [11294230.716004835, 4331071.0323022865],
        [11658485.056105025, 3842235.2249650853],
        [12379456.362268807, 3828774.6986199366],
        [12661020.892558184, 4392046.956287465],
        [12594069.744595805, 4841594.6896308],
        [12189303.646288555, 4839811.234979654],
        [11885908.068919089, 4777103.928011975]]
      ])
      // polygonGeometry.applyTransform(getTransform('EPSG:4326', 'EPSG:3857'));
      this.plygonfeature = new Feature({
        geometry: polygonGeometry
      })
      this.plygonfeature.setStyle(new Style({
        fill: new Fill({
          color: 'rgba(255, 255, 255, 0.5)'
        }),
        stroke: new Stroke({
          width: 5,
          color: [255, 255, 0, 0.8]
        }),
        text: new Text({
          textAlign: "center",
          textBaseline: "middle",
          font: "normal 14px 微软雅黑",
          text: '喊我大侠',
          // text: '点',
          fill: new Fill({ color: "#aa3300" }),
          stroke: new Stroke({ color: "#ffcc33", width: 2 }),
        })
      }))
      this.vector.getSource().addFeature(this.plygonfeature);
    },
    unSetPolygon () {
      this.vector.getSource().getFeatures().forEach((e) => {
        console.log(e)
        // this.vector.getSource().removeFeature(e)
      })
      // this.vector.getSource().removeFeature(this.plygonfeature)
    },
    setLineString () {
      let polygonGeometry = new LineString([
        [20236967.66845598, 8794822.04214411],
        [18559680.557937324, 7403527.012840144],
        [17004880.845359962, 5149740.075451877],
        [15174155.220215924, 3271694.0500279097],
        [14100932.304920796, 2931043.6138179116],
        [13118304.907457825, 2139297.1152972416],
        [12241419.318970282, 996175.4775210246],
        [11985249.438329626, -71779.16259383224],
        [11714874.029970735, -878295.6468877597],
        [9039436.92547581, 40077.60864441376],
        [7441173.942661215, 1855562.8663026672],
        [5936328.767953917, 179498.74823657516],
        [5024917.161767103, -897110.9153887257],
        [6454124.957100514, -1657812.2208828004],
        [5301783.837758826, -3412618.237625437],
        [2141759.4930215087, -4818777.329045165],
        [204351.29547699168, -2960393.259204708],
        [-283246.3877255544, -920912.2300424486],
        [-1994024.6761759296, 366804.7461636979],
        [-2461395.945739936, 2526044.959334609]
      ])
      // polygonGeometry.applyTransform(getTransform('EPSG:4326', 'EPSG:3857'));
      let plygonfeature = new Feature({
        geometry: polygonGeometry
      })
      plygonfeature.setStyle(new Style({
        fill: new Fill({
            color: 'rgba(255, 255, 255, 0.5)'
        }),
        stroke: new Stroke({
            width: 5,
            color: [255, 255, 0, 0.8],
            lineDash:[8]
        }),
        text: new Text({
          textAlign: "center",
          textBaseline: "middle",
          font: "normal 14px 微软雅黑",
          text: 'LineString 1',
          // text: '点',
          fill: new Fill({ color: "#aa3300" }),
          stroke: new Stroke({ color: "#ffcc33", width: 2 }),
        })
      }))
      this.vector.getSource().addFeature(plygonfeature);
    },
    setPoint () {
      let polygonGeometry = new Point([20236967.66845598, 8784822.04214411])
      // polygonGeometry.applyTransform(getTransform('EPSG:4326', 'EPSG:3857'));
      let plygonfeature = new Feature({
        geometry: polygonGeometry
      })
      plygonfeature.setStyle(new Style({
        fill: new Fill({
            color: 'rgba(255, 255, 255, 0.5)'
        }),
        stroke: new Stroke({
            width: 5,
            color: [255, 255, 0, 0.8],
            lineDash:[8]
        }),
        image: new CircleStyle({
          radius: 5,
          fill: new Fill({
            color: '#333333',
          }),
        }),
        text: new Text({
          textAlign: "center",
          textBaseline: "middle",
          font: "normal 14px 微软雅黑",
          text: 'Point 1',
          // text: '点',
          fill: new Fill({ color: "#aa3300" }),
          stroke: new Stroke({ color: "#ffcc33", width: 2 }),
        })
      }))
      this.vector.getSource().addFeature(plygonfeature);
    }
  }
}
</script>

<style scoped>
.ol-height{
  height: calc(100vh - 60px);
  min-height: 500px;
}
</style>