export type MarkerOptions = {
  lat: number;
  lng: number;
};

export type MapOptions = google.maps.MapOptions & { marker: MarkerOptions };
