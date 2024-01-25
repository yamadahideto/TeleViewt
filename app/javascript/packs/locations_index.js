function initialize() {
  const locationDataElement = document.getElementById("location_data");
  if (!locationDataElement) {
    return; // location_data要素が存在しない場合は、関数を終了
  }
  const location_data = JSON.parse(locationDataElement.dataset.variable);
  const location = {
    lat: location_data.latitude,
    lng: location_data.longitud,
  };
  const panorama = new google.maps.StreetViewPanorama(
    document.getElementById("panorama"),
    {
      position: location,
      pov: {
        heading: 34,
        pitch: 5,
      },
      addressControl: false,
    }
  );
}
