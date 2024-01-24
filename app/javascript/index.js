document.addEventListener("DOMContentLoaded", function () {
  function initialize() {
    const location_data = JSON.parse(
      document.getElementById("location_data").dataset.variable
    );
    // const latitude = 33.560655361380114;
    // const longitud = 133.53351920699242;
    const location = {
      lat: location_data.latitude,
      lng: location_data.longitud,
    };
    // const location = { lat: latitude, lng: longitud };
    const panorama = new google.maps.StreetViewPanorama(
      document.getElementById("panorama"),
      {
        position: location,
        pov: {
          heading: 34,
          pitch: 5,
        },
        addressControl: false, //住所情報の非表示
      }
    );
  }
});
