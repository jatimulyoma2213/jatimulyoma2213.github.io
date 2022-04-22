var map = new ol.Map({
  target: 'map',
  layers: [
    new ol.layer.Tile({
      source: new ol.source.OSM()
    })
  ],
  view: new ol.View({
    center: ol.proj.transform([105.293562, -5.340109], 'EPSG:4326', 'EPSG:3857'),
    zoom: 50
  })
});
