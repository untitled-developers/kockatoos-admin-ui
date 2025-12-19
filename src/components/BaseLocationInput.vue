<template>
  <div ref="mapContainer" class="w-full h-64 rounded-lg shadow-lg"></div>
</template>

<script setup>
// Also known as KousaMap By Mohammad Haidar
import {ref, onMounted, watch} from 'vue';

const props = defineProps({
  latitude: {
    type: Number,
    default: null,
  },
  longitude: {
    type: Number,
    default: null,
  },
  defaultLocation: {
    type: Object,
    default: () => ({
      latitude: 33.888630,
      longitude: 35.495480,
    }),
  },
  apiKey: {
    type: String,
    default: 'AIzaSyCt890OKURC0lOnc9e6oEcwgn7SkLH1_eQ',
  }
});
const emit = defineEmits(['change'])

const mapContainer = ref(null);
const map = ref(null);
const marker = ref(null);

const initMap = () => {
  const center = {
    lat: props.latitude || props.defaultLocation.latitude,
    lng: props.longitude || props.defaultLocation.longitude,
  };

  map.value = new google.maps.Map(mapContainer.value, {
    center,
    zoom: 8,
  });

  marker.value = new google.maps.Marker({
    position: center,
    map: map.value,
    draggable: true,
  });

  marker.value.addListener('dragend', (event) => {
    const newLat = event.latLng.lat();
    const newLng = event.latLng.lng();

    emit('change', {
      latitude: newLat,
      longitude: newLng,
    })
  });
};

onMounted(() => {
  const script = document.createElement('script');
  script.src = `https://maps.googleapis.com/maps/api/js?key=${props.apiKey}`;
  script.onload = initMap;
  document.head.appendChild(script);
});

watch(
    () => [props.latitude, props.longitude],
    ([newLat, newLng]) => {
      if (marker.value) {
        const position = new google.maps.LatLng(newLat, newLng);
        marker.value.setPosition(position);
        map.value.setCenter(position);
      }
    },
);
</script>
