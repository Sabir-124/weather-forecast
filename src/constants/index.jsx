export const DEFAULT_PLACE = {
  name: "Quetta",
  place_id: "quetta",
  adm_area1: "Balochistan",
  adm_area2: "Quetta",
  country: "Islamic Republic of Pakistan",
  lat: "30.18414N",
  lon: "67.00141E",
  timezone: "Asia/Karachi",
  type: "settlement"
};

export const MEASUREMENT_SYSTEMS = {
  AUTO: 'auto',
  METRIC: 'metric',
  UK: 'uk',
  US: 'us',
  CA: 'ca'
};

export const UNITS = {
  metric: {
    temperature: <span>&deg;C</span>,
    precipitation: 'mm/h',
    wind_speed: 'm/s',
    visibility: 'km',
    humidity: '%',
    uv_index: '',
    cloud_cover: '%'
  },
  us: {
    temperature: <span>&deg;F</span>,
    precipitation: 'in/h',
    wind_speed: 'mph',
    visibility: 'mi',
    humidity: '%',
    uv_index: '',
    cloud_cover: '%'
  },
  uk: {
    temperature: <span>&deg;C</span>,
    precipitation: 'mm/h',
    wind_speed: 'mph',
    visibility: 'mi',
    humidity: '%',
    uv_index: '',
    cloud_cover: '%'
  },
  ca: {
    temperature: <span>&deg;C</span>,
    precipitation: 'mm/h',
    wind_speed: 'km/h',
    visibility: 'km',
    humidity: '%',
    uv_index: '',
    cloud_cover: '%'
  },
}

